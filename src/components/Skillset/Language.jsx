import { Col, Row } from "react-bootstrap";

const Language = () => {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="lan-icons">
                <h4>Tamil</h4>
            </Col>
            <Col xs={4} md={2} className="lan-icons">
                <h4>English</h4>
            </Col>
            <Col xs={4} md={2} className="lan-icons">
                <h4>Japanese</h4>
            </Col>

        </Row>
    );
}

export default Language;
