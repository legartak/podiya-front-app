import styles from "./VerificationSection.module.css";
import "@fontsource/montserrat";
import { useContext, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import PropTypes from "prop-types";
import axios from "../../../api/axios";

export default function VerificationSection({ isRegistering = false }) {
  const location = useLocation();
  const { userData, access } = location.state || {};
  isRegistering = access;

  const navigate = useNavigate();

  const { token, login } = useContext(AuthContext);

  useEffect(() => {
    if (token || !isRegistering) {
      navigate("/");
    }
  });

  const otpCodeRef = useRef("");

  const handleSubmit = async () => {
    if (otpCodeRef.current.value) {
      const verificationCode = {
        code: otpCodeRef.current.value,
      };

      await axios
        .post("/users/email_verify_validate/", {
          email: userData.email,
          code: verificationCode.code,
          headers: {
            "Content-Type": "text/plain",
          },
        })
        .then((res) => {
          if (res.data.valid) {
            axios
              .post("/users/create/", {
                username: userData.username,
                password: userData.password,
                email: userData.email,
              })
              .then((res) => {
                if (res.status === 201) {
                  axios
                    .post("/users/login/", {
                      email: userData.email,
                      password: userData.password,
                    })
                    .then((res) => {
                      login(res.data.access);
                      navigate("/");
                    });
                }
              });
          }
        });
    }
  };

  return (
    <>
      <div className={styles.VerificationSection}>
        <p className={styles.PageTitle}>Введіть код з e-mail</p>
        <input
          type="text"
          name="verification_code"
          id="verification_code"
          maxLength={6}
          autoComplete="off"
          className={styles.VerificationCode}
          ref={otpCodeRef}
        />

        <div className={styles.ResendOffer}>
          <p>Не прийшло повідомлення?</p>
          <p className={styles.Resend}>Відправити ще раз</p>
        </div>

        <button className={styles.SubmitButton} onClick={() => handleSubmit()}>
          Підтвердити
        </button>
      </div>
    </>
  );
}

VerificationSection.propTypes = {
  isRegistering: PropTypes.bool,
};
