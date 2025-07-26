import React, { FC } from "react";

const TitleAndDescription:FC = () => {
  return (
    <>
      {/* Left: Title + Description */}
      <div className='md:w-3/5 w-full space-y-4 flex flex-col justify-center'>
        <h1 className='text-3xl font-bold text-gray-800'>IELTS Course</h1>
        <p className='text-gray-600'>
          Academic IELTS এবং General Training IELTS-এর কমপ্লিট প্রিপারেশন নিন
          একটি কোর্সেই! দেশসেরা IELTS Instructor এর গাইডলাইনে আপনার কাঙ্ক্ষিত
          স্কোর অর্জনের সুযোগ।
        </p>
      </div>
    </>
  );
};

export default TitleAndDescription;
