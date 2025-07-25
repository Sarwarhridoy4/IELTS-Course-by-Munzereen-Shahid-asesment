import React, { FC } from "react";

const Home: FC = () => {
  return (
    <div className='w-full flex flex-col md:flex-row gap-4'>
      <aside className='w-full md:w-3/4 space-y-4'>
        <div className='bg-gray-100 h-16'>Title</div>
        <div className='bg-gray-100 h-16'>Description</div>
        <div className='bg-gray-100 h-16'>Instructors</div>
        <div className='bg-gray-100 h-16'>How the course is laid out</div>
        <div className='bg-gray-100 h-16'>
          What you will learn by doing the course
        </div>
        <div className='bg-gray-100 h-16'>Course Exclusive Feature</div>
        <div className='bg-gray-100 h-16'>Course details</div>
      </aside>
      <main className='w-full md:w-3/4 space-y-4'>
        <div className='bg-gray-100 h-16'>Trailer</div>
        <div className='bg-gray-100 h-16'>CTA</div>
        <div className='bg-gray-100 h-16'>Check Lists</div>
      </main>
    </div>
  );
};

export default Home;
