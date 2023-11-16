const Search = ({ onchange }) => {
  return (
    <div className="search">
      <input onChange={onchange} placeholder="search..."></input>
    </div>
  );
};

export default Search;
