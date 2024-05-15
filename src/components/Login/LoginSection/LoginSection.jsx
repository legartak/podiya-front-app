import { useNavigate } from "react-router-dom";
import styles from "./LoginSection.module.css";
import "@fontsource/montserrat";
import { useRef, useContext, useEffect } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import axios from "../../../api/axios";

export default function LoginSection() {
  const navigate = useNavigate();

  const { token, login } = useContext(AuthContext);
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  });

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = async () => {
    if (emailRef.current.value && passwordRef.current.value) {
      const loginData = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      };

      await axios
        .post("/users/login/", {
          email: loginData.email,
          password: loginData.password,
        })
        .then(async (res) => {
          if (res.status === 200) {
            await login(res.data.access);
            navigate("/");
          }
        });
    }
  };

  return (
    <>
      <div className={styles.LoginSection}>
        <p className={styles.PageTitle}>Вхід</p>
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

        <p className={styles.ResetPassword}>Відновити пароль</p>

        <div className={styles.RegisterOffer}>
          <p>Не маєте облікового запису?</p>
          <p className={styles.Register} onClick={() => navigate("/register")}>
            Зареєструватися
          </p>
        </div>

        <button className={styles.SubmitButton} onClick={() => handleSubmit()}>
          Увійти
        </button>
      </div>
    </>
  );
}
