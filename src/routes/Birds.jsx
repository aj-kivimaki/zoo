const Birds = ({ creaturesToFilter }) => {
  return (
    <main>
      <div className="page cards match">
        {creaturesToFilter("birds").length === 0
          ? "No match found!"
          : creaturesToFilter("birds")}
      </div>
    </main>
  );
};

export default Birds;
