import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchMFNFeed, MFNItem } from '@/utils/mfnApi';

interface MFNPressListProps {
  limit?: number;
}

const MFNPressList: React.FC<MFNPressListProps> = ({ limit = 10 }) => {
  const [items, setItems] = useState<MFNItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const loadFeed = async () => {
    try {
      setLoading(true);
      const response = await fetchMFNFeed({
        limit,
        search: searchTerm || undefined,
        tags: selectedTags || undefined,
        year: selectedYear || undefined
      });
      setItems(response.items);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load press releases');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFeed();
  }, [searchTerm, selectedTags, selectedYear, limit]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    loadFeed();
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedTags('');
    setSelectedYear('');
  };

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
        <p className="mt-4 text-gray-600">Laddar pressmeddelanden...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 mb-4">Fel vid laddning av pressmeddelanden</p>
        <button 
          onClick={loadFeed}
          className="bg-larkberget-600 text-white px-4 py-2 rounded hover:bg-larkberget-700"
        >
          Försök igen
        </button>
      </div>
    );
  }

  return (
    <div className="mfn-content">
      {/* MFN Toolbar */}
      <div className="mfn-toolbar">
        <div className="mfn-search">
          <span>Sök</span>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              className="mfn-search-input"
              placeholder="Sök i pressmeddelanden..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="mfn-search-button">SÖK</button>
          </form>
        </div>

        <div className="mfn-tags">
          <span>Taggar</span>
          <select 
            className="mfn-select"
            value={selectedTags}
            onChange={(e) => setSelectedTags(e.target.value)}
          >
            <option value="">Alla taggar</option>
          </select>
        </div>

        <div className="mfn-year">
          <span>År</span>
          <select 
            className="mfn-select"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="">Alla år</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </select>
        </div>

        <div className="mfn-clear">
          <button onClick={clearFilters} className="mfn-clear-button">
            <span className="mfn-clear-icon">✕</span> Rensa filter
          </button>
        </div>
      </div>

      {/* Press Release Items */}
      {items.length === 0 ? (
        <div className="mfn-notfound">
          <p>Inga pressmeddelanden hittades.</p>
        </div>
      ) : (
        <div>
          {items.map((item) => (
            <div key={item.id} className="mfn-row">
              <div className="mfn-date">{formatDate(item.published_at)}</div>
              <div className="mfn-sub-row">
                <div style={{ flex: 1 }}>
                  <div className="mfn-title">
                    <Link to={`/pressmeddelanden/${item.id}`}>
                      {item.title}
                    </Link>
                  </div>
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
                </div>
                {item.attachments && item.attachments.length > 0 && (
                  <div className="mfn-attachments">
                    {item.attachments.map((attachment, index) => (
                      <a key={index} href={attachment.url} target="_blank" rel="noopener noreferrer">
                        <div className={`mfn-file-type-${attachment.type === 'pdf' ? 'pdf' : attachment.type.includes('image') ? 'image' : 'unknown'}`}>
                          <span className="mfn-attachment-text">{attachment.name}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MFNPressList;