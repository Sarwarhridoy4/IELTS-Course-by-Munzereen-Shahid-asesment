import type { Metadata } from "next";
import CourseCard from "@/components/CourseCard";
import { ApiResponse, CourseData } from "@/interface/interface";

type Props = {
  searchParams?: { lang?: string };
};

const getCourse = async (lang: string): Promise<CourseData> => {
  const baseUrl = process.env.NEXT_PUBLIC_COURSE_API_BASE;
  const platform = process.env.NEXT_PUBLIC_SOURCE_PLATFORM;

  const res = await fetch(`${baseUrl}/ielts-course?lang=${lang}`, {
    headers: {
      "X-TENMS-SOURCE-PLATFORM": platform || "web",
      accept: "application/json",
    },
    cache: "no-store", // SSR
  });

  if (!res.ok) throw new Error("Failed to fetch course");
  const result: ApiResponse = await res.json();
  return result.data;
};

// This function runs on the server and provides dynamic SEO metadata for the page
export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const lang = searchParams?.lang || "en";
  try {
    const course = await getCourse(lang);

    // Use your API's SEO info if available, fallback if not
    const seo = course.seo || [];

    return {
      title:
        (seo.length > 0 && seo[0].title) ||
        "Best IELTS Preparation Course by Munzereen Shahid [2025]",
      description:
        (seo.length > 0 && seo[0].description) ||
        "Take Best IELTS preparation with us, This Course is one of the Best IELTS Course in Bangladesh, which includes mock tests, and a premium study book.",
      keywords: (seo.length > 0 && seo[0].keywords) || [
        "IELTS",
        "IELTS Course",
        "Munzereen Shahid",
        "10 Minute School",
      ],
    };
  } catch (error) {
    console.error("Error fetching course data for metadata:", error);
    return {
      title: "Best IELTS Preparation Course by Munzereen Shahid [2025]",
      description:
        "Take Best IELTS preparation with us, This Course is one of the Best IELTS Course in Bangladesh, which includes mock tests, and a premium study book.",
      keywords: [
        "IELTS",
        "IELTS Course",
        "Munzereen Shahid",
        "10 Minute School",
      ],
    };
  }
}

export default async function HomePage({ searchParams }: Props) {
  const lang = searchParams?.lang || "en";
  const course = await getCourse(lang);

  return (
    <section className='w-full max-w-screen-xl mx-auto px-4 py-10'>
      <h1 className='text-2xl font-bold mb-6 my-8'>
        {lang === "en" ? "Courses" : "কোর্সসমূহ"}
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <CourseCard {...course} />
      </div>
    </section>
  );
}
