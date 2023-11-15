const Animals = ({ animalsFilter }) => {
  return (
    <main>
      <div className="page cards match">
        {animalsFilter.length === 0 ? "No match found!" : animalsFilter}
      </div>
    </main>
  );
};

export default Animals;
