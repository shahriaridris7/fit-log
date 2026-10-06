import React from 'react';
import logo from '@/app/Image/banner.png'
import Image from 'next/image';
import Link from 'next/link';
import BrowseWorkout from './button/BrowseWorkout';
const Hero = () => {
    return (
      <div className='container mx-auto gap-4 p-10'>

        <div className=" hero bg-[#13151c] ">
  <div className="hero-content flex-col lg:flex-row-reverse">
   <Image src={logo} alt="Banner" width={334} height={334}/>
    <div>
      <h1 className="text-base text-center md:text-left text-lime-400 font-bold">Workout Library</h1>
      <p className=" text-center md:text-left text-7xl py-6">
       TRAIN WITH INTENT. LOG
       <br />
       EVERY SET.
      
      </p>
      <p className='p-2 text-center md:text-left'>
        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
        <br />
        into today's plan, and watch the week's work add up.
      </p>
      <BrowseWorkout ></BrowseWorkout>
    </div>
  </div>
</div>
      </div>
        
    );
};

export default Hero;
