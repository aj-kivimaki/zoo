const Animals = ({ creaturesToFilter }) => {
  return (
    <main>
      <div className="page cards match">
        {creaturesToFilter("animals").length === 0
          ? "No match found!"
          : creaturesToFilter("animals")}
      </div>
    </main>
  );
};

export default Animals;
