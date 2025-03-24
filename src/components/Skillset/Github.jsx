<<<<<<< HEAD
import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

const Github = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="yellow">Code</strong>
      </h1>
      <GitHubCalendar
        username="tamilselvanrangasamy"
        blockSize={15}
        blockMargin={5}
        color="#6102ce"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
=======
import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

const Github = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="yellow">Code</strong>
      </h1>
      <GitHubCalendar
        username="tamilselvanrangasamy"
        blockSize={15}
        blockMargin={5}
        color="#6102ce"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
>>>>>>> ee239e5ab2e4926d984648b0082eaf34d6254363
