import styles from "./VerificationSection.module.css";
import "@fontsource/montserrat";

export default function VerificationSection() {
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
        />

        <div className={styles.ResendOffer}>
          <p>Не прийшло повідомлення?</p>
          <p className={styles.Resend}>Відправити ще раз</p>
        </div>

        <button className={styles.SubmitButton}>Підтвердити</button>
      </div>
    </>
  );
}
