import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Links from "./Links";
import Footer from "./Footer";
import Header from "./Header";
import Card from "./Card";
import Cards from "./Cards";
import About from "./About";
import {
  animals as animalsList /* , birds as birdsList */,
} from "../animalsList";

function App() {
  const [animals, setAnimals] = useState(animalsList);
  // const [birds, setBirds] = useState(birdsList);
  const [search, setSearch] = useState("");

  function removeHandler(name) {
    setAnimals(animals.filter((animal) => animal.name !== name));
    // setBirds(birds.filter((bird) => bird.name !== name));
  }

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function updateLikes(name, action) {
    setAnimals(
      animals.map((animal) => {
        if (animal.name === name) {
          if (action === "add") {
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

  const animalsFilter = animals
    .filter((animal) =>
      animal.name.toLowerCase().startsWith(search.toLowerCase())
    )
    .map((animal) => (
      <Card
        key={animal.name}
        title={animal.name}
        likes={animal.likes}
        onRemove={() => removeHandler(animal.name)}
        addLike={() => updateLikes(animal.name, "add")}
        removeLike={() => updateLikes(animal.name)}
      />
    ));

  return (
    <div className="app">
      <Header onchange={handleSearch} />
      <Links />
      <Routes>
        <Route path="/" element={<Cards animalsFilter={animalsFilter} />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
