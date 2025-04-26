import styles from "./styles/Input.module.css";

const Input = ({
  placeholder = "",
  value = "",
}: {
  placeholder?: string;
  value?: string;
}) => {
  return (
    <div className={styles.main_container}>
      <input placeholder={placeholder} value={value} />
    </div>
  );
};

export default Input;
