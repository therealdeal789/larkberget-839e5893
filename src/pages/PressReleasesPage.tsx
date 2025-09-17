
import React, { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import LarkbergetNavbar from "@/components/LarkbergetNavbar";
import LarkbergetFooter from "@/components/LarkbergetFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, FileText } from "lucide-react";

interface PressRelease {
  id: string;
  title: string;
  summary: string | null;
  content: string | null;
  published_at: string;
  primary_image_url: string | null;
  attachments: any;
}

const PressReleasesPage = () => {
  const [pressReleases, setPressReleases] = useState<PressRelease[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPressReleases = async () => {
      try {
        const { data, error } = await supabase
          .from('press_releases')
          .select('*')
          .order('published_at', { ascending: false });

        if (error) {
          console.error('Error fetching press releases:', error);
        } else {
          setPressReleases(data || []);
        }
      } catch (error) {
        console.error('Error fetching press releases:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPressReleases();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('sv-SE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <LarkbergetNavbar />
      
      {/* Hero Section with matching styling */}
      <section className="bg-gradient-to-br from-larkberget-500 via-trust-700 to-larkberget-900 text-white pt-48 pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Pressmeddelanden
            </h1>
          </div>
        </div>
      </section>

      {/* Press Releases Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-larkberget-900 mb-8 text-center">
              Pressmeddelanden & Nyheter
            </h2>
            
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-larkberget-600 mx-auto"></div>
                <p className="mt-4 text-gray-600">Laddar pressmeddelanden...</p>
              </div>
            ) : pressReleases.length > 0 ? (
              <div className="space-y-6">
                {pressReleases.map((release) => (
                  <Card key={release.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-xl font-semibold text-larkberget-900 mb-2">
                          {release.title}
                        </CardTitle>
                        <div className="flex items-center text-sm text-gray-500 ml-4">
                          <Calendar className="w-4 h-4 mr-1" />
                          {formatDate(release.published_at)}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {release.summary && (
                        <p className="text-gray-700 mb-4">{release.summary}</p>
                      )}
                      {release.primary_image_url && (
                        <img 
                          src={release.primary_image_url} 
                          alt={release.title}
                          className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                      )}
                      {release.attachments && Array.isArray(release.attachments) && release.attachments.length > 0 && (
                        <div className="flex items-center text-sm text-larkberget-600">
                          <FileText className="w-4 h-4 mr-1" />
                          {release.attachments.length} bilaga(r)
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  Inga pressmeddelanden tillgängliga
                </h3>
                <p className="text-gray-500">
                  Pressmeddelanden kommer att visas här när de publiceras.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <LarkbergetFooter />
    </>
  );
};

export default PressReleasesPage;
