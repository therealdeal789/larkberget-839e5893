
import React from 'react';
import { PressRelease } from '@/hooks/usePressReleases';

interface MFNNewsViewProps {
  pressReleases: PressRelease[];
}

const MFNNewsView = ({ pressReleases }: MFNNewsViewProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('sv-SE', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }).toUpperCase();
  };

  const getFileTypeClass = (attachment: any) => {
    if (!attachment.mime_type) return 'mfn-file-type-unknown';
    
    if (attachment.mime_type.includes('pdf')) return 'mfn-file-type-pdf';
    if (attachment.mime_type.includes('image')) return 'mfn-file-type-image';
    return 'mfn-file-type-unknown';
  };

  return (
    <div id="wrapper">
      <div id="container">
        <h1 className="mfn-heading-h1">Pressmeddelanden</h1>
        
        <div className="introduction">
          <p>
            <span className="documentation-highlight">Senaste nyheterna</span> från Combigene AB. 
            Här hittar du våra pressmeddelanden, finansiella rapporter och andra viktiga meddelanden.
          </p>
        </div>

        <div className="mfn-toolbar">
          <div className="mfn-tags">
            <span>Kategori</span>
            <select className="mfn-select">
              <option>Alla (Kategorier)</option>
            </select>
          </div>
          
          <div className="mfn-year">
            <span>År</span>
            <select className="mfn-select">
              <option>Alla (År)</option>
            </select>
          </div>
          
          <div className="mfn-lang">
            <span>Språk</span>
            <select className="mfn-select">
              <option>Alla (Språk)</option>
            </select>
          </div>
          
          <div className="mfn-search">
            <span>Sök</span>
            <input type="text" className="mfn-search-input" placeholder="Sök..." />
            <button className="mfn-search-button">Sök</button>
          </div>
        </div>

        <div className="mfn-content">
          {pressReleases && pressReleases.length > 0 ? (
            pressReleases.map((item) => (
              <div key={item.id} className="mfn-row">
                <div className="mfn-sub-row">
                  <div style={{ flexGrow: 1 }}>
                    <div className="mfn-date">{formatDate(item.published_at)}</div>
                    <div className="mfn-title">
                      <a href={`#`}>{item.title}</a>
                    </div>
                    {item.summary && (
                      <div className="mfn-preamble">{item.summary}</div>
                    )}
                    {item.tags && item.tags.length > 0 && (
                      <div className="mfn-tags-list">
                        {item.tags.map((tag, index) => (
                          <span key={index} className="mfn-tag">
                            {tag.replace(':', '').replace('sub:', '')}
                          </span>
                        ))}
                      </div>
                    )}
                    <div style={{ marginTop: '10px' }}>
                      <a href="#" className="documentation-link">Läs mer</a>
                    </div>
                  </div>
                  
                  {item.attachments && Array.isArray(item.attachments) && item.attachments.length > 0 && (
                    <div className="mfn-attachments">
                      {item.attachments.slice(0, 3).map((attachment, index) => (
                        <div key={index} className="mfn-attachment">
                          <div className={getFileTypeClass(attachment)}></div>
                          <span className="mfn-attachment-text">{attachment.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="mfn-notfound">
              <p>Inga pressmeddelanden hittades.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MFNNewsView;
