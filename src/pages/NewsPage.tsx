
import React from "react";
import LarkbergetNavbar from "@/components/LarkbergetNavbar";
import LarkbergetFooter from "@/components/LarkbergetFooter";
import MFNNewsView from "@/components/MFNNewsView";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePressReleases, useSyncMFNNews } from "@/hooks/usePressReleases";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

// Import MFN CSS styles
import "../../css/general.css";
import "../../css/list.css";
import "../../css/single.css";
import "../../css/archive.css";

const NewsPage = () => {
  const { data: pressReleases, isLoading, error } = usePressReleases(20);
  const { refetch: syncNews, isLoading: isSyncing } = useSyncMFNNews();
  const queryClient = useQueryClient();

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
    <div className="min-h-screen bg-gray-50">
      <LarkbergetNavbar />
      
      {/* Hero Section with sync button */}
      <section className="bg-gradient-to-br from-blue-900 via-slate-800 to-blue-800 text-white pt-48 pb-16">
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

      {/* MFN Style News Content */}
      <section className="py-8" style={{ backgroundColor: '#123252' }}>
        <div className="flex justify-center">
          {isLoading ? (
            <div className="text-white text-center">
              <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-4" />
              <p>Laddar nyheter...</p>
            </div>
          ) : pressReleases && pressReleases.length > 0 ? (
            <MFNNewsView pressReleases={pressReleases} />
          ) : (
            <div className="text-white text-center py-12">
              <h3 className="text-lg font-medium mb-2">Inga nyheter hittades</h3>
              <p className="mb-4">Klicka på "Synkronisera nyheter" för att hämta de senaste artiklarna.</p>
              <Button 
                onClick={handleSync}
                disabled={isSyncing}
                className="text-trust-600 border-trust-300 hover:bg-trust-50"
                variant="outline"
              >
                {isSyncing ? (
                  <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <RefreshCw className="w-4 h-4 mr-2" />
                )}
                Synkronisera nyheter
              </Button>
            </div>
          )}
        </div>
      </section>

      <LarkbergetFooter />
    </div>
  );
};

export default NewsPage;
