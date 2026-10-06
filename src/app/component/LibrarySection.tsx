import React from 'react';
import Card from './Card';
import { Workout } from '../type.ts';
export const getFitlog = async () => {
  const res = await fetch(
    'https://api.abcz.workers.dev/api/fitlog'
  );

  if (!res.ok) {
    throw new Error('Failed to fetch Fitlog data');
  }

  return res.json();
};
const LibrarySection =async () => {
    const data= await getFitlog();
    return (
        <div id='library' className='container scroll-mt-20 mx-auto m-6 p-14'>
            <div>
                <h1 className='text-4xl font-medium'>THE LIBRARY</h1>
            </div>
            <div>
                <h1 className='text-sm text-gray-500'>Twelve lifts covering every major muscle group.</h1>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-4 p-4 justify-center items-center'> 
           {
            
           
            data.map((item:Workout,ind:number)=> (
                <Card  key={ind} item={item} ></Card>
            )
            
        )
    }
    </div>
        </div>
    );
};

export default LibrarySection;