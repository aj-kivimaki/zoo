import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Search from "./Search";
import Links from "./Links";
import Card from "./Card";
import {
  animals as animalsList /* , birds as birdsList */,
} from "../animalsList";

function App() {
  const [animals, setAnimals] = useState(animalsList);
  const [filteredAnimals, setFilteredAnimals] = useState([]);
  // const [birds, setBirds] = useState(birdsList);

  function removeHandler(name) {
    setAnimals(animals.filter((animal) => animal.name !== name));
    // setBirds(animals.filter((bird) => bird.name !== name));
  }

  function search(e) {
    const keyword = e.target.value;
    setFilteredAnimals(
      animals.filter((animal) =>
        animal.name.toLowerCase().startsWith(keyword.toLowerCase())
      )
    );
  }

  function updateLikes(name, str) {
    setAnimals(
      animals.map((animal) => {
        if (animal.name === name) {
          if (str === "add") {
            return { ...animal, likes: animal.likes + 1 };
          } else {
            return { ...animal, likes: animal.likes - 1 };
          }
        } else {
          return animal;
        }
      })
    );
  }

  return (
    <>
      <div className="app">
        <Header />
        <Search search={search} />
        <Links />
        <main>
          {/* <div className="birds cards">
            {birds.map((bird) => (
              <Card
                key={bird.name}
                title={bird.name.toUpperCase()}
                likes={bird.likes}
                removeBird={() => removeHandler(bird.name)}
              />
            ))}
          </div> */}
          <div className="cards">
            {animals.map((animal) => (
              <Card
                key={animal.name}
                title={animal.name}
                likes={animal.likes}
                onRemove={() => removeHandler(animal.name)}
                addLike={() => updateLikes(animal.name, "add")}
                removeLike={() => updateLikes(animal.name)}
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
