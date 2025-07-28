"use client";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { CourseData } from "@/interface/interface";
import Testimonial from "../Testimonial";

type TestimonialData = {
  description: string;
  id: string;
  name: string;
  profile_image: string;
  testimonial?: string;
  thumb: string;
  video_type: string;
  video_url: string;
} & (
  | { type: "video"; youtubeId: string }
  | { type: "text"; testimonialText: string; source: string }
);

export function TestimonialsSection({ data }: { data: CourseData }) {
  const meta = data?.sections?.find(
    (section) => section.type === "testimonials"
  );
  const TestimonialData = data?.sections?.find(
    (section) => section.type === "testimonials"
  )?.values as unknown as TestimonialData[];

  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef<HTMLIFrameElement>(null);

  const handlePrev = () => {
    if (videoRef.current) {
      videoRef.current.src = videoRef.current.src; // Reset src to stop video
    }
    setCurrentIndex((prev) =>
      prev > 0 ? prev - 1 : TestimonialData?.length - 1 || 0
    );
  };

  const handleNext = () => {
    if (videoRef.current) {
      videoRef.current.src = videoRef.current.src; // Reset src to stop video
    }
    setCurrentIndex((prev) =>
      prev < TestimonialData?.length - 1 ? prev + 1 : 0
    );
  };

  return (
    <section className='py-8 px-4'>
      <h2 className='text-xl font-bold text-gray-700 mb-4'>
        {meta?.name || "Testimonials"}
      </h2>
      <div className='relative'>
        <div className='overflow-hidden'>
          <div
            className='flex transition-transform duration-300 ease-in-out'
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {TestimonialData?.map((data, index) => (
              <div key={index} className='min-w-full flex justify-center'>
                <Testimonial ref={videoRef} data={data} />
              </div>
            ))}
          </div>
        </div>
        <Button
          variant='outline'
          size='icon'
          className='absolute left-0 top-1/2 -translate-y-1/2 bg-gray-100 hover:bg-gray-200'
          onClick={handlePrev}
          aria-label='Previous testimonial'
        >
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M15 18L9 12L15 6'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </Button>
        <Button
          variant='outline'
          size='icon'
          className='absolute right-0 top-1/2 -translate-y-1/2 bg-gray-100 hover:bg-gray-200'
          onClick={handleNext}
          aria-label='Next testimonial'
        >
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M9 18L15 12L9 6'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </Button>
        <div className='hidden' />
      </div>
    </section>
  );
}
