// app/product/ielts-course/page.tsx (or app/page.tsx for home)
import AboutCourse from "@/components/AboutCourse";
import CourseOutcomes from "@/components/CourseOutcomes";
import CourseOutLine from "@/components/CourseOutLine";
import CourseSlider from "@/components/CourseSlider";
import ExclusiveFeature from "@/components/ExclusiveFeature";
import FreeEbook from "@/components/FreeEbooks";
import FreqAskedQuestion from "@/components/FreqAskedQuestion";
import Instructor_Intro from "@/components/Instructor_Intro";
import VideoPlayer from "@/components/IntroSlider";
import PriceCard from "@/components/PriceCard";
import TitleAndDescription from "@/components/TitleDescription";

type Props = {
  searchParams: Promise<{ lang?: string }>;
};

const getProductData = async (lang = "en") => {
  const baseUrl = process.env.NEXT_PUBLIC_COURSE_API_BASE as string;
  const platform = process.env.NEXT_PUBLIC_SOURCE_PLATFORM as string;
  const res = await fetch(`${baseUrl}/ielts-course?lang=${lang}`, {
    headers: {
      "X-TENMS-SOURCE-PLATFORM": platform || "web",
      accept: "application/json",
    },
    cache: "no-store", // SSR
  });

  if (!res.ok) throw new Error("Failed to fetch product data");
  return res.json();
};

export default async function ProductPage({ searchParams }: Props) {
  const params = await searchParams;
  const lang = params?.lang || "en";
  const course = await getProductData(lang);

  return (
    <section className='w-full max-w-screen-xl mx-auto px-4 py-8 space-y-10'>
      {/* Banner Section */}
      <div className='flex flex-col md:flex-row gap-2'>
        <TitleAndDescription {...course} />
        <div className='md:w-2/5 w-full my-10'>
          <CourseSlider {...course} />
        </div>
      </div>

      {/* Content Section */}
      <div className='flex flex-col md:flex-row gap-6'>
        <div className='md:w-3/5 w-full grid grid-cols-1 sm:grid-cols-1 gap-4'>
          <Instructor_Intro {...course} />
          <CourseOutLine {...course} />
          <CourseOutcomes {...course} />
          <FreeEbook {...course} />
          <ExclusiveFeature {...course} />
          <AboutCourse {...course} />
          <FreqAskedQuestion {...course} />
          <section className='w-full mx-auto px-4 py-6'>
            <h2 className='text-xl font-bold mb-4'>আরও জানুন</h2>
            <VideoPlayer {...course} />
          </section>
        </div>

        <div className='md:w-2/5 w-full'>
          <PriceCard {...course} />
        </div>
      </div>
    </section>
  );
}
