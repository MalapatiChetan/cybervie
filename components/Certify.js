import Image from "next/image";
import styles from "../styles/Certify.module.css";

const Certify = () => {
  return (
    <div className={`${styles["hero"]}`}>
      <div className={`${styles["box1"]}`}>
        <div className={`${styles["heading-primary"]}`}>
          Earn A Industry Recognized Certificate
        </div>
        <div className={`${styles["success"]}`}>
          <Image
            src="/images/CybervieImages/Wit-part.png"
            alt="Customer photo"
            width="550rem"
            height="100rem"
          />
        </div>
      </div>
      <div className={`${styles["box2"]}`}>
        <div className={`${styles["badge"]}`}>
          <Image
            src="/images/CybervieImages/Badge.png"
            alt="Avocado Salad"
            width="140px"
            height="140px"
          />
        </div>
        <div className={`${styles["certificate"]}`}>
          <Image
            src="/images/CybervieImages/Certificate.png"
            alt="certificate"
            width="770rem"
            height="560rem"
          />
        </div>
      </div>
    </div>
  );
};

export default Certify;
