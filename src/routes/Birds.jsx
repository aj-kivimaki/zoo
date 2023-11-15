const Birds = ({ filterCreatures }) => {
  return (
    <main>
      <div className="page cards match">
        {filterCreatures("birds").length === 0
          ? "No match found!"
          : filterCreatures("birds")}
      </div>
    </main>
  );
};

export default Birds;
