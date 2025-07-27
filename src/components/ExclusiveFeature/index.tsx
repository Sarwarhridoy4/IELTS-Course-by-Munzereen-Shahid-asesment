import React, { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, BookOpen, Check } from "lucide-react";
import { CourseData } from "@/interface/interface";
import Image from "next/image";

const ExclusiveFeature: FC<{ data: CourseData }> = ({ data }) => {
  const features = data?.sections?.find(
    (section) => section.type === "feature_explanations"
  );
  const firstValue = features?.values?.[0];
  const secondValue = features?.values?.[1];

  return (
    <div className='container mx-auto px-6 py-12'>
      <h2 className='text-xl font-bold mb-4 text-gray-900'>
        {features?.name || "কোর্স এক্সক্লুসিভ ফিচার"}
      </h2>
      <Card className='mb-8 border-none shadow-lg rounded-2xl overflow-hidden'>
        <CardHeader className='bg-gray-50'>
          <CardTitle className='text-2xl font-bold text-gray-900 sr-only'>
            {features?.name || "কোর্স এক্সক্লুসিভ ফিচার"}
          </CardTitle>
        </CardHeader>
        <CardContent className='p-6'>
          <div className='flex flex-col md:flex-row gap-8'>
            <div className='flex-1'>
              <div className='flex items-center gap-3 mb-4'>
                <Video className='w-6 h-6 text-red-600' />
                <h3 className='text-xl font-semibold text-gray-800'>
                  {firstValue?.title || "ভিডিও লেকচার"}
                </h3>
              </div>
              <ul className='list-disc list-inside text-gray-600 space-y-2'>
                {firstValue?.checklist?.map((item, i) => (
                  <li key={i} className='flex items-start space-x-3'>
                    <Check className='h-5 w-5 text-green-500 mt-1 shrink-0' />
                    <span className='text-sm text-black leading-snug'>
                      {typeof item === "string"
                        ? item
                        : item?.text ?? String(item)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className='flex-1 rounded-xl flex items-center justify-center'>
              <Image
                src={
                  firstValue?.file_type === "video"
                    ? "/assets/logo/logo.svg" // videos are not images, fallback
                    : firstValue?.file_type === "image" && firstValue.file_url
                    ? firstValue.file_url
                    : "/assets/logo/logo.svg"
                }
                alt='Image thumbnail'
                width={350}
                height={350}
                className='mr-2'
              />
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className='border-none shadow-lg rounded-2xl overflow-hidden'>
        <CardHeader className='bg-gray-50'>
          <CardTitle className='flex items-center gap-3 text-xl font-semibold text-gray-800'>
            <BookOpen className='w-6 h-6 text-red-600' />
            {secondValue?.title || "প্র্যাকটিস মেটেরিয়াল"}
          </CardTitle>
        </CardHeader>
        <CardContent className='p-6'>
          <div className='flex flex-col md:flex-row gap-8'>
            <div className='flex-1'>
              <ul className='list-disc list-inside text-gray-600 space-y-2'>
                {secondValue?.checklist?.map((item, i) => (
                  <li key={i} className='flex items-start space-x-3'>
                    <Check className='h-5 w-5 text-green-500 mt-1 shrink-0' />
                    <span className='text-sm text-black leading-snug'>
                      {typeof item === "string"
                        ? item
                        : item?.text ?? String(item)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className='flex-1 rounded-xl flex items-center justify-center'>
              <Image
                src={
                  secondValue?.file_type === "video"
                    ? "/assets/logo/logo.svg" // videos are not images, fallback
                    : secondValue?.file_type === "image" && secondValue.file_url
                    ? secondValue.file_url
                    : "/assets/logo/logo.svg"
                }
                alt='Image thumbnail'
                width={350}
                height={350}
                className='mr-2'
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExclusiveFeature;
