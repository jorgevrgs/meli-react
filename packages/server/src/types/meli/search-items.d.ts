import { CategoryResponse } from './category';

export interface SearchItemsResponse {
  site_id: string;
  country_default_time_zone: string;
  query: string;
  paging: Paging;
  results: Result[];
  sort: Country;
  available_sorts: Country[];
  filters: Filter[];
  available_filters: Availablefilter[];
}

interface Availablefilter {
  id: string;
  name: string;
  type: string;
  values: Value2[];
}

type Filter = Omit<Availablefilter, 'values'> & {
  values: Omit<Values2, 'results'> & CategoryResponse['path_from_root'];
};

interface Value2 {
  id: string;
  name: string;
  results: number;
}

interface Result {
  id: string;
  title: string;
  condition: string;
  thumbnail_id: string;
  catalog_product_id?: string;
  listing_type_id: string;
  permalink: string;
  buying_mode: string;
  site_id: string;
  category_id: string;
  domain_id: string;
  thumbnail: string;
  currency_id: string;
  order_backend: number;
  price: number;
  original_price?: any;
  sale_price?: any;
  sold_quantity: number;
  available_quantity: number;
  official_store_id?: any;
  use_thumbnail_id: boolean;
  accepts_mercadopago: boolean;
  tags: string[];
  shipping: Shipping;
  stop_time: string;
  seller: Seller;
  seller_address: Selleraddress;
  address: Address;
  attributes: Attribute[];
  installments: Installments;
  winner_item_id?: any;
  catalog_listing?: boolean;
  discounts?: any;
  promotions?: any;
  differential_pricing?: Differentialpricing;
  inventory_id?: any;
}

interface Differentialpricing {
  id: number;
}

interface Installments {
  quantity: number;
  amount: number;
  rate: number;
  currency_id: string;
}

interface Attribute {
  id: string;
  name: string;
  value_id?: string | string;
  value_name?: string | string;
  attribute_group_id: string;
  attribute_group_name: string;
  value_struct?: (Valuestruct | null)[];
  values: Value[];
  source: number;
  value_type: string;
}

interface Value {
  id?: string | string;
  name?: string | string;
  struct?: (Valuestruct | null)[];
  source: number;
}

interface Valuestruct {
  number: number;
  unit: string;
}

interface Address {
  state_id: string;
  state_name: string;
  city_id: string;
  city_name: string;
}

interface Selleraddress {
  comment: string;
  address_line: string;
  zip_code: string;
  id?: any;
  latitude?: any;
  longitude?: any;
  country: Country;
  state: Country;
  city: Country;
}

interface Country {
  id: string;
  name: string;
}

interface Seller {
  id: number;
  nickname: string;
  car_dealer: boolean;
  real_estate_agency: boolean;
  registration_date: string;
  tags: string[];
  car_dealer_logo: string;
  permalink: string;
  seller_reputation: Sellerreputation;
  eshop?: Eshop;
}

interface Eshop {
  eshop_id: number;
  seller: number;
  nick_name: string;
  eshop_status_id: number;
  site_id: string;
  eshop_experience: number;
  eshop_rubro?: any;
  eshop_locations: any[];
  eshop_logo_url: string;
}

interface Sellerreputation {
  level_id: string;
  power_seller_status?: string;
  transactions: Transactions;
  metrics: Metrics;
}

interface Metrics {
  sales: Sales;
  claims: Claims;
  delayed_handling_time: Claims;
  cancellations: Claims;
}

interface Claims {
  period: string;
  rate: number;
  value: number;
}

interface Sales {
  period: string;
  completed: number;
}

interface Transactions {
  canceled: number;
  completed: number;
  period: string;
  ratings: Ratings;
  total: number;
}

interface Ratings {
  negative: number;
  neutral: number;
  positive: number;
}

interface Shipping {
  logistic_type: string;
  mode: string;
  store_pick_up: boolean;
  free_shipping: boolean;
  tags: string[];
  promise?: any;
}

interface Paging {
  total: number;
  primary_results: number;
  offset: number;
  limit: number;
}
