import Empty from "./emptyfolder";
import React, { useContext } from "react";
import { MailContext } from "../contextAPI/mailcontext";

const DataView = () => {
  const { displayData, changeView } = useContext(MailContext);
  return (
    <div style={{ flexGrow: "1" }}>
      {!changeView ? (
        <Empty />
      ) : (
        <div>
          {" "}
          <p>{displayData.subject}</p>
          <p>{displayData.content}</p>
        </div>
      )}
    </div>
  );
};

export default DataView;
