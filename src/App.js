import './App.css';
import { NavBar } from './Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <div>
          <Switch>
            <Route path="/articles">
              <Articles />
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

function Home() {
  return <h1>Welcome!</h1>

}

function Articles() {
  return <h2>Articles</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}


export default App;
