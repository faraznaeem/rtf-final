import React from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";
import About from "./components/About";
import ContactForm from "./components/ContactForm";

const App= () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={ContactForm} />
        <div className="container">
          <Content />
        </div>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
