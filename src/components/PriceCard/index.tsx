import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Phone } from "lucide-react";

const PriceCard = () => {
  return (
    <Card className='w-full max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden'>
      <CardHeader className='p-4 text-center'>
        <CardTitle className='text-2xl font-bold text-gray-800'>
          ৳3850 <span className='text-red-500'>৳5000</span>{" "}
          <span className='text-orange-500 text-sm'>1150 ৳ ছাড়</span>
        </CardTitle>
        <Button className='mt-2 w-full bg-green-600 hover:bg-green-700 text-white'>
          কোর্সটি কিনুন
        </Button>
      </CardHeader>
      <CardContent className='p-6'>
        <h3 className='text-xl font-semibold text-gray-700 mb-4'>
          এই কোর্সে যা পাবে
        </h3>
        <ul className='space-y-2'>
          <li className='flex items-center'>
            <CheckCircle2 className='text-green-500 mr-2' aria-hidden='true' />
            <span className='text-gray-600'>কোর্সটি কারেন্ট ০০০০ ঘণ্টা</span>
          </li>
          <li className='flex items-center'>
            <CheckCircle2 className='text-green-500 mr-2' aria-hidden='true' />
            <span className='text-gray-600'>সম্পূর্ণ লাগার ৬০ বার্তা</span>
          </li>
          <li className='flex items-center'>
            <CheckCircle2 className='text-green-500 mr-2' aria-hidden='true' />
            <span className='text-gray-600'>৬০টি ভিডিও</span>
          </li>
          <li className='flex items-center'>
            <CheckCircle2 className='text-green-500 mr-2' aria-hidden='true' />
            <span className='text-gray-600'>৬০টি লাইভ শিক্ষা মাধ্যমে</span>
          </li>
          <li className='flex items-center'>
            <CheckCircle2 className='text-green-500 mr-2' aria-hidden='true' />
            <span className='text-gray-600'>২০টি লেকচার শিট</span>
          </li>
          <li className='flex items-center'>
            <CheckCircle2 className='text-green-500 mr-2' aria-hidden='true' />
            <span className='text-gray-600'>৩০টি প্র্যাকটিস</span>
          </li>
          <li className='flex items-center'>
            <CheckCircle2 className='text-green-500 mr-2' aria-hidden='true' />
            <span className='text-gray-600'>সাথে ফ্রি হোটকেপ বই</span>
          </li>
          <li className='flex items-center'>
            <CheckCircle2 className='text-green-500 mr-2' aria-hidden='true' />
            <span className='text-gray-600'>ফেসবুক গ্রুপে সাপোর্ট</span>
          </li>
          <li className='flex items-center'>
            <CheckCircle2 className='text-green-500 mr-2' aria-hidden='true' />
            <span className='text-gray-600'>কোর্স মেম্বার আইডি</span>
          </li>
        </ul>
        <div className='mt-4 text-sm text-gray-500 flex justify-between'>
          <span>কোর্সটি সাপোর্ট ভিজিটি অফারে</span>
          <span className='flex items-center'>
            <Phone className='mr-1' aria-hidden='true' /> কল করুন (16910)
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default PriceCard;
