import { IAuthForm } from "../../types/auth.types";
import { useNavHook } from "../../tools/custom.hooks";
import styles from "../styles/AuthForm.module.css";


// Reusable auth form, can be used for register and login
const AuthForm = ({
  title,
  fields,
  buttonLabel,
  footerText,
  footerLinkLabel,
  onSubmit,
}: IAuthForm) => {
  const { toLogin, toRegister } = useNavHook();
  return (
    <div className={styles.authContainer}>
      <div className={styles.formWrapper}>
        <h2 className={styles.formTitle}>{title}</h2>

        <form className={styles.authForm} onSubmit={onSubmit}>
          {fields.map(({ icon, placeholder, type }, index) => (
            <div className={styles.inputGroup} key={index}>
              <div className={styles.inputField}>
                <div>
                  <img src={icon} alt="icon" width={20} height={20} />
                </div>
                <input
                  type={type}
                  name={placeholder.toLowerCase()}
                  className={type === "password" ? styles.passwordInput : ""}
                  style={type === "password" ? { color: "#474747" } : {}}
                  placeholder={placeholder}
                  autoComplete="off"
                  required
                />
              </div>
            </div>
          ))}

          <button type="submit" className={styles.authButton}>
            {buttonLabel}
          </button>
        </form>

        <div className={styles.footerText}>
          {footerText}
          <span
            onClick={() => {
              //check for the form title and navigate properly
              const formTitle = title.toLowerCase();
              if (formTitle === "login") toRegister();
              else toLogin();
            }}
            className={styles.footerLink}
          >
            {footerLinkLabel}
          </span>
        </div>
      </div>
    </div>
  );
};
export default AuthForm;
