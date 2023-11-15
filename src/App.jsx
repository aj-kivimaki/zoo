import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Card from "./components/Card";

import Root from "./routes/Root";
import Home from "./routes/Home";
import About from "./routes/About";
import Animals from "./routes/Animals";
import Birds from "./routes/Birds";
import Error from "./routes/Error";
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

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root handleSearch={handleSearch} />,
      errorElement: <Error />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "/animals",
          element: <Animals animalsFilter={animalsFilter} />,
        },
        {
          path: "/birds",
          element: <Birds />,
        },
        { path: "/about", element: <About /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
