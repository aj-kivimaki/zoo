import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Card from "./components/Card";

import Root from "./routes/Root";
import Home from "./routes/Home";
import About from "./routes/About";
import Animals from "./routes/Animals";
import Birds from "./routes/Birds";
import Error from "./routes/Error";
import { animals as animalsList, birds as birdsList } from "../animalsList";

function App() {
  const [animals, setAnimals] = useState(animalsList);
  const [birds, setBirds] = useState(birdsList);
  const [search, setSearch] = useState("");

  function removeHandler(name, creatures) {
    if (creatures === "animals") {
      setAnimals(animals.filter((animal) => animal.name !== name));
    } else {
      setBirds(birds.filter((bird) => bird.name !== name));
    }
  }

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function updateLikes(name, action, creatures) {
    const creaturesArray = checkCreature(creatures);

    const updatedCreatures = creaturesArray.map((animal) => {
      if (animal.name === name) {
        if (action === "add") {
          return { ...animal, likes: animal.likes + 1 };
        } else {
          return { ...animal, likes: animal.likes - 1 };
        }
      } else {
        return animal;
      }
    });

    creatures === "animals"
      ? setAnimals(updatedCreatures)
      : setBirds(updatedCreatures);
  }

  function checkCreature(creatures) {
    return creatures === "animals" ? animals : birds;
  }

  const creaturesToFilter = (creatures) => {
    const creaturesArray = checkCreature(creatures);

    const filteredCreatures = creaturesArray
      .filter((animal) =>
        animal.name.toLowerCase().startsWith(search.toLowerCase())
      )
      .map((animal) => (
        <Card
          key={animal.name}
          title={animal.name}
          likes={animal.likes}
          onRemove={() => removeHandler(animal.name, creatures)}
          addLike={() => updateLikes(animal.name, "add", creatures)}
          removeLike={() => updateLikes(animal.name, "remove", creatures)}
        />
      ));
    return filteredCreatures;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root handleSearch={handleSearch} />,
      errorElement: <Error />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "/animals",
          element: <Animals creaturesToFilter={creaturesToFilter} />,
        },
        {
          path: "/birds",
          element: <Birds creaturesToFilter={creaturesToFilter} />,
        },
        { path: "/about", element: <About /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
