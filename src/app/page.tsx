import AboutCourse from "@/components/AboutCourse";
import CourseOutcomes from "@/components/CourseOutcomes";
import CourseOutLine from "@/components/CourseOutLine";
import ExclusiveFeature from "@/components/ExclusiveFeature";
import Instructor_Intro from "@/components/Instructor_Intro";
import VideoPlayer from "@/components/Intro_Slider";
import PriceCard from "@/components/PriceCard";
import TitleAndDescription from "@/components/TitleDescription";
import React, { FC } from "react";

const Home: FC = () => {
  return (
    <section className='w-full max-w-screen-xl mx-auto px-4 py-8 space-y-10'>
      {/* Banner Section */}
      <div className='flex flex-col md:flex-row gap-2'>
        {/* Left: Title + Description */}
        <TitleAndDescription />

        {/* Right: Thumbnail Slider */}
        <div className='md:w-2/5 w-full my-10'>
          <VideoPlayer />
        </div>
      </div>

      {/* Content Section */}
      <div className='flex flex-col md:flex-row gap-6'>
        {/* Left: Card Grid */}
        <div className='md:w-3/5 w-full grid grid-cols-1 sm:grid-cols-1 gap-4'>
          <Instructor_Intro />
          <CourseOutLine />
          <CourseOutcomes />
          <ExclusiveFeature />
          <AboutCourse />
          <section className=' w-full mx-auto px-4 py-6'>
            <h2 className='text-xl font-bold mb-4'>আরও জানুন</h2>
            <VideoPlayer />
          </section>
        </div>

        {/* Right: CTA Card */}
        <div className='md:w-2/5 w-full'>
          <PriceCard />
        </div>
      </div>
    </section>
  );
};

export default Home;
