import React from "react";

interface CardProps {
    card: {
        firstName: string;
        lastName: string;
        age: number;
        email: string;
        image: string;
        [key: string]: any;
    };
}

const Card: React.FC<CardProps> = (props) => {
    let { card } = props
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
