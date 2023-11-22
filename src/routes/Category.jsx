import { useParams } from "react-router-dom";
import Card from "../components/Card";

const Category = ({ zoo, onRemove, addLike, removeLike, search }) => {
  const params = useParams();
  const category = params.category;

  function filterCategory(category) {
    const filteredCategory = zoo[category]
      .filter((elem) =>
        elem.name.toLowerCase().startsWith(search.toLowerCase())
      )
      .map((elem) => (
        <Card
          key={elem.name}
          title={elem.name}
          likes={elem.likes}
          onRemove={() => onRemove(elem.name, category)}
          addLike={() => addLike(elem.name, category, "add")}
          removeLike={() => removeLike(elem.name, category)}
        />
      ));

    return filteredCategory;
  }

  return (
    <main className="page">
      <div className="cards match">
        {filterCategory(category).length === 0
          ? "No match found!"
          : filterCategory(category)}
      </div>
    </main>
  );
};

export default Category;
