
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface PressRelease {
  id: string;
  mfn_id: string;
  title: string;
  content?: string;
  summary?: string;
  published_at: string;
  language: string;
  type?: string;
  tags: string[];
  attachments: any[];
  primary_image_url?: string;
  created_at: string;
  updated_at: string;
}

export const usePressReleases = (limit: number = 10) => {
  return useQuery({
    queryKey: ['press-releases', limit],
    queryFn: async (): Promise<PressRelease[]> => {
      const { data, error } = await supabase
        .from('press_releases')
        .select('*')
        .order('published_at', { ascending: false })
        .limit(limit);

      if (error) {
        console.error('Error fetching press releases:', error);
        throw error;
      }

      return data || [];
    },
  });
};

export const useSyncMFNNews = () => {
  return useQuery({
    queryKey: ['sync-mfn-news'],
    queryFn: async () => {
      const { data, error } = await supabase.functions.invoke('sync-mfn-news');
      
      if (error) {
        console.error('Error syncing MFN news:', error);
        throw error;
      }
      
      return data;
    },
    enabled: false, // Only run when manually triggered
  });
};
