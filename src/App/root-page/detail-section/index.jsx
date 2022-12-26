import { useMailContext } from "../../../context/mailContext";
import "./style.scss";

// icons
import { MdDelete } from "react-icons/md";

const DetailSection = ({ mailData, type }) => {
  const { inbox, spam, deleted, update_inbox, update_spam, update_delete } =
    useMailContext();

  const handleDelete = () => {
    console.log("clicked ", type);

    if (type === "Inbox") {
      // first let find the index from the array
      let index = null;
      for (let i = 0; i < inbox.length; i++) {
        if (inbox[i].mid === mailData.mid) {
          index = i;
          break;
        }
      }

      update_delete(mailData);
      update_inbox(index);
    }
    if (type === "Spam") {
    }
  };

  return (
    <div className="detail-container">
      {mailData && (
        <>
          {/* this will show the details about sender and receiver */}
          <div className="detail-header">
            {/* about sender and all */}
            <div className="detail-profile">
              <div className="detail-profile-image"></div>
              <div className="detail-profile-sub">
                <h3>{mailData.name}</h3>
                <p className="subject">Please verify your device.</p>
                <p className="to">
                  <span>To : </span> Deepesh Jha
                </p>
              </div>
            </div>

            {/* timings and all */}
            <div className="detail-time-and-delete">
              <p>{mailData.time}</p>
              {type !== "Deleted" ? <MdDelete onClick={handleDelete} /> : <></>}
            </div>
          </div>

          {/* this will show the content of the email */}
          <div className="detail-detail">
            <p>Hey DeepeshKumarJha!</p>
            <p>
              A sign in attempt requires further verification because we did not
              recognize your device. To complete the sign in, enter the
              verification code on the unrecognized device.
            </p>
            <p>Device: Chrome on macOS Verification code: 048803</p>
          </div>
        </>
      )}
    </div>
  );
};

export default DetailSection;
