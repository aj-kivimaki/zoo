import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Card from "./components/Card";
import Root from "./routes/Root";
import Home from "./routes/Home";
import About from "./routes/About";
import Category from "./routes/Category";
import Single from "./routes/Single";
import Error from "./routes/Error";
import { animals as animalsList, birds as birdsList } from "../animalsList";

function App() {
  const [animals, setAnimals] = useState(animalsList);
  const [birds, setBirds] = useState(birdsList);
  const [search, setSearch] = useState("");

  function removeHandler(name, creatures) {
    creatures === "animals"
      ? setAnimals(animals.filter((animal) => animal.name !== name))
      : setBirds(birds.filter((bird) => bird.name !== name));
  }

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function updateLikes(name, creatures, action) {
    const updatedCreatures = checkCreatures(creatures).map((creature) => {
      if (creature.name === name) {
        if (action === "add") {
          return { ...creature, likes: creature.likes + 1 };
        } else {
          return { ...creature, likes: creature.likes - 1 };
        }
      } else {
        return creature;
      }
    });

    creatures === "animals"
      ? setAnimals(updatedCreatures)
      : setBirds(updatedCreatures);
  }

  function checkCreatures(creatures) {
    return creatures === "animals" ? animals : birds;
  }

  function filterCreatures(creatures) {
    const filteredCreatures = checkCreatures(creatures)
      .filter((creature) =>
        creature.name.toLowerCase().startsWith(search.toLowerCase())
      )
      .map((creature) => (
        <Card
          key={creature.name}
          title={creature.name}
          likes={creature.likes}
          onRemove={() => removeHandler(creature.name, creatures)}
          addLike={() => updateLikes(creature.name, creatures, "add")}
          removeLike={() => updateLikes(creature.name, creatures)}
          onClick={() => console.log("card clicked")}
          category={creatures}
        />
      ));
    return filteredCreatures;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root handleSearch={handleSearch} />,
      errorElement: <Error />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "/animals",
          element: (
            <Category filterCreatures={filterCreatures} creature="animals" />
          ),
        },
        {
          path: "/animals/:animal",
          element: <Single categoryArray={animals} category="animal" />,
        },
        {
          path: "/birds/",
          element: (
            <Category filterCreatures={filterCreatures} creature="birds" />
          ),
        },
        {
          path: "/birds/:bird",
          element: <Single categoryArray={birds} category="bird" />,
        },
        { path: "/about", element: <About /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
