import { Container, Row, Col } from "react-bootstrap";
import Feedback from "./components/Feedback";
import { Footer } from "./components/Footer";

export function Page(props) {
  return (
    <>
      <Container>
        <Row>
          <br></br>
          <br></br>
        </Row>
        <Col>
          <div>{props.children}</div>
        </Col>
        <Row>
          <br></br>
          <br></br>
        </Row>
      </Container>
    </>
  );
}

export function Article(props) {
  return (
    <>
      <Row>
        <h1>{props.heading}</h1>
        <h5 className="light">{props.date ? props.date : today()}</h5>
        <br />
        <div>{props.children}</div>
      </Row>
      <Row>
        <Feedback />
      </Row>
      <Row>
        <Footer title={props.heading} />
      </Row>
    </>
  );
}

function today() {
  const todayDate = new Date();
  return `${getMonthNameShort(
    todayDate
  )} ${new Date().getDate()}, ${new Date().getFullYear()}`;
}

const getMonthNameShort = (date) => monthShortNames[date.getMonth()];

const monthShortNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
