import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/Motion_Div/motion-div";

const NotFoundPage = () => (
  <div className='w-full min-h-[calc(100vh-64px)] flex items-center justify-center bg-gradient-to-tr from-[#ffe4e6] via-[#fcdada] to-[#fecaca] px-4'>
    <MotionDiv
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='flex flex-col items-center justify-center text-center bg-white/80 backdrop-blur-md border border-white/30 rounded-3xl shadow-2xl max-w-md w-full p-10'
    >
      <h1 className='text-6xl font-extrabold text-red-500 mb-4 tracking-tight'>
        404
      </h1>
      <h2 className='text-2xl font-semibold text-gray-800 mb-3'>
        Page Not Found
      </h2>
      <p className='text-gray-600 mb-6 text-sm leading-relaxed'>
        The page you’re looking for doesn’t exist or has been moved. Let’s get
        you back on track.
      </p>
      <Link href='/' passHref>
        <Button className='gap-2 text-base rounded-full px-6 py-2'>
          <ArrowLeft className='w-4 h-4' />
          Back to Home
        </Button>
      </Link>
    </MotionDiv>
  </div>
);

export default NotFoundPage;
