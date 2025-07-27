
import Link from "next/link";
import { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CourseData } from "@/interface/interface";

const CourseCard: FC<CourseData> = ({
  slug,
  title,
  description,
  platform = "skills",
  type = "regular",
  modality = "recorded",
  price = 1000,
}) => {
  return (
    <Link
      href={`/${slug}`}
      className='focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl transition-shadow block'
      aria-label={`View details of ${title}`}
    >
      <Card className='h-full flex flex-col justify-between transition-all hover:shadow-lg shadow-sm dark:border-gray-700'>
        <CardHeader>
          <CardTitle className='text-lg'>{title}</CardTitle>
          <CardDescription>
            <div
              className='text-sm text-muted-foreground line-clamp-3'
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </CardDescription>
        </CardHeader>

        <CardContent className='flex flex-wrap gap-2 mt-2'>
          <Badge variant='outline'>{platform}</Badge>
          <Badge variant='outline'>{type}</Badge>
          <Badge variant='outline'>{modality}</Badge>
        </CardContent>

        <CardFooter className='flex justify-between items-center mt-4'>
          <div className='text-primary font-semibold text-base'>৳ {price}</div>
          <div className='text-sm text-blue-600 dark:text-blue-400 font-medium inline-flex items-center gap-1 group'>
            বিস্তারিত দেখুন
            <span className='transition-transform transform group-hover:translate-x-1'>
              →
            </span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default CourseCard;
