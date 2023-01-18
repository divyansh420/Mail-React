import { CiMail } from "react-icons/ci";
const Empty = () => {
  return (
    <div
      style={{
        position: "relative",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      }}
    >
      <div className="empty">
        {" "}
        <CiMail style={{ fontSize: "15rem" }} />
        select an item to read
      </div>
    </div>
  );
};

export default Empty;
