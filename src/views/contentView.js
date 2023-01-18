import FolderView from "../components/folderview";
import DataView from "../components/dataview";
import Layout from "../components/layout";

const ContentView = () => {
  return (
    <div className="content-view" style={{ flexGrow: "1" }}>
      <header></header>
      <Layout>
        <FolderView />
        <DataView />
      </Layout>
    </div>
  );
};

export default ContentView;
