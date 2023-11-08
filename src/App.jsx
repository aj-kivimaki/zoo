import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Search from "./Search";
import Links from "./Links";
import Card from "./Card";
import { animals as animalsList } from "../animalsList";
// import { birds as birdsList } from "../animalsList";

function App() {
  const [animals, setAnimals] = useState(animalsList);
  // const [birds, setBirds] = useState(birdsList);

  function removeHandler(name) {
    setAnimals(animals.filter((animal) => animal.name !== name));
    // setBirds(animals.filter((bird) => bird.name !== name));
  }

  function search(e) {
    console.log(e.target.value);
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
