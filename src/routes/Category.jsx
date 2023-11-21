const Category = ({ filterCreatures, creature }) => {
  return (
    <main>
      <div className="page cards match">
        {filterCreatures(creature).length === 0
          ? "No match found!"
          : filterCreatures(creature)}
      </div>
    </main>
  );
};

export default Category;