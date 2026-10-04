'use client'
import {  createContext, useState } from 'react';
import React  from 'react';
import { PlanWorkout, Workout } from '../type.ts';
import toast from 'react-hot-toast';
interface PlanContextType{
    SavedFolder: Workout [];
    MyPlanFolder: PlanWorkout[];
    
    AddToSaved :(workout : Workout)=> void;
    AddToPlan :(workout : Workout)=> void;

    RemoveFromSaved: (id: number)=> void;
    RemoveFromPlan: (id: number)=> void;
    MarkAsDone:(id:number)=> void;
    metrics: {                               
    exercises: number;
    minutes: number;
    calories: number;
  }
};

const PlanContext =createContext < PlanContextType | null >(null);

 export const PlanContextProvider = ({children}:{children: React.ReactNode}) => {
    
    const [MyPlanFolder, setPlan] = useState<PlanWorkout[]>([]);
  const [SavedFolder, setSaved] = useState<Workout[]>([]);

   const AddToPlan =(workout: Workout)=>{
     if(MyPlanFolder.length>5){
      toast.error("Today's plan is full! (Max 5)");
      return;
     }

     if(MyPlanFolder.some((item)=> item.id===workout.id)){
       toast.error("Already in today's plan");
       return;
     }
     setPlan((prev)=>[...prev, { ...workout, isDone: false }])
     toast.success("${workout.name} added to plan!")
    
   };
   const AddToSaved = (workout: Workout) => {
    
    if (SavedFolder.some((item) => item.id === workout.id)) {
      toast.error("Already saved!");
      return;
    }

    setSaved((prev) => [...prev, workout]);
    toast.success(`${workout.name} saved for later!`);
  };
  const RemoveFromPlan =(id : number) => {
   setPlan((prev)=> prev.filter ((item)=> item.id != id));
  };

   



    const value: PlanContextType = {
    MyPlanFolder,
    SavedFolder,
    AddToSaved,
    AddToPlan,
    RemoveFromSaved,
    RemoveFromPlan,
    MarkAsDone,
    metrics,
  };

      return (
        <PlanContext.Provider value={value}>{children}</PlanContext.Provider>
    );
};

export default PlanContext;