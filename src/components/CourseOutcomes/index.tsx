import React, { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { CourseData } from "@/interface/interface";

const CourseOutcomes: FC<{ data: CourseData }> = ({ data }) => {
  const outcomes = data?.sections?.find(
    (section) => section.type === "pointers"
  );
  return (
    <div className='container mx-auto p-4'>
      <h2 className='text-xl font-semibold mb-4'>{outcomes?.name}</h2>
      <Card className='bg-white text-gray-700 border-0 shadow-lg'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold text-center sr-only'>
            {outcomes?.description}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            {outcomes?.values?.map((item, index) => (
              <div
                key={item.id || index}
                className='flex items-start space-x-3'
              >
                <CheckCircle className='h-5 w-5 text-green-500 mt-1 shrink-0' />
                <p className='text-sm text-black leading-snug'>{item.text}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CourseOutcomes;
