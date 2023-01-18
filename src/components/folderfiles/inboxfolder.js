import React, { useContext } from "react";
import { MailContext } from "../../contextAPI/mailcontext";
const Inbox = () => {
  const { inbox } = useContext(MailContext);
  const { Changedisplaydata, changeView } = useContext(MailContext);
  return (
    <>
      <ul>
        {inbox.map((item) => {
          return (
            <li
              key={item.mId}
              index={item.mId}
              onClick={() => {
                Changedisplaydata(item);
                changeView();
              }}
            >
              <p style={{ color: "rgb(24, 119, 227)" }}>{item.subject}</p>
              <p className="list-element">{item.content}</p>
              <p></p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Inbox;
