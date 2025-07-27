import React, { FC } from "react";
import { CourseData } from "@/interface/interface";

const TitleAndDescription: FC<{ data: CourseData }> = ({ data }) => {
  return (
    <>
      {/* Left: Title + Description */}
      <div className='md:w-3/5 w-full space-y-4 flex flex-col justify-center'>
        <h1 className='text-3xl font-bold text-gray-800'>{data.title}</h1>
        <div
          className='text-gray-600'
          dangerouslySetInnerHTML={{ __html: data.description }}
        />
      </div>
    </>
  );
};

export default TitleAndDescription;
