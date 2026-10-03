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