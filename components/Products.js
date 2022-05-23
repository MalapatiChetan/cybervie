import products from "../public/products";
import { Row, Col } from "react-bootstrap";
import ProductItem from "./ProductItem";
import styles from "../styles/product.module.css";
import { Fragment } from "react";

const Products = ({ product }) => {
  return (
    <Fragment>
      <div className={`${styles["container"]} ${styles["center-text"]}`}>
        <h2 className={`${styles["heading-secondary"]}`}>
          Upcoming Live Bootcamps
        </h2>
      </div>
      <Row className={`${styles["row"]}`}>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <ProductItem product={product} />
          </Col>
        ))}
      </Row>
    </Fragment>
  );
};

export default Products;

//sm={12} md={6} lg={4} xl={3}
