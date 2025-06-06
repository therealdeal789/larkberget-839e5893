
import React from "react";
import LarkbergetNavbar from "@/components/LarkbergetNavbar";
import LarkbergetFooter from "@/components/LarkbergetFooter";
import { Calendar, FileText, ExternalLink, RefreshCw } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { usePressReleases, useSyncMFNNews } from "@/hooks/usePressReleases";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('sv-SE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryFromTags = (tags: string[]) => {
    if (tags.includes(':regulatory')) return 'Finansiella rapporter';
    if (tags.includes('sub:report:interim')) return 'Delårsrapport';
    if (tags.includes('sub:report:annual')) return 'Årsredovisning';
    if (tags.some(tag => tag.includes('pr'))) return 'Pressmeddelande';
    if (tags.some(tag => tag.includes('ir'))) return 'Investerarrelationer';
    return 'Bolagsstyrning';
  };

  if (error) {
    console.error('Error loading press releases:', error);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <LarkbergetNavbar />
      
      {/* Hero Section with Dark Blue Gradient Background */}
      <section className="bg-gradient-to-br from-blue-900 via-slate-800 to-blue-800 text-white pt-48 pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Nyheter
            </h1>
            <div className="flex justify-center mt-6">
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

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            {isLoading ? (
              <div className="space-y-8">
                {[...Array(4)].map((_, i) => (
                  <Card key={i} className="animate-pulse">
                    <CardHeader className="pb-3">
                      <div className="h-4 bg-gray-200 rounded mb-2"></div>
                      <div className="h-6 bg-gray-200 rounded"></div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="h-4 bg-gray-200 rounded mb-4"></div>
                      <div className="h-8 bg-gray-200 rounded w-24"></div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : pressReleases && pressReleases.length > 0 ? (
              <div className="space-y-8">
                {pressReleases.map((item) => (
                  <Card key={item.id} className="group hover:shadow-lg transition-all duration-300">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(item.published_at)}</span>
                        </div>
                        <span className="text-xs bg-trust-100 text-trust-800 px-2 py-1 rounded-full">
                          {getCategoryFromTags(item.tags)}
                        </span>
                      </div>
                      <CardTitle className="text-xl leading-tight group-hover:text-trust-600 transition-colors">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      {item.summary && (
                        <CardDescription className="mb-4">
                          {item.summary}
                        </CardDescription>
                      )}
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="text-trust-600 border-trust-300 hover:bg-trust-50"
                      >
                        <span>Läs mer</span>
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Inga nyheter hittades</h3>
                <p className="text-gray-500 mb-4">Klicka på "Synkronisera nyheter" för att hämta de senaste artiklarna.</p>
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
        </div>
      </section>

      <LarkbergetFooter />
    </div>
  );
};

export default NewsPage;
