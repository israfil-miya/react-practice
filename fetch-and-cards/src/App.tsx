import { useEffect, useState } from "react";

import Card from "./components/Card";

interface CardsData {
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    image: string;
    [key: string]: any;
};

function App() {
  const [cardsData, setCardsData] = useState<CardsData[] | null>([]);
  const [loading, setLoading] = useState<Boolean>(false);

  let loadCats = async () => {
    setLoading(true);
    let cards = await fetch("https://dummyjson.com/users?limit=15");
    let data = await cards.json();
    setCardsData(data.users);
    setLoading(false);
  };

  useEffect(() => {
     loadCats();
  }, []);

  return (
    <>
      <div className="mb-5 mx-[10vw]">
        <h1 className="py-5 text-3xl font-bold text-center underline underline-offset-4">
          Choose Your Cat
        </h1>
        {!loading ? (
          <div className="flex flex-col gap-4 card-list">
            {cardsData?.map((card, index) => (
              <Card key={index} card={card} />
            ))}
          </div>
        ) : (
          <h1 className="text-2xl text-center">Loading...</h1>
        )}
      </div>
    </>
  );
}

export default App;
