const Cards = ({ animalsFilter }) => {
  return (
    <main>
      <div className="cards match">
        {animalsFilter.length === 0 ? "No match found!" : animalsFilter}
      </div>
    </main>
  );
};

export default Cards;
