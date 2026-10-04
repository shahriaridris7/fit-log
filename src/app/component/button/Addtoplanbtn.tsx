'use client'
import { usePlan } from '@/app/context/PlanContext';
import { Workout } from '@/app/type.ts';
import React from 'react';

const Addtoplanbtn = ({plan}:{plan:Workout}) => {
    const {AddToPlan,MyPlanFolder,metrics}= usePlan();
    const handleaddPlan=()=>{
  AddToPlan(plan);
 }  
    return (
        <div>
             <button  onClick={()=> handleaddPlan()} className="flex-1 bg-[#c2f970] text-black font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm hover:opacity-90">
              < h1 className="w-4 h-4" />
              Add to today's plan
            </button>
        </div>
    );
};

export default Addtoplanbtn;