import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh"}}>

        <Nav />
        <div style={{ flex: 1 }}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/projects/:id" component={Detail} />
          <Route exact path="/projects/issues" component={Detail} />
          <Route exact path="/projects/issues/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
        </div>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
