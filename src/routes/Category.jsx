import { useParams } from "react-router-dom";

const Category = ({ filterCreatures, creature }) => {
  const params = useParams();
  const category = params.category;
  console.log(category);

  // console.log(category);

  /* function filterCreatures(creatures) {
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
          category={creatures} //search handler
        />
      ));
    return filteredCreatures;
  } */

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
