import { useNavigate } from "react-router-dom";
import styles from "./RegisterSection.module.css";
import "@fontsource/montserrat";
import { useRef, useContext, useEffect } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import axios from "../../../api/axios";

export default function RegisterSection() {
  const navigate = useNavigate();

  const { token } = useContext(AuthContext);
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  });

  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = async () => {
    if (
      usernameRef.current.value &&
      emailRef.current.value &&
      passwordRef.current.value
    ) {
      const userData = {
        username: usernameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      };
      axios
        .post("/users/email_verify/", {
          email: userData.email,
        })
        .then(() => {
          navigate("/verify", { state: { userData, access: true } });
        });
    }
  };

  return (
    <>
      <div className={styles.RegistrationSection}>
        <p className={styles.PageTitle}>Реєстрація</p>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Ім'я користувача"
          ref={usernameRef}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
          ref={emailRef}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Пароль"
          ref={passwordRef}
        />

        <div className={styles.LoginOffer}>
          <p>Вже маєте обліковий запис?</p>
          <p className={styles.Login} onClick={() => navigate("/login")}>
            Увійти
          </p>
        </div>

        <button className={styles.SubmitButton} onClick={() => handleSubmit()}>
          Зареєструватися
        </button>
      </div>
    </>
  );
}
