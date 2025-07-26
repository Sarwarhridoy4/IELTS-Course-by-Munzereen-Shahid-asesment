import React, { FC } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

const AboutCourse: FC = () => {
  return (
    <section className=' w-full mx-auto px-4 py-6'>
      <h2 className='text-xl font-bold mb-4'>কোর্স সম্পর্কে</h2>
      <Card className='w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden'>
        <CardContent className='p-4'>
          <Accordion type='single' collapsible className='w-full'>
            <AccordionItem value='item-1'>
              <AccordionTrigger>IELTS Course-এর মাধ্যমে জানা</AccordionTrigger>
              <AccordionContent>
                <ul className='list-disc pl-5 space-y-2 text-gray-600'>
                  <li>
                    বাংলা উচ্চারণ, শব্দভাণ্ডার ও কথকতা অনুশীলন শেখা (বিনা
                    মূল্যে)
                  </li>
                  <li>
                    বাংলা উচ্চারণ (স্বর ও ব্যঞ্জনবর্ণ) অভ্যাস বিল্ডার যথাযোগ্য
                    ব্যবহারের জন্য অ্যাকাডেমিক ক্যাটাগরি
                  </li>
                  <li>না</li>
                  <li>
                    IELTS প্রস্তুতির জন্য টিউটর, কারা বা IELTS সফটওয়্যার
                    ক্যাটাগরি হিসেবে কার্যকর না
                  </li>
                  <li>না</li>
                  <li>
                    বাংলা ভাষায় নির্দিষ্ট কিছু নির্দিষ্ট IELTS Band Score
                    বাড়াতে তা
                  </li>
                  <li>
                    বাংলায় কারা বা বাংলা ক্যাটাগরি বিভিন্ন মডিউল (reading,
                    writing, listening ও speaking) কারা যাতে তা
                  </li>
                  <li>
                    স্টুডেন্ট কারা কার্যকরভাবে বাংলা ভাষার কারা বা IELTS এর জন্য
                    যথাযথ প্রস্তুতি নিতে তা
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2'>
              <AccordionTrigger>
                IELTS প্রস্তুতির জন্য কতটা সময় লাগে?
              </AccordionTrigger>
              <AccordionContent>
                <ul className='list-disc pl-5 space-y-2 text-gray-600'>
                  <li>প্রস্তুতির সময় ব্যক্তি অনুযায়ী ভিন্ন হতে পারে</li>
                  <li>সাধারণত ২-৩ মাস কার্যকর প্রস্তুতি জন্য পর্যাপ্ত</li>
                  <li>দৈনিক ২-৩ ঘণ্টা অভ্যাস প্রয়োজন</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-3'>
              <AccordionTrigger>IELTS-এ কত স্কোর প্রয়োজন?</AccordionTrigger>
              <AccordionContent>
                <ul className='list-disc pl-5 space-y-2 text-gray-600'>
                  <li>বিশ্ববিদ্যালয়ের জন্য সাধারণত ৬.৫ বা তার বেশি</li>
                  <li>ইমিগ্রেশনের জন্য ৭.০ বা তার উপর</li>
                  <li>পেশার উন্নতির জন্য ৬.০ থেকে ৭.৫</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </section>
  );
};

export default AboutCourse;
