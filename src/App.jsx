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
  const [searchTerm, setSearchTerm] = useState("");
  // const [birds, setBirds] = useState(birdsList);

  function removeHandler(name) {
    setAnimals(animals.filter((animal) => animal.name !== name));
    // setBirds(animals.filter((bird) => bird.name !== name));
  }

  function search(e) {
    setSearchTerm(e.target.value);
    const filteredAnimals = animals.filter((animal) =>
      animal.name.startsWith(searchTerm)
    );
    setAnimals(filteredAnimals);
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
                title={animal.name.toUpperCase()}
                likes={animal.likes}
                remove={() => removeHandler(animal.name)}
                /* onRemove, addLikes, removeLikes */
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
