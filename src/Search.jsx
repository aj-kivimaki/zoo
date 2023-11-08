const Search = ({ search }) => {
  return (
    <>
      <input onChange={search} name="search" placeholder="search..."></input>
    </>
  );
};

export default Search;
