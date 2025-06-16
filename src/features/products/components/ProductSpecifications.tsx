'use client';

interface ProductSpecificationsProps {
  brand: string;
  category: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  returnPolicy: string;
  minimumOrderQuantity: number;
}

export function ProductSpecifications({
  brand,
  category,
  sku,
  weight,
  dimensions,
  warrantyInformation,
  shippingInformation,
  returnPolicy,
  minimumOrderQuantity,
}: ProductSpecificationsProps) {
  const specifications = [
    { label: 'Brand', value: brand },
    { label: 'Category', value: category.charAt(0).toUpperCase() + category.slice(1) },
    { label: 'SKU', value: sku },
    { label: 'Weight', value: `${weight}g` },
    { label: 'Dimensions', value: `${dimensions.width} × ${dimensions.height} × ${dimensions.depth} cm` },
    { label: 'Warranty', value: warrantyInformation },
    { label: 'Shipping', value: shippingInformation },
    { label: 'Return Policy', value: returnPolicy },
    { label: 'Minimum Order', value: minimumOrderQuantity.toString() },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Product Specifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {specifications.map((spec, index) => (
          <div key={index} className="flex flex-col">
            <span className="text-sm text-gray-500">{spec.label}</span>
            <span className="font-medium">{spec.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
} 