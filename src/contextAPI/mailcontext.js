import React, { createContext, useState, useEffect } from "react";
import inboxdata from "../data/1_inbox .json";
import spamdata from "../data/1_spam.json";
// create context
const MailContext = createContext();

const MailContextProvider = ({ children }) => {
  // the value that will be given to the context
  const [inbox, setInbox] = useState(inboxdata);
  const [spam, setSpam] = useState(spamdata);
  const [displayData, setDisplaydata] = useState({});
  const [view, setview] = useState(false);
  const Changedisplaydata = (value) => {
    setDisplaydata(value);
  };
  const changeView = () => {
    setview(true);
  };

  const [folders, setFolders] = useState([
    { title: "inbox", length: inbox.length },
    { title: "sent", length: "" },
    { title: "spam", length: "" },
    { title: "deleted", length: "" },
    { title: "archive", length: "" },
  ]);

  //   const [user, setUser] = useState({});
  //   const [data, setData] = useState([]);
  //   const changeUser = (value) => {
  //     setUser(value);
  //   };

  //   function fetchData() {
  //     fetch("data/1_inbox.json")
  //       .then((res) => res.json())
  //       .then((res) => setData(res.users))
  //       .catch((error) => console.log(error));
  //   }
  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  return (
    // the Provider gives access to the context to its children
    <MailContext.Provider
      value={{
        folders,
        setFolders,
        inbox,
        setInbox,
        spam,
        Changedisplaydata,
        displayData,
        changeView,
      }}
    >
      {children}
    </MailContext.Provider>
  );
};
export { MailContext, MailContextProvider };
