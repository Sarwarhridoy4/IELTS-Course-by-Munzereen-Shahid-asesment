"use client";
import Image from "next/image";
import React, { useState } from "react";
import { CourseData } from "@/interface/interface";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CourseSlider: React.FC<{ data: CourseData }> = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPlayOverlay, setShowPlayOverlay] = useState(true);
  const slides = data?.media?.map((media, index) => {
    let src = media.resource_value;
    if (media.resource_type === "video" && media.resource_value.length === 11) {
      src = `https://www.youtube.com/embed/${media.resource_value}`;
    }
    return {
      id: index + 1,
      type: media.resource_type === "image" ? "image" : "video",
      src,
      alt: `${data.title} Slide ${index + 1}`,
      content: data.title,
      thumbnail:
        media.thumbnail_url ||
        (media.resource_type === "image"
          ? media.resource_value
          : "/path/to/default-thumbnail.jpg"),
    };
  });

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setShowPlayOverlay(true); // Reset overlay for new slide
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setShowPlayOverlay(true); // Reset overlay for new slide
  };

  const handlePlayClick = () => {
    setShowPlayOverlay(false); // Remove overlay on click
    // Optionally focus the iframe to ensure it can handle the click
    const iframe = document.querySelector("iframe");
    if (iframe) iframe.focus();
  };

  return (
    <div
      className='relative w-full max-w-4xl mx-auto'
      role='region'
      aria-label='Course Slider'
    >
      <div className='relative w-full h-64'>
        {slides[currentSlide].type === "image" ? (
          <Image
            src={slides[currentSlide].src}
            alt={slides[currentSlide].alt}
            width={800}
            height={256}
            loading='lazy'
            className='w-full h-full object-cover'
          />
        ) : (
          <div className='relative w-full h-64'>
            <iframe
              src={slides[currentSlide].src}
              title={slides[currentSlide].alt}
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              className='w-full h-full'
              onError={() =>
                console.error("Failed to load video:", slides[currentSlide].src)
              }
            />
            {showPlayOverlay && (
              <div
                className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer'
                onClick={handlePlayClick}
              >
                <svg
                  width='60'
                  height='60'
                  viewBox='0 0 24 24'
                  fill='white'
                  stroke='black'
                  strokeWidth='2'
                  className='opacity-80 hover:opacity-100 transition-opacity'
                >
                  <polygon points='5,5 19,12 5,19' />
                </svg>
              </div>
            )}
          </div>
        )}
        <div className='absolute bottom-4 left-4 text-white text-xl font-bold'>
          {slides[currentSlide].content}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className='absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-white'
        aria-label='Previous slide'
      >
        <ChevronLeft className='h-6 w-6' />
      </button>
      <button
        onClick={nextSlide}
        className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-white'
        aria-label='Next slide'
      >
        <ChevronRight className='h-6 w-6' />
      </button>
      <div className='flex justify-center mt-4 space-x-2'>
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrentSlide(index)}
            className='w-8 h-8 focus:outline-none'
            aria-label={`Go to ${slide.content}`}
          >
            <Image
              src={slide.thumbnail}
              alt={`${slide.content} thumbnail`}
              width={32}
              height={32}
              className='object-cover rounded'
              onError={(e) => {
                const img = e.target as HTMLImageElement;
                img.src = "/path/to/default-thumbnail.jpg";
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default CourseSlider;
