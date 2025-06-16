import { Product, ProductsResponse } from '../types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL!;

if (!API_BASE_URL) {
  throw new Error('API URL is not defined in environment variables');
}

// Type assertion since API_BASE_URL is not undefined
const baseUrl = API_BASE_URL as string;

export async function getProducts(): Promise<ProductsResponse> {
  const res = await fetch(API_BASE_URL, { next: { revalidate: 3600 } });
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return res.json();
}

export async function getProduct(id: number): Promise<Product> {
  const res = await fetch(`${API_BASE_URL}/${id}`, { next: { revalidate: 3600 } });
  if (!res.ok) {
    throw new Error('Failed to fetch product');
  }
  return res.json();
}

export async function getCategories(): Promise<string[]> {
  const response = await fetch(`${API_BASE_URL}/categories`);
  if (!response.ok) {
    throw new Error('Failed to fetch categories');
  }
  return response.json();
} 