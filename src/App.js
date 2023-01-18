import Navbar from "./components/navbar";
import "./App.css";
import Sidebar from "./views/sidebar";
import Layout from "./components/layout";
import { MailContextProvider } from "./contextAPI/mailcontext";
import ContentView from "./views/contentView";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <MailContextProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Layout>
            <Sidebar />
            <ContentView />
          </Layout>
        </div>
      </Router>
    </MailContextProvider>
  );
}

export default App;
