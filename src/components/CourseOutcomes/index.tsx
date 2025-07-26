import React, { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, BookOpen } from "lucide-react";
const CourseOutcomes: FC = () => {
  return (
    <div className='container mx-auto p-4'>
      <h2 className='text-xl font-bold mb-4'>কোর্সটি করে যা শিখবেন</h2>
      <Card className='bg-white text-gray-700 border-0 shadow-lg'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold text-center sr-only'>
            কোর্সটি করে যা শিখবেন
          </CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='flex items-start space-x-4'>
            <CheckCircle className='h-6 w-6 text-green-500 mt-1' />
            <div>
              <p className='font-semibold'>
                IELTS পারিশ্রমিক হার্টক (এক্সামের হারে)
              </p>
              <p className='text-sm text-gray-400'>
                ইউনিভার্সিটি, ট্রেন ম্যানেজমেন্ট সাপোর্টিং অর্থকরী টিপস, ট্রিকস
                ও স্ট্র্যাটেজি
              </p>
            </div>
          </div>
          <div className='flex items-start space-x-4'>
            <CheckCircle className='h-6 w-6 text-green-500 mt-1' />
            <div>
              <p className='font-semibold'>IELTS Speaking test-৪ (Advanced)</p>
              <p className='text-sm text-gray-400'>
                Power Words ব্যবহার করে মক টেস্ট নিউনতলোকের কথা বলার প্রস্তুতি
              </p>
            </div>
          </div>
          <div className='flex items-start space-x-4'>
            <CheckCircle className='h-6 w-6 text-green-500 mt-1' />
            <div>
              <p className='font-semibold'>
                IELTS পারিশ্রমিক হার্টকেল নিউনিতে সম্পূর্ণ
              </p>
              <p className='text-sm text-gray-400'>
                সাধারণ বারবারের মাধ্যমে আলোচনা (কার অঙ্গীকার ক্ষেত্রে)
              </p>
            </div>
          </div>
          <div className='flex items-start space-x-4'>
            <BookOpen className='h-6 w-6 text-blue-500 mt-1' />
            <div>
              <p className='font-semibold'>
                IELTS Writing Task ১ ও IELTS Writing
              </p>
              <p className='text-sm text-gray-400'>
                Task ২ (এর কোর্স আলোচনা) এর (প্রতি সাপোর্ট Structure ও Essay
                type
              </p>
            </div>
          </div>
          <div className='flex items-start space-x-4'>
            <BookOpen className='h-6 w-6 text-blue-500 mt-1' />
            <div>
              <p className='font-semibold'>
                একা IELTS পড়তে নিতে প্রস্তুতি মাধ্যমে
              </p>
              <p className='text-sm text-gray-400'>
                নিজাম-কারুশযোগী ইউনিটি বিভাগী নীতি বিবিধতা বারাং
              </p>
            </div>
          </div>
          <div className='flex items-start space-x-4'>
            <BookOpen className='h-6 w-6 text-blue-500 mt-1' />
            <div>
              <p className='font-semibold'>IELTS Reading ওর IELTS Listening</p>
              <p className='text-sm text-gray-400'>
                Mock Test ওর মাধ্যমে IELTS পারিশ্রমিক বিভিন্ন অংশীদারের ও Band
                Score সাপোর্ট নির্দেশনা
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CourseOutcomes;
