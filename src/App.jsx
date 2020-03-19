import React from "react";
import Content from "./components/Content";
import Header from "./components/Header";

import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Content />
      </div>
      <Footer />
    </>
  );
}

export default App;
