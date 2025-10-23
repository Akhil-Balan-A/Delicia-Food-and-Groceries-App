import { useState } from "react";

const Search = ({onSearch}) => {
  const [searchText, setSearchText] = useState("");
  const handleClear = () => {
    setSearchText("");
    onSearch("");//also clear the filter in main so old view will come
  };
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      handleClear(); // clear on ESC
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
    onSearch(value);//pass value to main
  }

  return (
    <div className="flex-1 min-w-[400px] max-w-full" style={{ position: "relative", width: "100%" }}>
      <input
        className="p-1.5 w-full border-0 rounded-xl outline-none bg-white text-gray-800"
        type="text"
        id="search"
        placeholder="Search for Restaurants, food items"
        value={searchText}
        onChange={handleChange}
        onKeyDown={handleKeyDown} //listen for ESC key
        style={{ width: "100%", paddingRight: "40px" }}
      />
      {searchText !== "" ? <button onClick={handleClear} style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", border: "none", background: "none", cursor: "pointer"}}>❌</button> : null}
    

    </div>
  );
};

export default Search;
