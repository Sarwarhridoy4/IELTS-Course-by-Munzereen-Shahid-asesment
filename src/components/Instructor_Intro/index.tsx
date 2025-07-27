import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { CourseData, InstructorValue } from "@/interface/interface";
import Link from "next/link";

const Instructor_Intro: React.FC<{ data: CourseData }> = ({ data }) => {

  const instructorSection = data.sections.find(
    (section) => section.type === "instructors"
  );

  const instructor = instructorSection?.values?.[0] as InstructorValue;
  return (
    <section className='w-full max-w-4xl mx-auto px-4 py-6'>
      <h2 className='text-2xl font-bold mb-6 text-gray-800'>
        {instructorSection?.name || "Instructor Introduction"}
      </h2>

      {instructor.has_instructor_page ? (
        <Link href={`/instructor/${instructor.slug}`} className="block">
          <Card className='flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 hover:shadow-md transition cursor-pointer'>
            <Image
              src={instructor.image}
              alt={instructor.name}
              width={80}
              height={80}
              className='rounded-full object-cover shrink-0'
            />

            <CardContent className='p-0 w-full'>
              <div className='flex justify-between items-center w-full'>
                <h3 className='text-lg font-semibold text-gray-900'>
                  {instructor.name}
                </h3>
                {instructor.has_instructor_page && (
                  <ArrowRight className='w-5 h-5 text-gray-400' />
                )}
              </div>
              <div
                className='text-sm text-gray-600 mt-2 leading-relaxed'
                dangerouslySetInnerHTML={{ __html: instructor.description }}
              />
            </CardContent>
          </Card>
        </Link>
      ) : (
        <Card className='flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 hover:shadow-md transition cursor-pointer'>
          <Image
            src={instructor.image}
            alt={instructor.name}
            width={80}
            height={80}
            className='rounded-full object-cover shrink-0'
          />

          <CardContent className='p-0 w-full'>
            <div className='flex justify-between items-center w-full'>
              <h3 className='text-lg font-semibold text-gray-900'>
                {instructor.name}
              </h3>
              {instructor.has_instructor_page && (
                <ArrowRight className='w-5 h-5 text-gray-400' />
              )}
            </div>
            <p
              className='text-sm text-gray-600 mt-2 leading-relaxed'
              dangerouslySetInnerHTML={{ __html: instructor.description }}
            />
          </CardContent>
        </Card>
      )}
    </section>
  );
};

export default Instructor_Intro;
