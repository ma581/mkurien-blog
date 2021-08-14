import { Container, Row, Col } from "react-bootstrap";

export function Content(props) {
  return (
    <>
      <Container>
        <Row>
          <Col xs={1}></Col>
          <Col xs={10}>
            <h1>{props.heading}</h1>
            <h5 className="light">{props.date ? props.date : today()}</h5>
            <br />
            <div>{props.children}</div>
          </Col>
          <Col xs={1}></Col>
        </Row>
      </Container>
    </>
  );
}

function today() {
  return `${new Date().getMonthNameShort()} ${new Date().getDate()}, ${new Date().getFullYear()}`;
}

Date.prototype.getMonthName = function (lang) {
  lang = lang && lang in Date.locale ? lang : "en";
  return Date.locale[lang].month_names[this.getMonth()];
};

Date.prototype.getMonthNameShort = function (lang) {
  lang = lang && lang in Date.locale ? lang : "en";
  return Date.locale[lang].month_names_short[this.getMonth()];
};

Date.locale = {
  en: {
    month_names: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    month_names_short: [
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
    ],
  },
};
