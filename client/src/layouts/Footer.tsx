import styles from "./styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.main_container}>
      <div className={styles.main_container__border}></div>
      <div>© 2025 Speedo Prime. All Rights Reserved.</div>
      <div>
        <span>Terms Of Use</span>
        <span>Privacy</span>
        <span>Policy</span>
        <span>FAQ</span>
      </div>
    </footer>
  );
};

export default Footer;
