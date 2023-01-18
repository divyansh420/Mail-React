import Search from "../components/search";
import React, { useContext, useState } from "react";
import { MailContext } from "../contextAPI/mailcontext";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { folders } = useContext(MailContext);
  const [isopen, setIsOpen] = useState(false);

  function openFolders() {
    setIsOpen(!isopen);
  }
  return (
    <div className="sidebar">
      <Search />
      <div className="folder-items">
        <h5>
          <IoIosArrowUp
            style={{
              fontSize: "25px",
              padding: "0 5px",
              transform: `${isopen ? "rotate(180deg)" : "rotate(0)"}`,
              transition: "ease-in-out 200ms",
            }}
            onClick={openFolders}
          />
          folders
        </h5>
        <ul
          style={{
            height: `${isopen ? "0" : "15rem"}`,
          }}
        >
          {folders.map((folder, index) => {
            return (
              <Link key={index} to={`./${folder.title}`}>
                <li>
                  {folder.title} {folder.length}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
