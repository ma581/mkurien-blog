import './App.css';
import { NavBar } from './Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router className="body">
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
  return (
    <Container>
      <Row>
        <Col xs={1}></Col>
        <Col xs={10}>
          <h1 className="header">Welcome!</h1>
          <p className="">These are early days so have a look instead at these interesting articles!</p>
          {/* <ul styles={{ "list-style": "none" }}> */}
            <a href="aliabdaal.com">Ali Abdaal's blog</a> - productivity, youtubing etc
          {/* </ul> */}
        </Col>
        <Col xs={1}></Col>
      </Row>
    </Container>
  )
}

function Articles() {
  return (<Article />);
}

function Article() {
  return (<>
    <Container>
      <Row>
        <Col xs={1}></Col>
        <Col xs={10}>
          <h2 className="header"  >How I learnt Spanish in my free time </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Col>
        <Col xs={1}></Col>
      </Row>
    </Container>
  </>)
}


function Contact() {
  return <h2 className="App-header">Contact</h2>;
}


export default App;
