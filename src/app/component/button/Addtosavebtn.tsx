'use client'
import { usePlan } from '@/app/context/PlanContext';
import { Workout } from '@/app/type.ts';
import React from 'react';
 
const Addtosavebtn = ({plan}:{plan: Workout}) => {
   
    const {AddToSaved,SavedFolder,metrics}= usePlan();
    const handleaddPlan=()=>{
  AddToSaved(plan);
 } 
    return (
        <div>
           <div>
             <button onClick={()=> handleaddPlan()} className="border border-gray-700 text-gray-300 font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm hover:border-gray-500">
              <h1 className="w-4 h-4" />
              Save for later
            </button>
        </div> 
        </div>
    );
};

export default Addtosavebtn;