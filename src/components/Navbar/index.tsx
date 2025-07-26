"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu, Search, Phone, Globe } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "ক্লাস ৬-১২", href: "#" },
  { label: "ক্লাস", href: "#" },
  { label: "ভর্তি পরীক্ষা", href: "#" },
  { label: "অনলাইন ব্যাচ", href: "#" },
  { label: "ইংলিশ সেন্টার", href: "#" },
  { label: "আরও", href: "#" },
];

const NavBar = () => {
  const [language, setLanguage] = useState<"bn" | "en">("bn");

  return (
    <nav className='w-full fixed top-0 z-50 bg-white shadow-sm'>
      <div className='max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between gap-4'>
        {/* Mobile Menu */}
        <div className='md:hidden flex items-center gap-2'>
          <Sheet>
            <SheetTrigger aria-label='Open menu'>
              <Menu className='h-6 w-6' />
            </SheetTrigger>
            <SheetContent side='left' className='w-64'>
              <div className='space-y-4 mt-6'>
                {navItems.map((item) => (
                  <Link key={item.label} href={item.href}>
                    <Button variant='ghost' className='w-full justify-start'>
                      {item.label}
                    </Button>
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
          <Image
            src='/assets/logo/logo.svg'
            alt='10 minutes school logo'
            width={150}
            height={150}
            priority
          />
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex items-center gap-8'>
          <Link href='/'>
            <Image
              src='/assets/logo/logo.svg'
              alt='10 minutes school logo'
              width={150}
              height={150}
              priority
            />
          </Link>

          <div className='flex items-center border px-3 py-1.5 rounded-full gap-2 bg-muted/50'>
            <Search className='h-4 w-4 text-muted-foreground' />
            <Input
              placeholder='ক্লাস কোর্স, কিংবা স্কুল প্রোগ্রাম সার্চ করুন'
              className='border-none text-sm bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0'
            />
          </div>
        </div>

        {/* Right Controls */}
        <div className='flex items-center gap-3'>
          <div className='hidden md:flex gap-4'>
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className='text-sm hover:underline'
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Language Switch */}
          <Button
            variant='outline'
            size='sm'
            onClick={() => setLanguage((l) => (l === "bn" ? "en" : "bn"))}
            aria-label='Toggle language'
          >
            <Globe className='h-4 w-4 mr-1' />
            {language.toUpperCase()}
          </Button>

          {/* Phone */}
          <a
            href='tel:16910'
            className='hidden md:flex items-center gap-1 text-sm font-medium'
          >
            <Phone className='h-4 w-4' /> 16910
          </a>

          {/* Login */}
          <Button
            size='sm'
            className='bg-green-600 hover:bg-green-700 text-white'
          >
            লগ-ইন
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
