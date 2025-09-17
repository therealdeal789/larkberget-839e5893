const FEED_ID = "b64b654a-26ab-45a5-bf5e-78064331219e";
const MFN_BASE_URL = "https://feed.mfn.se";

export interface MFNItem {
  id: string;
  title: string;
  content: string;
  preamble?: string;
  published_at: string;
  tags?: string[];
  attachments?: Array<{
    url: string;
    name: string;
    type: string;
  }>;
}

export interface MFNResponse {
  items: MFNItem[];
  pagination?: {
    current_page: number;
    total_pages: number;
    total_items: number;
  };
}

export const fetchMFNFeed = async (params: {
  limit?: number;
  page?: number;
  search?: string;
  tags?: string;
  year?: string;
} = {}): Promise<MFNResponse> => {
  const searchParams = new URLSearchParams({
    feed_id: FEED_ID,
    limit: (params.limit || 10).toString(),
    page: (params.page || 1).toString(),
    format: 'json',
    ...Object.fromEntries(Object.entries(params).filter(([_, v]) => v && v !== ''))
  });

  const response = await fetch(`${MFN_BASE_URL}/list?${searchParams}`);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch MFN feed: ${response.statusText}`);
  }

  return response.json();
};

export const fetchMFNItem = async (itemId: string): Promise<MFNItem> => {
  const searchParams = new URLSearchParams({
    feed_id: FEED_ID,
    id: itemId,
    format: 'json'
  });

  const response = await fetch(`${MFN_BASE_URL}/single?${searchParams}`);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch MFN item: ${response.statusText}`);
  }

  const data = await response.json();
  return data.item;
};