import React from "react";

function Card({ card }) {
  return (
    <div className="flex gap-3 border hover:border-black hover:cursor-pointer hover:shadow-lg hover:shadow-stale-50">
      <img className="w-[5rem]" src={card.image} alt="Avatar" />
      <div className="py-2 card-body">
        <h3 className="text-xl font-bold">
          {card.firstName} {card.lastName} ({card.age})
        </h3>
        <p className="italic">{card.email}</p>
      </div>
    </div>
  );
}

export default Card;
 