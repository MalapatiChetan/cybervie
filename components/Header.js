import { Navbar, Nav, Container, Button } from "react-bootstrap";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
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
                <Image
                  src="/images/CybervieImages/Logo.gif"
                  alt="Web Logo"
                  width={110}
                  height={45}
                />
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className={`${styles["m-auto"]} ${styles["navbar-nav"]}`}>
                <Link className={`${styles["nav-link"]}`} href="/">
                  <a className={`${styles["a"]}`}>Home</a>
                </Link>
                <Link className={`${styles["nav-link"]}`} href="/about">
                  <a className={`${styles["a"]}`}>About Us</a>
                </Link>
                <Link className={`${styles["nav-link"]}`} href="/faq">
                  <a className={`${styles["a"]}`}>FAQ</a>
                </Link>
              </Nav>
              <Nav>
                <Link href="/login">
                  <Button
                    className={`${styles["btn-primary"]} ${styles["btn"]} ${styles["btn--form"]}`}
                    type="button"
                    variant="primary"
                    size="sm"
                  >
                    Login
                  </Button>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </Fragment>
  );
};

export default Header;

//className={`${styles['h3']} ${styles['rounded']} ${styles['section-cards']}`}
//{`${styles['certificate']}`}
//{`${styles['h3']} ${styles['BookNow']}`}
