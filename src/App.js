import "./App.css";
import { NavBar } from "./Navbar";
import { Content } from "./Content";
import { LearningSpanish } from "./articles/LearningSpanish";
import { Home } from "./homepage/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SpanishSlang } from "./articles/SpanishSlang";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router className="body">
        <div>
          <Switch>
            <Route path="/spanishslang">
              <SpanishSlang />
            </Route>
            <Route path="/learningspanish">
              <LearningSpanish />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

function Contact() {
  return (
    <Content heading="Contact">
      <a href="https://twitter.com/mshokk">🐦 Tweet me</a>
    </Content>
  );
}

export default App;
