import React from 'react';
import { getFitlog } from './LibrarySection';
import Image from 'next/image';
import { Workout } from '../type.ts';

export interface Iitemprops{
  item: Workout;
}

const Card = async ({item}:Iitemprops) => {
    

    return (
       <div className="card bg-base-100 shadow-sm">
  <figure>
    <Image src={item.image} width={300} height={300} alt={item.name}/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Card Title
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
    );
};

export default Card;
