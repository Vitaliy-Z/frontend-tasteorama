import Lottie from "lottie-react";
import notFoundAnimation from "./Animation - 1751022171222.json";
import styles from "./NotFound.module.css";
const NotFound = () => {
  return (
    <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
      <Lottie
        animationData={notFoundAnimation}
        loop={true}
        style={{ height: 300 }}
      />
      <h2 className={styles.notfoundtitle}>Not found</h2>
    </div>
  );
};

export default NotFound;
