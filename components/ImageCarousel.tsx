"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselProps {
  images: string[];
  alt: string;
  onLoad?: () => void;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  alt,
  onLoad,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative h-56 w-full bg-secondary/50">
      {/* Image */}
      <img
        src={images[currentIndex]}
        alt={`${alt} - ${currentIndex + 1}`}
        className="h-full w-full object-contain transition-all duration-300"
        loading="lazy"
        onLoad={onLoad}
      />

      {/* Navigation Arrows - only show if multiple images */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-1.5 text-white opacity-0 transition-all hover:bg-black/70 group-hover:opacity-100"
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-1.5 text-white opacity-0 transition-all hover:bg-black/70 group-hover:opacity-100"
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      {/* Dots Indicator - only show if multiple images */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={e => {
                e.stopPropagation();
                goToSlide(index);
              }}
              className={`h-2 w-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-white"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Image Counter */}
      {images.length > 1 && (
        <div className="absolute right-2 top-2 z-10 rounded-full bg-black/50 px-2 py-0.5 text-xs text-white">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
