import DetailSection from "./detail-section";
import PreviewSection from "./preview-section";
import "./style.scss";

// icons
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useMailContext } from "../../context/mailContext";

const sectionList = ["Inbox", "Spam", "Deleted", "Custom"];

const RootPage = () => {
  // this will tell us about which section is selecteds
  const [selected, setSelected] = useState("Inbox");
  const { update_search } = useMailContext();

  const handleSectionClick = (event) => {
    setSelected(event.target.innerText);
  };

  const handleChange = (e) => {
    update_search(e.target.value);
  };

  return (
    <div>
      <div className="root-header">
        <h1>Outlook</h1>
        <div className="search-and-profile-container">
          <div className="input-section">
            <AiOutlineSearch />
            <input onChange={handleChange}></input>
          </div>
          <div className="profile-image"></div>
        </div>
      </div>

      <div className="folder-container">
        <div className="folder-section">
          <h2>Folder</h2>
          <ul>
            {sectionList.map((data, index) => {
              return (
                <li
                  key={index}
                  onClick={handleSectionClick}
                  style={data === selected ? { background: "#0b2e4a" } : {}}
                >
                  {data}
                </li>
              );
            })}
          </ul>
        </div>

        {/* outlet sction */}
        <PreviewSection selected={selected} />
      </div>
    </div>
  );
};

export default RootPage;
