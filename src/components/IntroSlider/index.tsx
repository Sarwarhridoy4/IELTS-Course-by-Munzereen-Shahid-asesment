"use client";
import React, { useState } from "react";
import { Card, CardHeader } from "@/components/ui/card";
import { PlayCircle } from "lucide-react";
import Image from "next/image";

const VideoPlayer = () => {
  const [showVideo, setShowVideo] = useState(false);
  const video = {
    src: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnail: `https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg`,
    alt: "YouTube Video",
    width: 640,
    height: 360,
  };

  const extractVideoId = (url: string) => {
    const match = url.match(/[?&]v=([^&]+)/);
    return match ? match[1] : "";
  };

  const handlePlayVideo = () => {
    setShowVideo(true);
  };

  return (
    <div className='container mx-auto p-4'>
      <Card className='w-full max-w-3xl mx-auto shadow-md rounded-md'>
        <CardHeader className='p-0 relative overflow-hidden'>
          {showVideo ? (
            <div className='w-full aspect-video overflow-hidden'>
              <iframe
                src={`https://www.youtube.com/embed/${extractVideoId(
                  video.src
                )}?autoplay=1`}
                title={video.alt}
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
                className='w-full h-full'
                aria-label='Embedded YouTube Video'
              ></iframe>
            </div>
          ) : (
            <div className='relative w-full aspect-video overflow-hidden'>
              <Image
                src={video.thumbnail}
                alt={video.alt}
                className='w-full h-full object-cover'
                width={video.width}
                height={video.height}
                loading='lazy'
              />
              <button
                onClick={handlePlayVideo}
                className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-black bg-opacity-50 rounded-full p-6 hover:bg-opacity-70 transition-all duration-300 ease-in-out group'
                aria-label='Play YouTube Video'
              >
                <PlayCircle className='h-12 w-12 sm:h-16 sm:w-16 text-white group-hover:scale-110 transition-transform duration-300' />
              </button>
            </div>
          )}
        </CardHeader>
      </Card>
    </div>
  );
};

export default VideoPlayer;
