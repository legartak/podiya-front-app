import styles from "./RegisterSection.module.css";
import "@fontsource/montserrat";

export default function RegisterSection() {
  return (
    <>
      <div className={styles.RegistrationSection}>
        <p className={styles.PageTitle}>Реєстрація</p>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Ім'я користувача"
        />
        <input type="email" name="email" id="email" placeholder="E-mail" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Пароль"
        />

        <div className={styles.LoginOffer}>
          <p>Вже маєте обліковий запис?</p>
          <p className={styles.Login}>Увійти</p>
        </div>

        <button className={styles.SubmitButton}>Зареєструватися</button>
      </div>
    </>
  );
}
