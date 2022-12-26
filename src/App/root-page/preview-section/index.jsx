import { useState } from "react";
import { useMailContext } from "../../../context/mailContext";
import DetailSection from "../detail-section";
import "./style.scss";

const PreviewSection = ({ selected }) => {
  const { inbox, spam, deleted, search } = useMailContext();
  const [data, setData] = useState(null);

  // find the unread messages
  let unread = 0;

  if (selected === "Inbox") {
    inbox.forEach((element) => {
      if (element.unread) {
        unread += 1;
      }
    });
  } else if (selected === "Spam") {
    spam.forEach((element) => {
      if (element.unread) {
        unread += 1;
      }
    });
  }

  const handleClick = (data) => {
    setData(data);
  };

  const mapFun = (data, index) => {
    return (
      <li
        key={index}
        className="preview-list-item"
        onClick={() => {
          handleClick(data);
        }}
      >
        <h3>{data.name}</h3>
        <p className="pli-subject">{data.subject}</p>
        <p className="pli-content">{data.content.slice(0, 100) + "..."}</p>
      </li>
    );
  };

  return (
    <>
      <div className="preview-section-container">
        <div className="preview">
          <h2>
            {selected} <span>Unread : {unread}</span>
          </h2>

          <ul>
            {selected === "Inbox" &&
              inbox
                .filter((data) => {
                  if (search) {
                    if (
                      data.name.toLowerCase().indexOf(search.toLowerCase()) ===
                      -1
                    ) {
                      return false;
                    } else {
                      return true;
                    }
                  } else {
                    return true;
                  }
                })
                .map(mapFun)}
            {selected === "Spam" &&
              spam
                .filter((data) => {
                  if (search) {
                    if (
                      data.name.toLowerCase().indexOf(search.toLowerCase()) ===
                      -1
                    ) {
                      return false;
                    } else {
                      return true;
                    }
                  } else {
                    return true;
                  }
                })
                .map(mapFun)}
            {selected === "Deleted" &&
              deleted
                .filter((data) => {
                  if (search) {
                    if (
                      data.name.toLowerCase().indexOf(search.toLowerCase()) ===
                      -1
                    ) {
                      return false;
                    } else {
                      return true;
                    }
                  } else {
                    return true;
                  }
                })
                .map(mapFun)}
          </ul>
        </div>
      </div>
      <DetailSection mailData={data} type={selected} />
    </>
  );
};

export default PreviewSection;
