import { Container, Row, Col, Card } from "react-bootstrap";
import { HABIT_BOOK_LINK, NUDGE_BOOK_LINK } from "../articles/LearningSpanish";

export function Home() {
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
          <br />
          <h2>Latest posts</h2>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>
                <a href="/sailinglicence" className="card-link">
                  From zero to skippering sailing boats
                </a>
              </Card.Title>
              <Card.Text>
                Everything you need to be able to become a licenced skipper free
                to rent boats anywhere in the world!
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>
                <a href="/learningspanish" className="card-link">
                  Learning Spanish in my free time
                </a>
              </Card.Title>
              <Card.Text>
                I made learning as easy and automated as possible - by building
                a habit and using defaults.
              </Card.Text>
              <a href={HABIT_BOOK_LINK}>📚 The Power of Habit</a>
              <br></br>
              <a href={NUDGE_BOOK_LINK}>📚 Nudge</a>
              <br></br>
              <a href="https://www.memrise.com/">📱 Memrise</a>
            </Card.Body>
          </Card>
          <br />
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>
                <a href="/spanishslang" className="card-link">
                  Sound like a native
                </a>
              </Card.Title>
              <Card.Subtitle>Spanish Slang</Card.Subtitle>
              <Card.Text>
                Here are some phrases, slang and mild insults you'd only learn
                if you spend time with native speakers.
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
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
