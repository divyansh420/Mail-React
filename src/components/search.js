import { VscSearch } from "react-icons/vsc";
const Search = () => {
  return (
    <div style={{ display: "flex", width: "96%" }}>
      <input
        type="text"
        placeholder="Search mail and people"
        style={{
          outline: "none",
          border: "none",
          background: "#96b7ff75",
          width: "100%",
          padding: "14px",
        }}
      />
      <VscSearch
        style={{ fontSize: "21px", padding: "10px", marginLeft: "-3rem" }}
      />
    </div>
  );
};

export default Search;
