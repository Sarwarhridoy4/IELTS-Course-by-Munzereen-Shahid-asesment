import { Button } from "@/components/ui/button";
import Image from "next/image";

interface AppDownloadButtonProps {
  href: string;
  children: React.ReactNode;
  platform: "google" | "apple";
}

const AppDownloadButton = ({
  href,
  children,
  platform,
}: AppDownloadButtonProps) => {
  const getButtonStyle = () => {
    if (platform === "google") {
      return "bg-white text-black border border-gray-300 hover:bg-gray-100 flex items-center justify-center space-x-2";
    } else if (platform === "apple") {
      return "bg-black text-white border border-gray-800 hover:bg-gray-900 hover:text-white flex items-center justify-center space-x-2";
    }
    return "w-full bg-white text-black border border-gray-300 hover:bg-gray-100";
  };

  const getIcon = () => {
    if (platform === "google") {
      return (
        <Image
          src='/assets/store/google-play.svg'
          alt='Get it on Google Play'
          width={24}
          height={24}
          className='mr-2'
        />
      );
    } else if (platform === "apple") {
      return (
        <Image
          src='assets/store/app-store.svg'
          alt='Download on the App Store'
          width={24}
          height={24}
          className='mr-2'
        />
      );
    }
    return null;
  };

  return (
    <Button
      variant='outline'
      size='sm'
      className={`text-sm ${getButtonStyle()} px-4 py-2 rounded-md`}
    >
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className='no-underline flex items-center'
      >
        {getIcon()}
        <span>{children}</span>
      </a>
    </Button>
  );
};

export default AppDownloadButton;
