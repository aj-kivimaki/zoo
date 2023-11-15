const Animals = ({ filterCreatures }) => {
  return (
    <main>
      <div className="page cards match">
        {filterCreatures("animals").length === 0
          ? "No match found!"
          : filterCreatures("animals")}
      </div>
    </main>
  );
};

export default Animals;
