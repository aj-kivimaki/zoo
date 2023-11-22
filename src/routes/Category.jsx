import { useParams } from "react-router-dom";

const Category = ({ filterCreatures, creature }) => {
  const params = useParams();
  const category = params.category;
  // console.log(category);

  return (
    <main className="page">
      <div className="cards match">
        {filterCreatures(creature).length === 0
          ? "No match found!"
          : filterCreatures(creature)}
      </div>
    </main>
  );
};

export default Category;
