
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

const PressReleasesPage = () => {
  const { data: pressReleases, isLoading, error } = usePressReleases(50);
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
    <>
      <LarkbergetNavbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-slate-800 to-blue-800 text-white pt-48 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Pressmeddelanden
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Här hittar du de senaste nyheterna och pressmeddelanden från Lärkberget AB.
            </p>
            
            {/* Sync button */}
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

      {/* Press Releases Content */}
      <div style={{ backgroundColor: '#123252', minHeight: '50vh', padding: '40px 20px' }}>
        <div className="max-w-6xl mx-auto">
          {isLoading || isSyncing ? (
            <div id="wrapper">
              <div id="container">
                <div className="text-center py-12">
                  <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-4 text-white" />
                  <p className="text-white">Laddar pressmeddelanden...</p>
                </div>
              </div>
            </div>
          ) : pressReleases && pressReleases.length > 0 ? (
            <MFNNewsView pressReleases={pressReleases} />
          ) : (
            <div id="wrapper">
              <div id="container">
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium mb-2 text-white">Inga pressmeddelanden hittades</h3>
                  <p className="mb-4 text-white">Klicka på synkronisera för att hämta de senaste pressmeddelanden.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <LarkbergetFooter />
    </>
  );
};

export default PressReleasesPage;
