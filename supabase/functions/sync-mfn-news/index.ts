
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface MFNItem {
  id: string;
  content: {
    title: string;
    summary?: string;
    body?: string;
  };
  published_at: string;
  language: string;
  type: string;
  tags: string[];
  attachments?: any[];
  primary_image_url?: string;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Starting MFN sync for Combigene...');
    
    // Initialize Supabase client
    const supabaseUrl = "https://tubpnlfpxrsorwaparts.supabase.co";
    const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1YnBubGZweHJzb3J3YXBhcnRzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0ODQzOTQ1MCwiZXhwIjoyMDY0MDE1NDUwfQ.9vOmhJg0uydm8UNiYs7qAi_n5MHYH_a1h2eGEwz7CuU";
    
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Fetch data from MFN API with the correct Combigene feed ID
    const feedId = 'b64b654a-26ab-45a5-bf5e-78064331219e';
    const mfnApiUrl = `https://widget.mfn.se/v1/serve/feeds/${feedId}/items?limit=50&lang=all`;
    
    console.log('Fetching from MFN API for Combigene:', mfnApiUrl);
    
    const response = await fetch(mfnApiUrl, {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Combigene-Sync/1.0'
      }
    });

    if (!response.ok) {
      throw new Error(`MFN API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log('MFN API response received, items count:', data?.items?.length || 0);

    if (!data.items || !Array.isArray(data.items)) {
      throw new Error('Invalid response format from MFN API');
    }

    // Process and upsert each item
    let processedCount = 0;
    let errorCount = 0;

    for (const item of data.items as MFNItem[]) {
      try {
        const pressRelease = {
          mfn_id: item.id,
          title: item.content.title,
          content: item.content.body || null,
          summary: item.content.summary || null,
          published_at: item.published_at,
          language: item.language || 'sv',
          type: item.type || null,
          tags: item.tags || [],
          attachments: item.attachments || [],
          primary_image_url: item.primary_image_url || null,
          updated_at: new Date().toISOString()
        };

        const { error } = await supabase
          .from('press_releases')
          .upsert(pressRelease, { 
            onConflict: 'mfn_id',
            ignoreDuplicates: false 
          });

        if (error) {
          console.error('Error upserting item:', item.id, error);
          errorCount++;
        } else {
          processedCount++;
        }
      } catch (itemError) {
        console.error('Error processing item:', item.id, itemError);
        errorCount++;
      }
    }

    console.log(`Combigene sync completed. Processed: ${processedCount}, Errors: ${errorCount}`);

    return new Response(
      JSON.stringify({ 
        success: true, 
        processed: processedCount,
        errors: errorCount,
        total: data.items.length 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );

  } catch (error) {
    console.error('Error in sync-mfn-news function:', error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        success: false 
      }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});
