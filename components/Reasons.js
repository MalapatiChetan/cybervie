import Image from "next/image";
import { Container, Row, Col, Card } from "react-bootstrap";
import styles from "../styles/Reasons.module.css";

const Reasons = () => {
  return (
    <Container className={`${styles["container"]}`}>
      <h2 className={`${styles["heading-secondary"]} ${styles["center-text"]}`}>
        Top Reasons To Join
      </h2>
      <Row className={`${styles["row"]}`}>
        <Col sm>
          <Card.Body>
            <div className={`${styles["reason-image"]}`}>
              <Image
                src="/images/CybervieIcons/Frame-23.png"
                alt="Calender Logo"
                width={37}
                height={37}
              />
            </div>
            <Card.Title className={`${styles["reason-title"]}`} as="div">
              <strong>Live Industry Projects</strong>
            </Card.Title>
            <Card.Text as="div">
              <div
                className={`${styles["my-3"]} ${styles["reason-description"]}`}
              >
                We Provide Our Students With Hands-On Tasks And Practical
                Experience With The Help Of Daily Assignments And Live Industry
                Projects.
              </div>
            </Card.Text>
          </Card.Body>
        </Col>
        <Col sm={2}></Col>
        <Col sm>
          {" "}
          <Card.Body>
            <div className={`${styles["reason-image"]}`}>
              <Image
                src="/images/CybervieIcons/Frame-22.png"
                alt="Calender Logo"
                width={37}
                height={37}
              />
            </div>
            <Card.Title className={`${styles["reason-title"]}`} as="div">
              <strong>Career Opportunities</strong>
            </Card.Title>
            <Card.Text as="div">
              <div
                className={`${styles["my-3"]} ${styles["reason-description"]}`}
              >
                Career Oppurtunities For Students Right From Providing Help In
                Resume Building, Skill Development, Liaising With The Recruiters
                Through Live Projects And Interactive Sessions.
              </div>
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
      <Row className={`${styles["row"]}`}>
        <Col sm>
          {" "}
          <Card.Body>
            <div className={`${styles["reason-image"]}`}>
              <Image
                src="/images/CybervieIcons/Frame-21.png"
                alt="Calender Logo"
                width={37}
                height={37}
              />
            </div>
            <Card.Title className={`${styles["reason-title"]}`} as="div">
              <strong>100%-Course Completion</strong>
            </Card.Title>
            <Card.Text as="div">
              <div
                className={`${styles["my-3"]} ${styles["reason-description"]}`}
              >
                All Of Our Students Have Shown Faith In Our Teaching By
                Completing The Course. This Highlights The Efforts And
                Dedication Put In By CYBERVIE To Create CyberSecurity Leaders.
              </div>
            </Card.Text>
          </Card.Body>
        </Col>
        <Col sm={2}></Col>
        <Col sm>
          {" "}
          <Card.Body>
            <div className={`${styles["reason-image"]}`}>
              <Image
                src="/images/CybervieIcons/Frame-20.png"
                alt="Calender Logo"
                width={37}
                height={37}
              />
            </div>
            <Card.Title className={`${styles["reason-title"]}`} as="div">
              <strong>Networking Oppurtunities</strong>
            </Card.Title>
            <Card.Text as="div">
              <div
                className={`${styles["my-3"]} ${styles["reason-description"]}`}
              >
                Students Get Strong Networking Opportunities During The Time Of
                The Course With Industry Practitioners And Alumni Of Cybervie
                Through Seminars And Training Sessions.
              </div>
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Container>
  );
};

export default Reasons;
