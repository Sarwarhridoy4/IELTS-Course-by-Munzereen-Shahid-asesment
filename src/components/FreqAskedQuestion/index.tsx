import React, { FC } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { CourseData } from "@/interface/interface";

const FreqAskedQuestion: FC<{ data: CourseData }> = ({ data }) => {
  const faq = data?.sections?.find((section) => section.type === "faq");

  return (
    <section className='w-full mx-auto px-4 py-6'>
      <h2 className='text-xl font-bold mb-4'>{faq?.name}</h2>
      <Card className='w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden'>
        <CardContent className='p-4'>
          <Accordion type='single' collapsible className='w-full'>
            {faq?.values?.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className='text-lg font-semibold'>
                  <span
                    dangerouslySetInnerHTML={{ __html: item.question ?? "" }}
                    className='text-left w-full'
                  />
                </AccordionTrigger>
                <AccordionContent className='text-gray-700'>
                  <div
                    className='prose max-w-none'
                    dangerouslySetInnerHTML={{ __html: item.answer ?? "" }}
                  />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </section>
  );
};

export default FreqAskedQuestion;
