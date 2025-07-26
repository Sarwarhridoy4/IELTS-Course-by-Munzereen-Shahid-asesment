import React, { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone } from "lucide-react";

const CourseInfo: FC = () => {
  return (
    <Card className='w-full max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden'>
      <CardHeader className='bg-blue-100 p-4'>
        <CardTitle className='text-2xl md:text-3xl font-bold text-blue-900'>
          এই কোর্সে যা আছে
        </CardTitle>
        <CardTitle className='text-xl md:text-2xl font-semibold text-blue-800 mt-2'>
          কোর্সে যা আছে
        </CardTitle>
      </CardHeader>
      <CardContent className='p-4'>
        <ul className='space-y-2 text-blue-800'>
          <li className='flex items-start'>
            <span className='text-lg mr-2'>৳</span> কোর্স কারোয়ান ৯০০০৯ জন
          </li>
          <li className='flex items-start'>
            <span className='text-lg mr-2'>Ⓛ</span> সামর লাগবে ১০ ঘণ্টা
          </li>
          <li className='flex items-start'>
            <span className='text-lg mr-2'>Ⓑ</span> ছাতি তিতে
          </li>
          <li className='flex items-start'>
            <span className='text-lg mr-2'>③</span> ছাতি নিতে, ফিত নিতে
          </li>
          <li className='flex items-start'>
            <span className='text-lg mr-2'>Ⓑ</span> ছাতি রিটি০৮৭ লেখা লিখব বাক
            ছাত
          </li>
          <li className='flex items-start'>
            <span className='text-lg mr-2'>ⓑ</span> ২ঘি তিতে সিটে
          </li>
          <li className='flex items-start'>
            <span className='text-lg mr-2'>Ⓑ</span> ৫ই ফিফ শটকিফ বাত
          </li>
          <li className='flex items-start'>
            <span className='text-lg mr-2'>Ⓕ</span> কফকুক সাপফত ৮ফি
          </li>
          <li className='flex items-start'>
            <span className='text-lg mr-2'>Ⓒ</span> কফসর মশাদ আজিজবন
          </li>
        </ul>
        <div className='mt-4 text-center'>
          <a
            href='tel:16910'
            className='inline-flex items-center text-blue-600 hover:text-blue-800'
          >
            <Phone className='mr-2' /> কল করুন (16910)
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseInfo;
