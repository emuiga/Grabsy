import ProductDetailsPage from '@/features/products/pages/ProductDetailsPage';

export default function Page({ params }: { params: { id: string } }) {
  return <ProductDetailsPage params={params} />;
} 