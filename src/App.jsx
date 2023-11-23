import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { animals as animalsList, birds as birdsList } from "../animalsList";
import Root from "./routes/Root";
import Home from "./routes/Home";
import About from "./routes/About";
import Category from "./routes/Category";
import Single from "./routes/Single";
import Error from "./routes/Error";

function App() {
  const [search, setSearch] = useState("");
  const [zoo, setZoo] = useState({
    animals: animalsList,
    birds: birdsList,
  });

  function handleRemove(name, category) {
    const updatedCategory = zoo[category].filter((elem) => elem.name !== name);
    setZoo({ ...zoo, [category]: updatedCategory });
  }

  function handleLikes(name, category, action) {
    const updatedCategory = zoo[category].map((elem) => {
      if (elem.name !== name) return elem;
      return action === "add"
        ? { ...elem, likes: elem.likes + 1 }
        : { ...elem, likes: elem.likes - 1 };
    });
    setZoo({ ...zoo, [category]: updatedCategory });
  }

  const handleSearch = (e) => setSearch(e.target.value);
  const handleClean = (e) => {
    setSearch("");
    e.target.reset();
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root handleSearch={handleSearch} handleClean={handleClean} />,
      errorElement: <Error />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: ":category",
          element: (
            <Category
              zoo={zoo}
              onRemove={handleRemove}
              addLike={handleLikes}
              removeLike={handleLikes}
              search={search}
            />
          ),
        },
        {
          path: "/:category/:name",
          element: <Single zoo={zoo} />,
        },
        { path: "/about", element: <About /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
