import React from 'react';
import logo from '@/app/Image/logo.png'
import Image from 'next/image';
const Footer = () => {
    return (
      <div className='flex justify-between items-center container mx-auto my-1 bg-[#13151c]'>
        <section className='flex justify-center items-center gap-2'>
           <Image
            src={logo}
            alt="FITLOG logo"
            width={20}
            height={20}
          />
            <h1 className="text-[12px] font-medium ">
            FITLOG
          </h1>
        </section>
        <section>
          <p className='text-[12px] text-gray-700'>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
        </section>
      </div>
    );
};

export default Footer;