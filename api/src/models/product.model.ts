export interface QuestionAnswer {
  id: number;
  userId: number;
  productId: string;
  question: string;
  answer?: string;
  date: string;
}

export interface Review {
  id: number;
  productId: string;
  userId: number;
  title: string;
  comments: string;
  rating: number;
  likes: number;
  dislikes: number;
}

export interface Pictures {
  id: string;
  productId: string;
  url: string;
  secure_url: string;
  size: string;
  max_size: string;
  quality: string;
}

export interface Product {
  id: string;
  site_id: string;
  title: string;
  subtitle?: string | null | undefined;
  seller_id: number;
  category_id: string;
  official_store_id?: string | null | undefined;
  price: number;
  base_price: number;
  original_price: number;
  currency_id: string;
  initial_quantity: number;
  available_quantity: number;
  sold_quantity: number;
  sale_terms: any[];
  buying_mode: string;
  listing_type_id: string;
  start_time: string;
  stop_time: string;
  condition: string;
  permalink: string;
  //thumbnail_id: string;
  //thumbnail: string;
  //secure_thumbnail: string;
  pictures: Pictures[];
  comments?: Comment[];
  reviews?: Review[];
  video_id?: string | null | undefined;
  description: string;
  accepts_mercadopago: boolean;
  tags: string[];
  non_mercado_pago_payment_methods?: any[] | null | undefined;
  shipping: any;
  international_delivery_mode?: string;
  seller_address?: any | null | undefined;
  seller_contact?: any | null | undefined;
  location?: any | null | undefined;
  coverage_areas?: any[];
  attributes?: any[] | null | undefined;
  warnings?: string[];
  listing_source?: string | null | undefined;
  variations?: any[] | null | undefined;
  status: string;
  date_created: string;
  last_updated: string;
  category: string;
  subcategories: string[];
  recommendations: string;
}
