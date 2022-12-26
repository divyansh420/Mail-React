import { Outlet } from "react-router-dom";
import RootPage from "./root-page";

import "./style.scss";

const App = () => {
  return (
    <div className="main-container">
      <RootPage />
    </div>
  );
};

export default App;
