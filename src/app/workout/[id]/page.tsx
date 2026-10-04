
import Addtoplanbtn from '@/app/component/button/Addtoplanbtn';
import Addtosavebtn from '@/app/component/button/Addtosavebtn';
import Card from '@/app/component/Card';
import { getFitlog } from '@/app/component/LibrarySection';
import { Workout } from '@/app/type.ts';
import Image from 'next/image';
import React from 'react';

interface IDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const DetailsPage = async ({ params }: IDetailsPageProps) => {
  
  const { id } = await params;
  const data = await getFitlog();

  
  const item = data.find((item:Workout) => Number(item.id) == Number(id)) as Workout;
console.log(id);
 
return (
   
    <div className=" container mx-auto min-h-screen bg-[##13151c] text-white p-6 md:p-12 font-sans flex justify-center items-center">
      <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        
        <div className="relative rounded-2xl overflow-hidden aspect-square w-full">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Side: Details */}
        <div className="flex flex-col gap-6">
          {/* Header & Badges */}
          <div>
            <h1 className="text-3xl font-extrabold tracking-wide uppercase mb-2">
              {item.name}
            </h1>
            <p className="text-gray-400 text-sm mb-4">
              {item.description || 'A targeted exercise designed for strength and conditioning.'}
            </p>
            <div className="flex gap-2">
              {item.muscleGroups?.map((group, index) => (
                <span
                  key={index}
                  className="bg-[#c2f970] text-black font-semibold text-xs px-3 py-1 rounded-full"
                >
                  {group}
                </span>
              ))}
            </div>
          </div>

          {/* Stats Box */}
          <div className="bg-[#161a20] rounded-xl p-4 text-sm divide-y divide-gray-800">
            <div className="flex justify-between py-2">
              <span className="text-gray-400 uppercase text-xs">Equipment</span>
              <span className="font-medium">{item.equipment}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-400 uppercase text-xs">Difficulty</span>
              <span className="font-medium">{item.difficulty || 'Intermediate'}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-400 uppercase text-xs">Sets</span>
              <span className="font-medium">{item.sets || 4}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-400 uppercase text-xs">Reps</span>
              <span className="font-medium">{item.reps || '6-8'}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-400 uppercase text-xs">Duration</span>
              <span className="font-medium">{item.duration} min</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-400 uppercase text-xs">Calories</span>
              <span className="font-medium">{item.caloriesBurned} kcal</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-400 uppercase text-xs">Rating</span>
              <span className="font-medium">{item.rating}</span>
            </div>
          </div>

          {/* Instructions */}
          {item.instructions && item.instructions.length > 0 && (
            <div>
              <h3 className="text-xs uppercase font-bold text-gray-300 mb-3 tracking-wider">
                Instructions
              </h3>
              <ol className="list-decimal list-inside text-xs text-gray-400 space-y-2">
                {item.instructions.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-4 pt-2">
            <Addtoplanbtn plan={item as Workout} />
            <Addtosavebtn plan={item as Workout}/>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DetailsPage;