import { Container, Row, Col } from "react-bootstrap"

export function Content(props) {
    return (<>
        <Container>
            <Row>
                <Col xs={1}></Col>
                <Col xs={10}>
                    <h1 className="header">{props.heading}</h1>
                    <div>
                        {props.children}
                    </div>
                </Col>
                <Col xs={1}></Col>
            </Row>
        </Container>
    </>)
}