import Header from "../components/Header";
import Reasons from "../components/Reasons";
import Products from "../components/Products";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Certify from "../components/Certify";

import Head from "next/head";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Cybervie Training Program</title>
        <meta name="description" content="Cybervie Courses" />
      </Head>
      <Header />
      <Hero />
      <Products />
      <Reasons />
      <Certify />
      <Footer />
    </Fragment>
  );
}
