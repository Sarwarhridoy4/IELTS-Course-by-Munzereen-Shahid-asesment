import { MessageCircleDashedIcon, PhoneCall } from "lucide-react";
import Link from "next/link";
import React, { FC } from "react";

const FloatingButtons: FC = () => {
  const whatsappLinks = [
    {
      icon: <MessageCircleDashedIcon className='w-5 h-5' />,
      href: "https://wa.me/8801896016252",
      bg: "bg-green-500 hover:bg-green-600",
      label: "Chat Support",
    },
    {
      icon: <PhoneCall className='w-5 h-5' />,
      href: "https://wa.me/8801896016252",
      bg: "bg-green-600 hover:bg-green-700",
      label: "Call Support",
    },
  ];
  return (
    <div className='fixed bottom-4 right-4 flex flex-col gap-3 z-50'>
      {whatsappLinks.map(({ icon, href, bg, label }) => (
        <Link
          key={label}
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={label}
          className={`text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110 ${bg}`}
        >
          {icon}
        </Link>
      ))}
    </div>
  );
};

export default FloatingButtons;
