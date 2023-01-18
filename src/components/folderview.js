import React from "react";
import Inbox from "./folderfiles/inboxfolder";
import Deleted from "./folderfiles/deletedfolder";
import Archive from "./folderfiles/archivefolder";
import Sent from "./folderfiles/sentfolder";
import Spam from "./folderfiles/spamfolder";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const FolderView = () => {
  return (
    <div
      style={{
        width: "30%",
        minWidth: "30%",
        borderRight: "2px solid #cdcdcdba",
        padding: "15px",
      }}
    >
      <Routes>
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/deleted" element={<Deleted />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/sent" element={<Sent />} />
        <Route path="/spam" element={<Spam />} />
      </Routes>
    </div>
  );
};

export default FolderView;
