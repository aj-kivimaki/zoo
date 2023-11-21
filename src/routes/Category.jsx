const Category = ({ filterCreatures, creature }) => {
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
