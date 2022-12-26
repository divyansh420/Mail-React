import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const mailContext = createContext();

const MailContextProvider = ({ children }) => {
  const [inbox, setInbox] = useState([]);
  const [spam, setSpam] = useState([]);
  const [deleted, setDelete] = useState([]);
  const [search, setSearch] = useState(null);

  const value = {
    search,
    inbox,
    spam,
    deleted,
    update_inbox: (index) => {
      setInbox((old) => {
        old.splice(index, 1);
        return [...old];
      });
    },
    update_spam: (index) => {},
    update_delete: (data) => {
      setDelete((old) => {
        old.push(data);
        return [...old];
      });
    },
    update_search: (val) => {
      setSearch(val);
    },
  };

  // this will fetch the data and set it up for the app
  useEffect(() => {
    // like we are fetching from the server
    axios
      .get("/public/data/inbox.json")
      .then((response) => {
        console.log("we have the inbox data");
        setInbox(response.data.length === 0 ? [] : response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("/public/data/spam.json")
      .then((response) => {
        console.log("we have the spam data");
        setSpam(response.data.length === 0 ? [] : response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("/public/data/delete.json")
      .then((response) => {
        console.log("we have the deleted data");
        setDelete(response.data.length === 0 ? [] : response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <mailContext.Provider value={value}>{children}</mailContext.Provider>;
};

const useMailContext = () => {
  return { ...useContext(mailContext) };
};

export { useMailContext, MailContextProvider };
