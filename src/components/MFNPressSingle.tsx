import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { fetchMFNItem, MFNItem } from '@/utils/mfnApi';

const MFNPressSingle: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<MFNItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadItem = async () => {
      if (!id) {
        setError('Inget ID angivet');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const fetchedItem = await fetchMFNItem(id);
        setItem(fetchedItem);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load press release');
      } finally {
        setLoading(false);
      }
    };

    loadItem();
  }, [id]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('sv-SE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-larkberget-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Laddar pressmeddelande...</p>
      </div>
    );
  }

  if (error || !item) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 mb-4">{error || 'Pressmeddelandet kunde inte hittas'}</p>
        <Link 
          to="/pressmeddelanden"
          className="inline-flex items-center text-larkberget-600 hover:text-larkberget-700"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Tillbaka till pressmeddelanden
        </Link>
      </div>
    );
  }

  return (
    <div id="container">
      <div className="mb-6">
        <Link 
          to="/pressmeddelanden"
          className="inline-flex items-center text-larkberget-600 hover:text-larkberget-700"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Tillbaka till pressmeddelanden
        </Link>
      </div>

      <div className="mfn-date">{formatDate(item.published_at)}</div>
      <h1 className="mfn-title">{item.title}</h1>

      {item.preamble && (
        <div className="mfn-preamble">{item.preamble}</div>
      )}

      {item.tags && item.tags.length > 0 && (
        <div className="mfn-tags-list">
          {item.tags.map((tag, index) => (
            <span key={index} className="mfn-tag">{tag}</span>
          ))}
        </div>
      )}

      <div className="mfn-content" dangerouslySetInnerHTML={{ __html: item.content }} />

      {item.attachments && item.attachments.length > 0 && (
        <div className="mfn-attachments-container mt-6">
          <h3 className="text-lg font-semibold mb-4">Bilagor</h3>
          <div className="space-y-2">
            {item.attachments.map((attachment, index) => (
              <a 
                key={index} 
                href={attachment.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mfn-attachment flex items-center"
              >
                <div className={`mfn-file-type-${attachment.type === 'pdf' ? 'pdf' : attachment.type.includes('image') ? 'image' : 'file'} mr-2`} />
                <span className="mfn-attachment-text">{attachment.name}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MFNPressSingle;