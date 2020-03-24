import React from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";
import About from "./components/About";

const App= () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/about" component={About} />
        <div className="container">
          <Content />
        </div>
        <Footer />
      </Switch>
    </>
  );
}

export default App;
