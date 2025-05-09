import { logoApeSpatula } from "../assets/image-icons-barrel";
import { useNavHook } from "../tools/custom.hooks";
import CopyrightFooter from "./layout/CopyRightFooter";
import styles from "./styles/Landing.module.css";

//landing page
const Landing = () => {
  const { toLogin, toRegister } = useNavHook();
  return (
    <div className={styles.landingContainer}>
      <div className={styles.titleContainer}>
        <h1 className={styles.mainTitle}>SilverBack Kitchen</h1>
        <p className={styles.slogan}>Prepped and Primed. Now, time him cook</p>
      </div>

      <div className={styles.logoContainer}>
        <div className={styles.logoWrapper}>
          <img
            src={logoApeSpatula}
            alt="SilverBack Kitchen Logo"
            className={styles.logoImage}
            loading="lazy"
          />
        </div>
      </div>

      <button className={styles.guideButton}>
        <span className={styles.buttonText}>
          Click here for <br /> a Quick Guide
        </span>
      </button>

      <div className={styles.authOptions}>
        <span onClick={toRegister} className={styles.authLink}>
          Sign up now
        </span>{" "}
        <span className={styles.orText}>or</span>{" "}
        <span onClick={toLogin} className={styles.authLink}>
          Go to Login
        </span>
      </div>

      <div style={{ marginTop: 70 }}>
        <CopyrightFooter />
      </div>
    </div>
  );
};
export default Landing;
