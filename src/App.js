import "./App.css";
import { NavBar } from "./Navbar";
import { Content } from "./Content";
import { LearningSpanish } from "./articles/LearningSpanish";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container, Row, Col, Image, Card } from "react-bootstrap";

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
          <p>
            I love learning and tech and here I share some of my interests.
            Mostly, it's just me having fun tinkering with tech 😉.
          </p>
          <h2>Latest posts</h2>
          <a href="/articles" className="card-link">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Learning Spanish in my free time</Card.Title>
                <Card.Text>
                  Learn how I automated learning and some slang used everday to
                  make you sound like a native and understand daily
                  conversation.
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
          <br />
          <h2>Coming Soon</h2>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>
                <a>Learning Dutch in the streets</a>
              </Card.Title>
              <Card.Subtitle>Coming soon!</Card.Subtitle>
              <Card.Text>
                La peque on how she learnt Dutch. Checkout the Podcast (coming
                soon!)
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>
                <a>French in Paris</a>
              </Card.Title>
              <Card.Subtitle>Coming soon!</Card.Subtitle>
              <Card.Text>Rene's tips on how he learnt French.</Card.Text>
            </Card.Body>
          </Card>
          <br />
          <h2>Interesting links</h2>
          <p className="">
            These are early days so have a look instead at these interesting
            stuff!
          </p>
          {/* <ul styles={{ "list-style": "none" }}> */}
          <a href="http://www.milliondollarhomepage.com">
            ❤️ Million Dollar Idea
          </a>{" "}
          - a piece of internet history. The owner made a million dollars by
          selling each pixel on the website for $1.
          {/* </ul> */}
        </Col>
        <Col xs={1}></Col>
      </Row>
    </Container>
  );
}

function Articles() {
  return <LearningSpanish />;
}

function Contact() {
  return (
    <Content heading="Contact">
      <a href="https://twitter.com/mshokk">🐦 Tweet me</a>
    </Content>
  );
}

export default App;
