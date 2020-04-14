import React from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Services from "./components/Services"

const App= () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={ContactForm} />
        <Route exact path="/services" component={Services} />
        <div className="container">
          <Content />
        </div>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
