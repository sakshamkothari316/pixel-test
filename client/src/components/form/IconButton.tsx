import styles from "./styles/IconButton.module.css";

const IconButton = ({
  value = "",
  iconUrl,
  className = "",
}: {
  value?: string;
  iconUrl?: string;
  className?: string;
}) => {
  return (
    <div className={styles.main_container}>
      <button className={`${styles?.[className]}`}>
        {iconUrl && <img src={iconUrl} />}
        {value}
      </button>
    </div>
  );
};

export default IconButton;
