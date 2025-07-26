"use client";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import AppDownloadButton from "../AppDownloadButton";
import Image from "next/image";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='bg-white text-gray-600 py-8 px-4 md:px-8 w-full'
    >
      <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center lg:text-left'>
        <div className='flex flex-col items-center lg:items-start'>
          <div className='mb-2 flex flex-col items-center justify-center gap-5 mx-auto my-10'>
            <Image
              src='/assets/logo/logo.svg'
              alt='10 minutes school logo'
              width={150}
              height={150}
              className='mr-2'
            />
            <div className='space-x-4 flex flex-col gap-2'>
              <AppDownloadButton
                href='https://play.google.com/store/apps/details?id=com.a10minuteschool.tenminuteschool'
                platform='google'
              >
                Get it on Google Play Store
              </AppDownloadButton>
              <AppDownloadButton
                href='https://apps.apple.com/us/app/10-minute-school/id1577061772'
                platform='apple'
              >
                Download on the App Store
              </AppDownloadButton>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center lg:items-start'>
          <h3 className='font-semibold text-lg mb-4'>Company</h3>
          <ul className='space-y-3'>
            <li>
              <a href='/career' className='text-sm hover:text-gray-300'>
                Career / Recruitment
              </a>
            </li>
            <li>
              <a href='/join-teacher' className='text-sm hover:text-gray-300'>
                Join as a Teacher
              </a>
            </li>
            <li>
              <a href='/join-affiliate' className='text-sm hover:text-gray-300'>
                Join as an Affiliate
              </a>
            </li>
            <li>
              <a href='/privacy-policy' className='text-sm hover:text-gray-300'>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href='/refund-policy' className='text-sm hover:text-gray-300'>
                Refund Policy
              </a>
            </li>
            <li>
              <a
                href='/terms-conditions'
                className='text-sm hover:text-gray-300'
              >
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
        <div className='flex flex-col items-center lg:items-start'>
          <h3 className='font-semibold text-lg mb-4'>Resources</h3>
          <ul className='space-y-3'>
            <li>
              <a href='/blog' className='text-sm hover:text-gray-300'>
                Blog
              </a>
            </li>
            <li>
              <a href='/book-store' className='text-sm hover:text-gray-300'>
                Book Store
              </a>
            </li>
            <li>
              <a href='/free-notes' className='text-sm hover:text-gray-300'>
                Free Notes & Guides
              </a>
            </li>
            <li>
              <a
                href='/job-preparation'
                className='text-sm hover:text-gray-300'
              >
                Job Preparation
              </a>
            </li>
            <li>
              <a href='/courses' className='text-sm hover:text-gray-300'>
                Courses
              </a>
            </li>
            <li>
              <a
                href='/verify-certificate'
                className='text-sm hover:text-gray-300'
              >
                Verify Certificate
              </a>
            </li>
            <li>
              <a href='/free-download' className='text-sm hover:text-gray-300'>
                Free Download
              </a>
            </li>
          </ul>
        </div>
        <div className='flex flex-col items-center lg:items-start'>
          <h3 className='font-semibold text-lg mb-4'>Contact</h3>
          <ul className='space-y-3'>
            <li className='text-sm'>Keep up with us at</li>
            <li className='text-sm'>Call Us: 16910 (24x7)</li>
            <li className='text-sm'>WhatsApp: +8801896016252 (24x7)</li>
            <li className='text-sm'>Outside Bangladesh: +880 9610916910</li>
            <li className='text-sm'>
              Email Us:{" "}
              <a
                href='mailto:support@10minuteschool.com'
                className='hover:text-gray-300'
              >
                support@10minuteschool.com
              </a>
            </li>
          </ul>
          <div className='flex justify-center lg:justify-start space-x-4 mt-4'>
            <a
              href='https://facebook.com'
              aria-label='Facebook'
              className='hover:text-gray-300'
            >
              <Facebook className='h-6 w-6' />
            </a>
            <a
              href='https://instagram.com'
              aria-label='Instagram'
              className='hover:text-gray-300'
            >
              <Instagram className='h-6 w-6' />
            </a>
            <a
              href='https://linkedin.com'
              aria-label='LinkedIn'
              className='hover:text-gray-300'
            >
              <Linkedin className='h-6 w-6' />
            </a>
            <a
              href='https://youtube.com'
              aria-label='YouTube'
              className='hover:text-gray-300'
            >
              <Youtube className='h-6 w-6' />
            </a>
          </div>
        </div>
      </div>
      <div className='text-center mt-6 text-sm text-gray-400'>
        © 2015 - 2025 10 Minute School. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
