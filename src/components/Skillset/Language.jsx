import { IN, US } from "country-flag-icons/react/1x1";
import { JP } from "country-flag-icons/react/3x2";
import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiVisualstudiocode,
    SiPostman,
    SiVercel,
    SiNetlify,
    SiGit
} from "react-icons/si";

const Language = () => {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="lan-icons">
                {/* <IN/> */}
                <h4>Tamil</h4>
            </Col>
            <Col xs={4} md={2} className="lan-icons">
                {/* <US/> */}
                <h4>English</h4>
            </Col>
            <Col xs={4} md={2} className="lan-icons">
                {/* <SiPostman /> */}
                {/* <JP/> */}
                <h4>Japanese</h4>
            </Col>

        </Row>
    );
}

export default Language;
