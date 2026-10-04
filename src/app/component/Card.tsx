import React from 'react';
import Image from 'next/image';
import { Workout } from '../type.ts';
import { CiClock1 } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import Link from 'next/link';


export interface Iitemprops{
  item: Workout;
}

const Card =  ({item}:Iitemprops) => {
    
   

    return (
        <Link href={`/workout/${item.id}`}> 
       <div className=" w-full card bg-[#13151b] shadow-sm hover:-translate-y-1">
  <figure>
    <Image src={item.image} width={300} height={160} alt={item.name} loading="eager" className='w-full h-64 object-cover'/>
  </figure>
 <div>
     <div className="m-2 flex flex-wrap gap-2">
        {item.muscleGroups?.map((muscle, index) => (
          <div key={index} className="badge badge-default text-black font-medium bg-lime-500">
            {muscle}
          </div>
        ))}
      </div>
 </div>
  <div className="m-2">
    <h2 className="text-2xl font-bold ">
      {item.name}
      
    </h2>
    
    <p>{item.equipment}</p>
    
    <div className="flex items-center justify-between gap-10  text-[#9ca3af]  py-2 rounded-md w-fit font-sans text-sm">
    
      <div className="flex items-center gap-2">
        <CiClock1 className="w-5 h-5 text-[#9ca3af]" />
        <span>{item.duration} min</span>
      </div>

    
      <div className="flex items-center gap-2">
        <FaFire className="w-4 h-4 text-[#9ca3af]" />
        <span>{item.caloriesBurned} kcal</span>
      </div>

      
      <div className="flex items-center gap-2">
        <FaRegStar className="w-4 h-4 text-[#9ca3af]" />
        <span>{item.rating}</span>
      </div>
    </div>
  </div>
</div>
</Link>
    );
};

export default Card;
