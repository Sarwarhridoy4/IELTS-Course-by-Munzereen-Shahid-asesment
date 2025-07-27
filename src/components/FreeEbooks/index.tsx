import Image from "next/image";
import React, { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

const FreeEbook: FC = () => {
  return (
    <Card className='w-full mx-auto bg-gradient-to-br from-gray-900 to-indigo-900 text-white shadow-lg rounded-xl overflow-hidden'>
      <CardHeader className='p-4'>
        <div className='flex items-center space-x-2'>
          <span className='bg-yellow-400 text-gray-900 rounded-full p-2'>
            📄
          </span>
          <CardTitle className='text-xl font-bold'>Free PDF</CardTitle>
        </div>
        <CardDescription className='text-indigo-200 mt-2'>
          IELTS Confirm 7+ Score (Guideline)
        </CardDescription>
        <CardDescription className='text-indigo-200'>
          IELTS ভালো score করার সেরা Strategies জানুন সেরাদের গাইডলাইনে।
        </CardDescription>
      </CardHeader>

      <CardContent className='p-4 flex justify-center'>
        <Image
          src='https://cdn.10minuteschool.com/images/catalog/product/pointer/Thumbnail_for_IELTS_Course_by_MS_1732621023962.jpg'
          alt='Free PDF Thumbnail'
          width={200}
          height={200}
          className='rounded-lg object-cover'
        />
      </CardContent>

      <div className='p-4'>
        <Button className='w-full bg-green-500 hover:bg-green-600 text-white'>
          ডাউনলোড PDF
        </Button>
      </div>
    </Card>
  );
};

export default FreeEbook;
