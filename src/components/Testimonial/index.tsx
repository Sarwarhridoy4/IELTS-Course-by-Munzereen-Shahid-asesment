"use client";
import { forwardRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

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

const Testimonial = forwardRef<HTMLDivElement, { data: TestimonialData }>(
  ({ data }, ref) => {
    if (data.video_url) {
      return (
        <Card className='w-full max-w-[300px] overflow-hidden'>
          <CardContent className='p-0'>
            <figure>
              <div className='relative'>
                <iframe
                  ref={ref as React.RefObject<HTMLIFrameElement>}
                  src={`https://www.youtube.com/embed/${data.video_url}`}
                  title={`Testimonial by ${data.name}`}
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                  className='w-full h-[168px] object-cover'
                />
              </div>
              <figcaption className='flex items-center mt-3 p-4'>
                <Avatar className='w-12 h-12'>
                  <AvatarImage src={data.profile_image} alt={data.name} />
                  <AvatarFallback>{data.name[0]}</AvatarFallback>
                </Avatar>
                <div className='ml-2'>
                  <h4 className='text-base font-bold text-gray-800'>
                    {data.name}
                  </h4>
                  <p className='text-sm text-gray-500'>{data.description}</p>
                </div>
              </figcaption>
            </figure>
          </CardContent>
        </Card>
      );
    } else if (data.testimonial) {
      return (
        <Card className='w-full max-w-[300px]'>
          <CardContent className='p-4'>
            <figure>
              <div className='mb-2'>
                <div className='bg-pink-200 rounded-full p-2 inline-block'>
                  <span className='text-white text-2xl'>“</span>
                </div>
              </div>
              <blockquote>
                <p className='text-base mb-2 max-h-[100px] overflow-y-auto'>
                  {data.testimonial}
                </p>
              </blockquote>
              <figcaption>
                <div className='bg-green-500 text-white px-2 py-1 rounded mb-3'>
                  {/* {data.source} */}
                </div>
                <div className='flex items-center'>
                  <Avatar className='w-12 h-12'>
                    <AvatarImage src={data.profile_image} alt={data.name} />
                    <AvatarFallback>{data.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className='ml-2'>
                    <h4 className='text-base font-bold text-gray-800'>
                      {data.name}
                    </h4>
                    <p className='text-sm text-gray-500'>{data.description}</p>
                  </div>
                </div>
              </figcaption>
            </figure>
          </CardContent>
        </Card>
      );
    }
    return null;
  }
);

Testimonial.displayName = "Testimonial";

export default Testimonial;
