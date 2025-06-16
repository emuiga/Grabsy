'use client';

import { useProduct } from '../hooks/useProduct';
import { ProductImageGallery } from './ProductImageGallery';
import { ProductReviews } from './ProductReviews';
import { ProductSpecifications } from './ProductSpecifications';
import { ErrorState } from '@/components/shared/ErrorState';

interface ProductDetailsProps {
  id: number;
}

export function ProductDetails({ id }: ProductDetailsProps) {
  const { data: product, isLoading, error, mutate } = useProduct(id);

  if (error) {
    const isNetworkError = error instanceof TypeError && error.message === 'Failed to fetch';
    return (
      <ErrorState
        title={isNetworkError ? 'Connection Error' : 'Error Loading Product'}
        message={
          isNetworkError
            ? 'Unable to connect to the server. Please check your internet connection.'
            : 'There was a problem loading the product details. Please try again later.'
        }
        onRetry={() => mutate()}
        isNetworkError={isNetworkError}
      />
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <ErrorState
        title="Product Not Found"
        message="The product you're looking for doesn't exist or has been removed."
      />
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <ProductImageGallery
            thumbnail={product.thumbnail}
            images={product.images}
            title={product.title}
          />
        </div>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
            <p className="text-muted-foreground">{product.description}</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-2xl font-bold">${product.price.toFixed(2)}</div>
            {product.discountPercentage > 0 && (
              <div className="text-sm text-muted-foreground line-through">
                ${(product.price * (1 + product.discountPercentage / 100)).toFixed(2)}
              </div>
            )}
          </div>

          <div className="flex items-center gap-4">
            <div className="text-sm">
              <span className="font-medium">Availability:</span>{' '}
              <span className={product.stock > 0 ? 'text-green-600' : 'text-red-600'}>
                {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
            {product.stock > 0 && (
              <div className="text-sm text-muted-foreground">
                {product.stock} units available
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <button
              className="flex-1 bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
              disabled={product.stock === 0}
            >
              Add to Cart
            </button>
            <button className="p-2 border rounded-md hover:bg-secondary transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>

          <ProductSpecifications
            brand={product.brand}
            category={product.category}
            sku={product.sku}
            weight={product.weight}
            dimensions={product.dimensions}
            warrantyInformation={product.warrantyInformation}
            shippingInformation={product.shippingInformation}
            returnPolicy={product.returnPolicy}
            minimumOrderQuantity={product.minimumOrderQuantity}
          />
        </div>
      </div>

      <div className="mt-12">
        <ProductReviews reviews={product.reviews.map((review: any) => ({
          id: review.id,
          user: review.reviewerName,
          rating: review.rating,
          comment: review.comment,
          date: review.date,
          helpful: review.helpful,
          notHelpful: review.notHelpful
        }))} 
        onWriteReview={() => {}}
        onHelpfulVote={() => {}}
        onReportReview={() => {}}
        />
      </div>
    </div>
  );
} 