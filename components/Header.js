import { Navbar, Nav, Container, Button } from "react-bootstrap";
import Link from "next/link";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <>
      <header>
        <Navbar
          className={styles.navbar}
          bg="light"
          expand="lg"
          collapseOnSelect
        >
          <Container>
            <Link href="/">
              <Navbar.Brand className={`${styles["navbar-brand"]}`} href="/">
                CYBERVIE
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className={`${styles["m-auto"]} ${styles["navbar-nav"]}`}>
                <Link href="/">
                  <Nav.Link className={`${styles["nav-link"]}`} href="/">
                    Home
                  </Nav.Link>
                </Link>
                <Link href="/About">
                  <Nav.Link className={`${styles["nav-link"]}`} href="/About">
                    About Us
                  </Nav.Link>
                </Link>
                <Link href="/Faq">
                  <Nav.Link className={`${styles["nav-link"]}`} href="/Faq">
                    FAQ
                  </Nav.Link>
                </Link>
              </Nav>
              <Nav>
                <Button
                  className={`${styles["btn-primary"]} ${styles["btn"]} ${styles["btn--form"]}`}
                  href="/Login"
                  type="button"
                  variant="primary"
                  size="sm"
                >
                  Login
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;

//className={`${styles['h3']} ${styles['rounded']} ${styles['section-cards']}`}
//{`${styles['certificate']}`}
//{`${styles['h3']} ${styles['BookNow']}`}
