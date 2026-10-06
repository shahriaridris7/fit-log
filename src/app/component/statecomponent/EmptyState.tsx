import Link from "next/link";

 const EmptyState = () => {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center text-center">
      <p className="text-2xl font-bold">NOTHING HERE YET</p>
      <p className="mt-2 text-gray-500">
        Browse the library and add a lift to get today moving.
      </p>
    <Link href='../workout'><button className="m-5 btn btn-neutral text-black bg-lime-500 ">GO TO WORKOUTS</button></Link>
    </div>
  );
};
export default EmptyState;