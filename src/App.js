import "./App.css";
import { NavBar } from "./Navbar";
import { Page } from "./Content";
import { LearningSpanishPage } from "./articles/LearningSpanish";
import { Home } from "./homepage/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SpanishSlangPage } from "./articles/SpanishSlang";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router className="body">
        <div>
          <Switch>
            <Route path="/spanishslang">
              <SpanishSlangPage />
            </Route>
            <Route path="/learningspanish">
              <LearningSpanishPage />
            </Route>
            <Route path="/about">
              <About />
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

function About() {
  return (
    <Page heading="About">
      <p>Hi, I'm Manoj.</p>
      <p>
        This blog takes a lot of inspiration from{" "}
        <a href="https://brianlovin.com/">brianlovin.com</a>. You can checkout
        all my code on my <a href="https://github.com/ma581">Github</a>.
      </p>
      <p>
        🐦 You can also follow me on{" "}
        <a href="https://twitter.com/mshokk">Twitter</a>.
      </p>
    </Page>
  );
}

export default App;
