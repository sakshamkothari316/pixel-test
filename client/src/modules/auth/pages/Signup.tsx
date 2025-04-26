import styles from "../styles/Signup.module.css";
import signupBgImg from "../../../assets/images/signupBgImg.svg";
import signupLogo from "../../../assets/images/signupLogo.svg";
import Input from "../../../components/form/Input";
import IconButton from "../../../components/form/IconButton";

const Signup = () => {
  return (
    <main className={styles.main_container}>
      <div className={styles.signup_card}>
        <div className={styles.signup_card__img}>
          <img src={signupBgImg} alt="signup" loading="lazy" decoding="async" />
          <div className={styles.img_mask}></div>
        </div>
        <div className={styles.signup_card__content}>
          <div className={styles.content_img}>
            <img
              src={signupLogo}
              alt="signup"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className={styles.content_title}>
            <p>Create an account</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              tempore! Lorem, ipsum. Lorem, ipsum.
            </p>
          </div>
          <div className={styles.content_elements}>
            <Input placeholder="Full Name" />
            <Input placeholder="Phone Number" />
          </div>
          <div className={styles.content_agreement}>
            <input
              type="checkbox"
              className={styles.content_agreement__checkbox}
            />
            <p>
              You have agreed to Speedo Prime <span>Privacy Policy</span>,
              <span>Rules and Regulation</span>, that you will abide by all the
              internal updates and policies of the platform.
            </p>
          </div>
          <div className={styles.content_action_btn}>
            <IconButton value="Verify Account" />
            <div className={styles.content_action_btn__login}>
              <span>Already have account?</span>
              <span>Login</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
