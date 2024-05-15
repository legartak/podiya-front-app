import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import styles from "./UserSection.module.css";

export default function UserSection() {
  const navigate = useNavigate();
  const { token, logout } = useContext(AuthContext);

  return (
    <>
      <div
        className={styles.UserCard}
        onClick={
          token
            ? () => {
                logout();
                navigate("/");
              }
            : () => navigate("/login")
        }
      >
        {token && <p>Image</p>}
        {token ? "User Name" : "Увійти/Зареєструватися"}
      </div>
    </>
  );
}
