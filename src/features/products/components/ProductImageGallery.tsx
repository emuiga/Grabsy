'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ProductImageGalleryProps {
  thumbnail: string;
  images: string[];
  title: string;
}

export function ProductImageGallery({ thumbnail, images, title }: ProductImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(thumbnail);

  return (
    <div className="space-y-4">
      <div className="relative w-full aspect-square bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <Image
            src={selectedImage}
            alt={title}
            width={500}
            height={500}
            className="object-contain w-full h-full"
            priority
          />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {[thumbnail, ...images].map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`relative aspect-square rounded-lg overflow-hidden border-2 ${
              selectedImage === image ? 'border-black' : 'border-transparent'
            } bg-white`}
          >
            <div className="absolute inset-0 flex items-center justify-center p-2">
              <Image
                src={image}
                alt={`${title} - Image ${index + 1}`}
                width={100}
                height={100}
                className="object-contain w-full h-full"
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
} 