import styles from "../styles/Hero.module.css";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
const Hero = () => {
  return (
    <Container className={`${styles["container"]}`}>
      <Row>
        <Col md={{ span: 5, offset: 1 }}>
          <h1 className={`${styles["heading-primary"]}`}>
            A Top-Notch training program from CYBERVIE
          </h1>
        </Col>
      </Row>

      <Row>
        <Col md={{ span: 4, offset: 1 }}>
          <h1 className={`${styles["hero-description"]}`}>
            Spend your time wisely by skilling up and accelerate your career to
            the next level.
          </h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
