import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Image from "next/image";
import { FC } from "react";
import { CourseData } from "@/interface/interface";

const PriceCard: FC<{ data: CourseData }> = ({ data }) => {
  const price = data?.price || "৳1000";
  const originalPrice = data?.original_price || "৳1500";
  const discount = data?.discount || "৳500";
  const cta_text = data?.cta_text?.name || "কোর্সটি কিনুন";
  const cta_value = data?.cta_text?.value || "#";

  return (
    <Card className='w-full max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden'>
      <CardHeader className='p-4 text-center'>
        <CardTitle className='text-2xl font-bold text-gray-800'>
          {price}{" "}
          <span className='text-red-500 line-through'>{originalPrice}</span>{" "}
          <span className='text-orange-500 text-sm'>{discount} ছাড়</span>
        </CardTitle>
        <Button
          asChild
          className='mt-2 w-full bg-green-600 hover:bg-green-700 text-white'
        >
          <a href={cta_value}>{cta_text}</a>
        </Button>
      </CardHeader>

      <CardContent className='p-6'>
        <h3 className='text-xl font-semibold text-gray-700 mb-4'>
          এই কোর্সে যা পাবে
        </h3>
        <ul className='space-y-3'>
          {data?.checklist?.map((item) => (
            <li key={item.id} className='flex items-start space-x-3'>
              <Image
                src={item.icon}
                alt='check-icon'
                width={20}
                height={20}
                className='mt-1'
              />
              <span className='text-gray-600'>{item.text}</span>
            </li>
          ))}
        </ul>

        <div className='mt-6 text-sm text-gray-500 flex justify-between items-center'>
          <span>কোর্সটি সাপোর্ট ভিজিটি অফারে</span>
          <span className='flex items-center'>
            <Phone className='mr-1 h-4 w-4' aria-hidden='true' />
            কল করুন (16910)
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default PriceCard;
