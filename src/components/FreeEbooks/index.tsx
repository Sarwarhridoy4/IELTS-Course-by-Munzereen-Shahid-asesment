import Image from "next/image";
import React, { FC } from "react";
import { Card, CardDescription, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { CourseData } from "@/interface/interface";

const FreeEbook: FC<{ data: CourseData }> = ({ data }) => {
  const ebook = data?.sections?.find(
    (section) => section.type === "group_join_engagement"
  );
  const item = ebook?.values?.[0];

  if (!item) return null;

  return (
    <Card
      className='w-full mx-auto text-white shadow-lg rounded-2xl overflow-hidden'
      style={{
        backgroundImage: `url(${item.background?.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className='flex flex-col md:flex-row items-center justify-between gap-6 p-6'>
        {/* Left: Text + Button */}
        <div className='flex-1 space-y-4'>
          <div className='flex items-center space-x-3'>
            {item.top_left_icon_img ? (
              <Image
                src={item.top_left_icon_img}
                alt='icon'
                width={48}
                height={48}
                className='rounded-full bg-white p-1'
              />
            ) : (
              <span className='bg-yellow-400 text-gray-900 rounded-full p-2 text-xl'>
                📄
              </span>
            )}
            <CardTitle
              className='text-2xl font-bold'
              style={{ color: item.title_color || "#fff" }}
            >
              {item.title}
            </CardTitle>
          </div>

          <CardDescription
            className='text-sm leading-relaxed'
            style={{ color: item.description_color || "#ededed" }}
          >
            {item.description}
          </CardDescription>

          <a
            href={item?.cta?.clicked_url}
            target='_blank'
            rel='noopener noreferrer'
          >
            <Button
              className='text-white text-sm px-6 py-2'
              style={{
                backgroundColor: item.cta?.color || "#22c55e",
              }}
            >
              {item.cta?.text || "ডাউনলোড PDF"}
            </Button>
          </a>
        </div>

        {/* Right: Image */}
        <div className='flex-shrink-0'>
          <Image
            src={item.thumbnail as string}
            alt='Free PDF Thumbnail'
            width={200}
            height={200}
            className='rounded-lg object-cover shadow-md'
          />
        </div>
      </div>
    </Card>
  );
};

export default FreeEbook;
