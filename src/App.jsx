import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Search from "./Search";
import Card from "./Card";

function App() {
  const [animals, setAnimals] = useState([
    {
      id: 1,
      image: "https://source.unsplash.com/1600x900/?nature,water",
      title: "Random pic",
    },
    {
      id: 2,
      image: "https://source.unsplash.com/1600x900/?nature,water",
      title: "2nd Random pic",
    },
    {
      id: 3,
      image: "https://source.unsplash.com/1600x900/?nature,water",
      title: "3rd Random pic",
    },
    {
      id: 4,
      image: "https://source.unsplash.com/1600x900/?nature,water",
      title: "4th Random pic",
    },
  ]);

  return (
    <>
      <div className="app">
        <Header />
        <Search />
        <main>
          <div className="cards">
            {animals.map((animal) => (
              <Card key={animal.id} title={animal.title} image={animal.image} />
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
