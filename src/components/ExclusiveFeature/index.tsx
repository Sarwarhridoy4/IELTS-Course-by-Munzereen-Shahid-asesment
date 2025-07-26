import React, { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, BookOpen, Headphones } from "lucide-react";

const ExclusiveFeature: FC = () => {
  return (
    <div className='container mx-auto px-6 py-12'>
      <h2 className='text-xl font-bold mb-4 text-gray-900'>
        কোর্স এক্সক্লুসিভ ফিচার
      </h2>
      <Card className='mb-8 border-none shadow-lg rounded-2xl overflow-hidden'>
        <CardHeader className='bg-gray-50'>
          <CardTitle className='text-2xl font-bold text-gray-900 sr-only'>
            কোর্স এক্সক্লুসিভ ফিচার
          </CardTitle>
        </CardHeader>
        <CardContent className='p-6'>
          <div className='flex flex-col md:flex-row gap-8'>
            <div className='flex-1'>
              <div className='flex items-center gap-3 mb-4'>
                <Video className='w-6 h-6 text-red-600' />
                <h3 className='text-xl font-semibold text-gray-800'>
                  ভিডিও লেকচার
                </h3>
              </div>
              <ul className='list-disc list-inside text-gray-600 space-y-2'>
                <li>IELTS Academic ও General Training নিয়ে আলোচনা</li>
                <li>
                  Reading, Writing, Listening ও Speaking এর Overview & Format
                </li>
                <li>প্রতিটি মডিউলের টিপস ও কার্যকরী স্ট্রাটেজি</li>
                <li>ভিডিওর সাথে অ্যাক্টিভ স্টাডি</li>
              </ul>
            </div>
            <div className='flex-1 bg-red-600 text-white p-6 rounded-xl flex items-center justify-center'>
              <div className='text-center'>
                <p className='text-4xl font-bold'>50+</p>
                <p className='text-base font-medium'>VIDEO LECTURES</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className='border-none shadow-lg rounded-2xl overflow-hidden'>
        <CardHeader className='bg-gray-50'>
          <CardTitle className='flex items-center gap-3 text-xl font-semibold text-gray-800'>
            <BookOpen className='w-6 h-6 text-red-600' />
            Reading ও Listening Mock Tests
          </CardTitle>
        </CardHeader>
        <CardContent className='p-6'>
          <div className='flex flex-col md:flex-row gap-8'>
            <div className='flex-1'>
              <ul className='list-disc list-inside text-gray-600 space-y-2'>
                <li>10 Reading & 10 Listening Mock Tests</li>
                <li>Computer-delivered IELTS পড়ার অভিজ্ঞতা</li>
                <li>উত্তর সঠিক করার সহজ সহায়ী রেজাল্ট</li>
                <li>মেকডোনা সময়, মেকডোনা যায়গা (ঘরে বসে)</li>
              </ul>
            </div>
            <div className='flex-1 bg-red-50 text-red-800 p-6 rounded-xl flex items-center justify-center'>
              <div className='text-center'>
                <Headphones className='w-8 h-8 mx-auto mb-2 text-red-600' />
                <h4 className='text-2xl font-bold'>IELTS</h4>
                <p className='text-xl font-semibold'>READING & LISTENING</p>
                <p className='text-sm font-medium'>MOCK TESTS</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExclusiveFeature;
