import useSWR from 'swr';
import { Product, ProductsResponse } from '../types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_BASE_URL) {
  throw new Error('API URL is not defined in environment variables');
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useProducts() {
  return useSWR<ProductsResponse>(API_BASE_URL, fetcher);
}

export function useProduct(id: number | null) {
  return useSWR<Product>(id ? `${API_BASE_URL}/${id}` : null, fetcher);
} 