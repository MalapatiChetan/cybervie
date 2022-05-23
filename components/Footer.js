import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Container, Row, Col, Card } from "react-bootstrap";
import styles from "../styles/Footer.module.css";
import { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <Container className={`${styles["container"]}`}>
        <Row className={`${styles["row"]}`}>
          <Col sm={4}>
            <Card.Body>
              <Card.Title className={`${styles["footer-heading"]}`} as="div">
                Academy
              </Card.Title>
              <ul className={`${styles["footer-nav"]}`}>
                <li className={`${styles["footer-icon-text"]}`}>
                  <Image
                    src="/images/CybervieIcons/Frame-17.png"
                    alt="desktop Logo"
                    width={22}
                    height={22}
                  />
                  <a className={`${styles["footer-link"]}`} href="#">
                    Cyber Security Training Program 2020
                  </a>
                </li>
                <li className={`${styles["footer-icon-text"]}`}>
                  <Image
                    src="/images/CybervieIcons/Frame-18.png"
                    alt="bug Logo"
                    width={22}
                    height={22}
                  />
                  <a className={`${styles["footer-link"]}`} href="#">
                    Events - Ethical Hacking Workshops
                  </a>
                </li>
                <li className={`${styles["footer-icon-text"]}`}>
                  <Image
                    src="/images/CybervieIcons/Frame-19.png"
                    alt="file Logo"
                    width={22}
                    height={22}
                  />
                  <a className={`${styles["footer-link"]}`} href="#">
                    Cyber Security Blog - Knowledge Base
                  </a>
                </li>
              </ul>
            </Card.Body>
          </Col>
          <Col sm={5}>
            <Card.Body>
              <Card.Title className={`${styles["footer-heading"]}`} as="div">
                Academy
              </Card.Title>
              <ul className={`${styles["footer-nav"]}`}>
                <li className={`${styles["footer-icon-text"]}`}>
                  <Image
                    src="/images/CybervieIcons/Frame-13.png"
                    alt="browser Logo"
                    width={22}
                    height={22}
                  />
                  <a className={`${styles["footer-link"]}`} href="#">
                    Web Application Security - VAPT
                  </a>
                </li>
                <li className={`${styles["footer-icon-text"]}`}>
                  <Image
                    src="/images/CybervieIcons/Frame-14.png"
                    alt="shield Logo"
                    width={22}
                    height={22}
                  />
                  <a className={`${styles["footer-link"]}`} href="#">
                    Security As A Service - SAAS
                  </a>
                </li>
                <li className={`${styles["footer-icon-text"]}`}>
                  <Image
                    src="/images/CybervieIcons/Frame-15.png"
                    alt="lock Logo"
                    width={22}
                    height={22}
                  />
                  <a className={`${styles["footer-link"]}`} href="#">
                    Insider Threat Protection
                  </a>
                </li>
                <li className={`${styles["footer-icon-text"]}`}>
                  <Image
                    src="/images/CybervieIcons/Frame-16.png"
                    alt="Server Logo"
                    width={22}
                    height={22}
                  />
                  <a className={`${styles["footer-link"]}`} href="#">
                    Cyber Security Awareness for Employees
                  </a>
                </li>
              </ul>
            </Card.Body>
          </Col>
          <Col sm={2}>
            <Card.Body>
              <Card.Title className={`${styles["footer-heading"]}`} as="div">
                Contact Us
              </Card.Title>
              <ul className={`${styles["footer-nav"]}`}>
                <li className={`${styles["footer-icon-text"]}`}>
                  <Image
                    src="/images/CybervieIcons/Frame-12.png"
                    alt="Mail Logo"
                    width={22}
                    height={22}
                  />
                  <a
                    className={`${styles["footer-link"]}`}
                    href="mailto:info(@)cybervie.com"
                  >
                    info(@)cybervie.com
                  </a>
                </li>
                <li className={`${styles["footer-icon-text"]}`}>
                  <Image
                    src="/images/CybervieIcons/Frame-11.png"
                    alt="Phone Logo"
                    width={22}
                    height={22}
                  />
                  <a
                    className={`${styles["footer-link"]}`}
                    href="tel:415-201-6370"
                  >
                    +91 9000 879 798
                  </a>
                </li>
                <li className={`${styles["footer-icon-text"]}`}>
                  <Image
                    src="/images/CybervieIcons/Frame-11.png"
                    alt="Phone Logo"
                    width={22}
                    height={22}
                  />
                  <a
                    className={`${styles["footer-link"]}`}
                    href="tel:415-201-6370"
                  >
                    +91 9000 879 798
                  </a>
                </li>
                <li className={`${styles["footer-icon-text"]}`}>
                  <Image
                    src="/images/CybervieIcons/Frame-10.png"
                    alt="Headset Logo"
                    width={22}
                    height={22}
                  />
                  <a
                    className={`${styles["footer-link"]}`}
                    href="mailto:info(@)cybervie.com"
                  >
                    Live Support
                  </a>
                </li>
              </ul>
              <div className={`${styles["logo-col"]}`}>
                <ul className={`${styles["social-links"]}`}>
                  <li>
                    <a className={`${styles["footer-link"]}`} href="#">
                      <FontAwesomeIcon
                        icon={faTwitter}
                        className={`${styles["fa-xl"]}`}
                      />
                    </a>
                  </li>
                  <li>
                    <a className={`${styles["footer-link"]}`} href="#">
                      <FontAwesomeIcon
                        icon={faFacebook}
                        className={`${styles["fa-xl"]}`}
                      />
                    </a>
                  </li>
                  <li>
                    <a className={`${styles["footer-link"]}`} href="#">
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className={`${styles["fa-xl"]}`}
                      />
                    </a>
                  </li>
                  <li>
                    <a className={`${styles["footer-link"]}`} href="#">
                      <FontAwesomeIcon
                        icon={faWhatsapp}
                        className={`${styles["fa-xl"]}`}
                      />
                    </a>
                  </li>
                  <li>
                    <a className={`${styles["footer-link"]}`} href="#">
                      <FontAwesomeIcon
                        icon={faYoutube}
                        className={`${styles["fa-xl"]}`}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </Card.Body>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <Card.Body>
              <Card.Title className={`${styles["footer-heading"]}`} as="div">
                Company
              </Card.Title>
              <ul className={`${styles["footer-nav"]}`}>
                <li className={`${styles["footer-icon-text"]}`}>
                  <Image
                    src="/images/CybervieIcons/Frame-9.png"
                    alt="At Logo"
                    width={22}
                    height={22}
                  />
                  <a className={`${styles["footer-link"]}`} href="#">
                    About Us
                  </a>
                </li>
                <li className={`${styles["footer-icon-text"]}`}>
                  <Image
                    src="/images/CybervieIcons/Frame-8.png"
                    alt="Privacy Logo"
                    width={22}
                    height={22}
                  />
                  <a className={`${styles["footer-link"]}`} href="#">
                    Privacy Policy
                  </a>
                </li>
                <li className={`${styles["footer-icon-text"]}`}>
                  <Image
                    src="/images/CybervieIcons/Frame-15.png"
                    alt="Terms Logo"
                    width={22}
                    height={22}
                  />
                  <a className={`${styles["footer-link"]}`} href="#">
                    Terms of Service
                  </a>
                </li>
                <li className={`${styles["footer-icon-text"]}`}>
                  <Image
                    src="/images/CybervieIcons/Frame-7.png"
                    alt="Sitemaps Logo"
                    width={22}
                    height={22}
                  />
                  <a className={`${styles["footer-link"]}`} href="#">
                    Sitemaps
                  </a>
                </li>
                <li className={`${styles["footer-icon-text"]}`}>
                  <Image
                    src="/images/CybervieIcons/Frame-6.png"
                    alt="Career Logo"
                    width={22}
                    height={22}
                  />
                  <a className={`${styles["footer-link"]}`} href="#">
                    Careers
                  </a>
                </li>
              </ul>
            </Card.Body>
          </Col>
          <Col sm={6}>
            <Card.Body>
              <Card.Title className={`${styles["footer-heading"]}`} as="div">
                Office Address
              </Card.Title>
              <ul className={`${styles["footer-nav"]}`}>
                <li className={`${styles["footer-icon-text"]}`}>
                  <Image
                    src="/images/CybervieIcons/Frame-5.png"
                    alt="Arrow Logo"
                    width={22}
                    height={22}
                  />
                  <a className={`${styles["footer-link"]}`} href="#">
                    Hyderabad India 91springBoard, LVS Arcade, Jubilee Enclave,
                    Hitech City, Hyderabad 500081.
                  </a>
                </li>
                <li className={`${styles["footer-icon-text"]}`}>
                  <Image
                    src="/images/CybervieIcons/Frame-5.png"
                    alt="Arrow Logo"
                    width={22}
                    height={22}
                  />
                  <a className={`${styles["footer-link"]}`} href="#">
                    Sydney Australia Cybervie 2/4 eastbourne road homebush west
                    NSW 2140 Australia.
                  </a>
                </li>
                <li className={`${styles["footer-icon-text"]}`}>
                  <Image
                    src="/images/CybervieIcons/Frame-5.png"
                    alt="Arrow Logo"
                    width={22}
                    height={22}
                  />
                  <a className={`${styles["footer-link"]}`} href="#">
                    North Carolina US Cybervie 14621 Jusventus St Charlotte,
                    North Carolina 28277-4117 United States.
                  </a>
                </li>
              </ul>
            </Card.Body>
          </Col>
        </Row>
      </Container>

      <div className={`${styles["copyright"]}`}>
        <a className={`${styles["footer-link"]}`} href="#">
          <p className={`${styles["p"]}`}>
            &copy; 2022 Ionots Technologies Pvt.Ltd | All Rights Reserved
          </p>
        </a>
      </div>
    </Fragment>
  );
};

export default Footer;
