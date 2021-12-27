import "./App.css";
import { NavBar } from "./Navbar";
import { Page } from "./Content";
import { LearningSpanishPage } from "./articles/LearningSpanish";
import { Home } from "./homepage/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SpanishSlangPage } from "./articles/SpanishSlang";
import { SailingLicence } from "./articles/SailingLicence";
export const API_URL = "https://api.mkurien.com";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router className="body">
        <div>
          <Switch>
            <Route path="/sailinglicence">
              <SailingLicence />
            </Route>
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
        I'm an engineer and I love learning and problem solving. Here, I share
        some things I've enjoyed learning. This blog takes a lot of inspiration
        from <a href="https://brianlovin.com/">brianlovin.com</a>.
      </p>
      <div>
        Icons made by{" "}
        <a href="https://www.freepik.com" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
      <p>
        🐦 You can also follow me on{" "}
        <a href="https://twitter.com/mshokk">Twitter</a>.
      </p>
    </Page>
  );
}

export default App;
