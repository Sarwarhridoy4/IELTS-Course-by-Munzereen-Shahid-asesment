// import React, { FC } from "react";

// const Home: FC = () => {
//   return (
//     <section className='w-full max-w-screen-xl mx-auto px-4 py-4'>
//       <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-5'>
//         <div className='bg-gray-100 h-24 rounded-lg flex items-center justify-center font-semibold'>
//           Title
//         </div>
//         <div className='bg-gray-100 h-24 rounded-lg flex items-center justify-center font-semibold'>
//           Description
//         </div>
//         <div className='bg-gray-100 h-24 rounded-lg flex items-center justify-center font-semibold'>
//           Instructors
//         </div>
//         <div className='bg-gray-100 h-24 rounded-lg flex items-center justify-center font-semibold'>
//           How the course is laid out
//         </div>
//         <div className='bg-gray-100 h-24 rounded-lg flex items-center justify-center font-semibold'>
//           What you will learn
//         </div>
//         <div className='bg-gray-100 h-24 rounded-lg flex items-center justify-center font-semibold'>
//           Exclusive Features
//         </div>
//         <div className='bg-gray-100 h-24 rounded-lg flex items-center justify-center font-semibold'>
//           Course Details
//         </div>
//         <div className='bg-gray-100 h-24 rounded-lg flex items-center justify-center font-semibold'>
//           Trailer
//         </div>
//         <div className='bg-gray-100 h-24 rounded-lg flex items-center justify-center font-semibold'>
//           CTA
//         </div>
//         <div className='bg-gray-100 h-24 rounded-lg flex items-center justify-center font-semibold'>
//           Check Lists
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home;

import React, { FC } from "react";

const Home: FC = () => {
  return (
    <section className='w-full max-w-screen-xl mx-auto px-4 py-8 space-y-10'>
      {/* Banner Section */}
      <div className='flex flex-col md:flex-row gap-6'>
        {/* Left: Title + Description */}
        <div className='md:w-3/5 w-full space-y-4'>
          <h1 className='text-3xl font-bold text-gray-800'>IELTS Course</h1>
          <p className='text-gray-600'>
            Academic IELTS এবং General Training IELTS-এর কমপ্লিট প্রিপারেশন নিন
            একটি কোর্সেই! দেশসেরা IELTS Instructor এর গাইডলাইনে আপনার কাঙ্ক্ষিত
            স্কোর অর্জনের সুযোগ।
          </p>
        </div>

        {/* Right: Thumbnail Slider */}
        <div className='md:w-2/5 w-full'>
          <div className='w-full h-48 md:h-full bg-gray-200 rounded-lg flex items-center justify-center'>
            <span className='text-gray-500'>[Slider Thumbnail Here]</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className='flex flex-col md:flex-row gap-6'>
        {/* Left: Card Grid */}
        <div className='md:w-3/5 w-full grid grid-cols-1 sm:grid-cols-1 gap-4'>
          {[
            "Instructors",
            "How the course is laid out",
            "What you will learn",
            "Exclusive Features",
            "Course Details",
            "Trailer",
            "Check Lists",
          ].map((title) => (
            <div
              key={title}
              className='bg-gray-100 h-24 rounded-lg flex items-center justify-center text-center font-semibold'
            >
              {title}
            </div>
          ))}
        </div>

        {/* Right: CTA Card */}
        <div className='md:w-2/5 w-full'>
          <div className='bg-pink-100 rounded-lg p-6 shadow-md sticky top-20'>
            <h2 className='text-xl font-bold mb-2'>Ready to Enroll?</h2>
            <p className='text-gray-700 mb-4'>
              Get instant access to all course content and start your journey
              today!
            </p>
            <button className='bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition'>
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
