import React, { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { CourseData } from "@/interface/interface";

const CourseOutLine: FC<{ data: CourseData }> = ({ data }) => {
  const courseLaidOutSection = data.sections.find(
    (section) => section.type === "features"
  );

  return (
    <div className='container mx-auto p-4'>
      <h2 className='text-xl font-bold mb-4'>{courseLaidOutSection?.name}</h2>
      <Card className='bg-gray-900 text-white border-0 shadow-lg'>
        <CardHeader>
          <CardTitle className='sr-only'>
            {courseLaidOutSection?.description}
          </CardTitle>
        </CardHeader>
        <CardContent className='space-y-6'>
          {courseLaidOutSection?.values?.map((value) => (
            <div key={value.id} className='flex items-start space-x-4'>
              <div className='flex-shrink-0'>
                <Image
                  src={value.icon}
                  alt={value.title}
                  width={40}
                  height={40}
                  className='rounded-full'
                />
              </div>
              <div>
                <p className='font-semibold text-lg'>{value.title}</p>
                <p className='text-sm text-gray-300'>{value.subtitle}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default CourseOutLine;
