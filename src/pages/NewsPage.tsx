
import React, { useEffect } from "react";
import LarkbergetNavbar from "@/components/LarkbergetNavbar";
import LarkbergetFooter from "@/components/LarkbergetFooter";
import MFNNewsView from "@/components/MFNNewsView";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePressReleases, useSyncMFNNews } from "@/hooks/usePressReleases";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

// Import MFN CSS styles - ensure correct order
import "../../css/general.css";
import "../../css/list.css";
import "../../css/single.css";
import "../../css/archive.css";

const NewsPage = () => {
  const { data: pressReleases, isLoading, error } = usePressReleases(20);
  const { refetch: syncNews, isLoading: isSyncing } = useSyncMFNNews();
  const queryClient = useQueryClient();

  // Automatically sync news when page loads if no data exists
  useEffect(() => {
    const autoSync = async () => {
      if (!pressReleases || pressReleases.length === 0) {
        console.log('No press releases found, auto-syncing...');
        try {
          const result = await syncNews();
          if (result.data?.success) {
            console.log(`Auto-sync completed! ${result.data.processed} articles synced.`);
            queryClient.invalidateQueries({ queryKey: ['press-releases'] });
          }
        } catch (error) {
          console.error('Auto-sync error:', error);
        }
      }
    };

    autoSync();
  }, [pressReleases, syncNews, queryClient]);

  const handleSync = async () => {
    try {
      const result = await syncNews();
      if (result.data?.success) {
        toast.success(`Synkronisering slutförd! ${result.data.processed} artiklar uppdaterade.`);
        queryClient.invalidateQueries({ queryKey: ['press-releases'] });
      }
    } catch (error) {
      console.error('Sync error:', error);
      toast.error('Fel vid synkronisering av nyheter');
    }
  };

  if (error) {
    console.error('Error loading press releases:', error);
  }

  return (
    <>
      <LarkbergetNavbar />
      
      {/* Sync button at top */}
      <section className="bg-gradient-to-br from-blue-900 via-slate-800 to-blue-800 text-white pt-48 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center">
              <Button 
                onClick={handleSync}
                disabled={isSyncing}
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                {isSyncing ? (
                  <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <RefreshCw className="w-4 h-4 mr-2" />
                )}
                Synkronisera nyheter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* MFN News Content - directly use their CSS structure */}
      <div style={{ backgroundColor: '#123252', minHeight: '100vh', padding: 0, margin: 0 }}>
        {isLoading || isSyncing ? (
          <div id="wrapper">
            <div id="container">
              <div className="text-center py-12">
                <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-4 text-white" />
                <p className="text-white">Laddar nyheter...</p>
              </div>
            </div>
          </div>
        ) : pressReleases && pressReleases.length > 0 ? (
          <MFNNewsView pressReleases={pressReleases} />
        ) : (
          <div id="wrapper">
            <div id="container">
              <div className="text-center py-12">
                <h3 className="text-lg font-medium mb-2">Inga nyheter hittades</h3>
                <p className="mb-4">Försöker hämta nyheter automatiskt...</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <LarkbergetFooter />
    </>
  );
};

export default NewsPage;
