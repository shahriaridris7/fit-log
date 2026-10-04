
"use client";

import { useState } from "react";
import Image from "next/image";
import { usePlan } from "@/app/context/PlanContext";

export default function Page() {
  const {
    MyPlanFolder,
    SavedFolder,
    RemoveFromPlan,
    RemoveFromSaved,
    MarkAsDone,
    metrics,
  } = usePlan();

  const [activeTab, setActiveTab] = useState("plan");

  const workouts =
    activeTab === "plan" ? MyPlanFolder : SavedFolder;

  return (
    <div className="min-h-screen bg-[#0d0f14] text-white">
      <div className="container mx-auto max-w-6xl p-6">

      
        <h1 className="text-3xl font-bold">MY PLAN</h1>
        <p className="mt-2 text-sm text-gray-500">
          Cap of five lifts for today. Finish them, then load more.
        </p>

        
        <div className="mt-6 grid grid-cols-3 rounded-xl border border-gray-800 bg-[#13161d] p-5">
          <div>
            <p className="text-xs text-gray-500">Exercises</p>
            <h2 className="text-2xl font-bold text-lime-400">
              {metrics.exercises}
            </h2>
          </div>

          <div className="border-l border-gray-800 pl-5">
            <p className="text-xs text-gray-500">Minutes</p>
            <h2 className="text-2xl font-bold">
              {metrics.minutes}
            </h2>
          </div>

          <div className="border-l border-gray-800 pl-5">
            <p className="text-xs text-gray-500">Calories</p>
            <h2 className="text-2xl font-bold">
              {metrics.calories}
            </h2>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-6 flex gap-2">
          <button
            onClick={() => setActiveTab("plan")}
            className={`rounded-lg px-5 py-2 text-sm ${
              activeTab === "plan"
                ? "bg-lime-400 font-semibold text-black"
                : "bg-[#191c23] text-gray-400"
            }`}
          >
            Today's Plan
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`rounded-lg px-5 py-2 text-sm ${
              activeTab === "saved"
                ? "bg-lime-400 font-semibold text-black"
                : "bg-[#191c23] text-gray-400"
            }`}
          >
            Saved
          </button>
        </div>

        
        <div className="mt-5 space-y-3">
          {workouts.length === 0 ? (
            <div className="rounded-xl border border-gray-800 p-10 text-center text-gray-500">
              {activeTab === "plan"
                ? "No workouts in today's plan."
                : "No saved workouts yet."}
            </div>
          ) : (
            workouts.map((workout) => (
              <div
                key={workout.id}
                className="flex flex-col gap-4 rounded-xl border border-gray-800 bg-[#13161d] p-4 sm:flex-row sm:items-center"
              >
                {/* Image */}
                <div className="relative h-20 w-full shrink-0 overflow-hidden rounded-lg sm:w-28">
                  <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 112px"
                    className="object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1">
                  <h2 className="font-bold">
                    {workout.name}
                  </h2>

                  <p className="text-sm text-gray-500">
                    {workout.equipment}
                  </p>

                  <div className="mt-2 flex flex-wrap gap-3 text-xs text-gray-400">
                    <span>{workout.duration} min</span>
                    <span>
                      {workout.caloriesBurned} kcal
                    </span>
                    <span>★ {workout.rating}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-2">
                  {activeTab === "plan" ? (
                    <>
                      <button
                        onClick={() => MarkAsDone(workout.id)}
                        disabled={Boolean("isDone" in workout && workout.isDone)}
                        className="rounded-lg bg-lime-400 px-3 py-2 text-xs font-semibold text-black disabled:opacity-50"
                      >
                        {"isDone" in workout && workout.isDone
                          ? "Completed"
                          : "Mark as Done"}
                      </button>

                      <button
                        onClick={() => RemoveFromPlan(workout.id)}
                        className="rounded-lg bg-gray-800 px-3 py-2 text-xs"
                      >
                        Remove
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => RemoveFromSaved(workout.id)}
                      className="rounded-lg bg-gray-800 px-3 py-2 text-xs"
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}

