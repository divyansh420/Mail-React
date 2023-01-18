const Layout = ({ children }) => {
  return (
    <div style={{ display: "flex", width: "100%", flexGrow: "1" }}>
      {children}
    </div>
  );
};

export default Layout;
