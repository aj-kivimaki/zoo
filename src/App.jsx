// import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Search from "./Search";
import Card from "./Card";
import { animals } from "../animalsList";

function App() {
  // const [animals, setAnimals] = useState([
  //   {
  //     id: 1,
  //     image: "https://source.unsplash.com/1600x900/?nature,water",
  //     name: "1st name",
  //     likes: 0
  //   },
  //   {
  //     id: 2,
  //     image: "https://source.unsplash.com/1600x900/?nature,water",
  //     name: "2nd name",
  //     likes: 0
  //   },
  //   {
  //     id: 3,
  //     image: "https://source.unsplash.com/1600x900/?nature,water",
  //     name: "3rd name",
  //     likes: 0
  //   },
  //   {
  //     id: 4,
  //     image: "https://source.unsplash.com/1600x900/?nature,water",
  //     name: "4th name",
  //     likes: 0
  //   },
  // ]);

  return (
    <>
      <div className="app">
        <Header />
        <Search />
        <main>
          <div className="cards">
            {animals.map((animal) => (
              <Card
                key={animal.id}
                title={animal.name}
                image={animal.image}
                likes={animal.likes}
              />
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
