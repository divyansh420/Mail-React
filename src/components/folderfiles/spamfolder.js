import React, { useContext } from "react";
import { MailContext } from "../../contextAPI/mailcontext";
const Spam = () => {
  const { spam } = useContext(MailContext);
  return (
    <>
      <ul>
        {spam.map((item) => {
          return (
            <li key={item.mId}>
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

export default Spam;
