import styles from "./LoginSection.module.css";
import "@fontsource/montserrat";

export default function LoginSection() {
  return (
    <>
      <div className={styles.LoginSection}>
        <p className={styles.PageTitle}>Вхід</p>
        <input type="email" name="email" id="email" placeholder="E-mail" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Пароль"
        />

        <p className={styles.ResetPassword}>Відновити пароль</p>

        <div className={styles.RegisterOffer}>
          <p>Не маєте облікового запису?</p>
          <p className={styles.Register}>Зареєструватися</p>
        </div>

        <button className={styles.SubmitButton}>Увійти</button>
      </div>
    </>
  );
}
