// import { useContext } from "react";
import Logo from "../../assets/LogoLightMode.svg?react";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import "@fontsource/montserrat";
import PropTypes from "prop-types";
import UserSection from "./UserSection/UserSection";

export default function Header({ isUserNeeded = true }) {
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);

  return (
    <>
      <div className={styles.Header}>
        <Logo
          onClick={() => {
            navigate("/");
          }}
          style={{ cursor: "pointer" }}
        />
        {isUserNeeded && (
          <div className={styles.UserSide}>
            <UserSection />
          </div>
        )}
      </div>
    </>
  );
}

Header.propTypes = {
  isUserNeeded: PropTypes.bool,
};
