import { Card } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/product.module.css";

const ProductItem = ({ product }) => {
  return (
    <Card className={`${styles["my-3"]} ${styles["section-cards"]}`}>
      <Card.Img src={product.image} variant="top" />
      <Card.Body className={`${styles["card-body"]}`}>
        <div className={`${styles["card-tags"]}`}>
          <span className={`${styles["tag"]} ${styles["tag--vegan"]}`}>
            <span>
              <Image
                src="/images/CybervieIcons/Frame-25.png"
                alt="Calender Logo"
                width={22}
                height={22}
              />
            </span>
            <span>
              <Card.Text className={`${styles["h3"]}`} as="h3">
                {product.date}
              </Card.Text>
            </span>
          </span>

          <span className={`${styles["tag"]} ${styles["tag--vegan"]}`}>
            <span>
              <Image
                src="/images/CybervieIcons/Frame-24.png"
                alt="Calender Logo"
                width={22}
                height={22}
              />
            </span>
            <span>
              <Card.Text className={`${styles["h3"]}`} as="h3">
                {product.time}
              </Card.Text>
            </span>
          </span>
        </div>
        <Card.Title className={`${styles["card-title"]}`} as="div">
          <strong>{product.name}</strong>
        </Card.Title>
        <Card.Text as="div">
          <div className={`${styles["my-3"]} ${styles["card-description"]}`}>
            {product.description}
          </div>
        </Card.Text>
        <div className={`${styles["card-tags"]}`}>
          <span className={`${styles["tag"]} ${styles["tag--paleo"]}`}>
            <span>
              <Image
                src="/svg/rupee.svg"
                alt="rupee Logo"
                width={30}
                height={28}
              />
            </span>
            <span>
              <Card.Text
                className={`${styles["h3"]} ${styles["Price"]}`}
                as="h3"
              >
                {product.price}
              </Card.Text>
            </span>
          </span>

          <span className={`${styles["tag"]} ${styles["tag--Book"]}`}>
            <span>
              <Link href="/">
                <Card.Link
                  className={`${styles["h3"]} ${styles["BookNow-link"]}`}
                  as="h3"
                >
                  Book Now
                </Card.Link>
              </Link>
            </span>
            <span>
              <Image
                src="/svg/Arrow.svg"
                alt="Arrow Logo"
                width={70}
                height={22}
              />
            </span>
          </span>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductItem;
