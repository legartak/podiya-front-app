import Logo from "../../assets/LogoLightMode.svg?react";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigator = useNavigate();

  return (
    <>
      <div className={styles.Header}>
        <Logo
          onClick={() => {
            navigator("/");
          }}
          style={{ cursor: "pointer" }}
        />
      </div>
    </>
  );
}
