import useSWR from 'swr';
import { Product } from '../types';

interface ProductResponse {
  product: Product;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useProduct(id: number) {
  const { data, error, isLoading, mutate } = useSWR<ProductResponse>(
    `/api/products/${id}`,
    fetcher
  );

  return {
    data: data?.product,
    error,
    isLoading,
    mutate,
  };
} 