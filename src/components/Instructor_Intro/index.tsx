import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const Instructor_Intro = () => {
  return (
    <section className=' w-full mx-auto px-4 py-6'>
      <h2 className='text-xl font-bold mb-4'>কোর্স ইনস্ট্রাক্টর</h2>

      <Card className='flex items-center gap-4 p-4 hover:shadow-md transition'>
        <Image
          src='/munzereen.png' // Make sure this image exists in /public
          alt='Munzereen Shahid'
          width={60}
          height={60}
          className='rounded-full object-cover'
        />

        <CardContent className='p-0 flex-1'>
          <div className='flex items-center justify-between'>
            <h3 className='font-semibold'>Munzereen Shahid</h3>
            <ArrowRight className='w-4 h-4 text-muted-foreground' />
          </div>
          <p className='text-sm text-muted-foreground mt-1'>
            MSc (English), University of Oxford (UK); <br />
            BA, MA (English), University of Dhaka; <br />
            IELTS: 8.5
          </p>
        </CardContent>
      </Card>
    </section>
  );
};

export default Instructor_Intro;
