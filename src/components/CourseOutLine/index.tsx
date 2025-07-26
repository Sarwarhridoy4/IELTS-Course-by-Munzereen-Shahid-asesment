import React, { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, Book, Volume2 } from "lucide-react";

const CourseOutLine: FC = () => {
  return (
    <div className='container mx-auto p-4'>
      <h2 className='text-xl font-bold mb-4'>কোর্সটি যেভাবে সাজানো হয়েছে</h2>
      <Card className='bg-gray-900 text-white border-0 shadow-lg'>
        <CardHeader>
          <CardTitle className='text-2xl font-semibold sr-only'>
            কোর্সের বিষয়বস্তু
          </CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='flex items-center space-x-4'>
            <div className='bg-green-500 p-2 rounded-full'>
              <Play className='h-6 w-6 text-white' />
            </div>
            <div>
              <p className='font-semibold'>৬০+ টিউটোরিয়াল</p>
              <p className='text-sm text-gray-400'>
                IELTS Academic ও General Training এর Overview, Format ও
                বিস্তারিত নীতি in-depth আলোচনা
              </p>
            </div>
          </div>
          <div className='flex items-center space-x-4'>
            <div className='bg-blue-500 p-2 rounded-full'>
              <Book className='h-6 w-6 text-white' />
            </div>
            <div>
              <p className='font-semibold'>অধ্যয়নের পথ</p>
              <p className='text-sm text-gray-400'>
                Reading, Writing, Listening ও Speaking এর প্রতিটি অধ্যায় উৎস
                কার্যক্রম সহ শিক্ষার্থী এর ৬০০+ Vocabulary
              </p>
            </div>
          </div>
          <div className='flex items-center space-x-4'>
            <div className='bg-yellow-500 p-2 rounded-full'>
              <Play className='h-6 w-6 text-white' />
            </div>
            <div>
              <p className='font-semibold'>ভিডিও ও লিসনিং মক টেস্ট</p>
              <p className='text-sm text-gray-400'>
                10 Reading ও 10 Listening Mock Tests এর মাধ্যমে প্রস্তুতি
              </p>
            </div>
          </div>
          <div className='flex items-center space-x-4'>
            <div className='bg-red-500 p-2 rounded-full'>
              <Volume2 className='h-6 w-6 text-white' />
            </div>
            <div>
              <p className='font-semibold'>অডিও সহযোগী লাইভ কোর্স</p>
              <p className='text-sm text-gray-400'>
                সাশ্রয়িক ঘরে কোর্স এপ্রোচ তথ্যর ক্ষেত্রে শ্রেষ্ঠ সহযোগী এর
                সুবিধা
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CourseOutLine;
