import styles from "./index.module.scss";
import Navbar from "../../components/navbar";

export default function Contacts() {
  return (
    <>
      <Navbar />
      <div className={styles.Contacts}>
        <div className={styles.text}>
          <h1>Contact Us</h1>
          <h3>
            Need to get in touch with us? Either fill out the form with your
            inquiry or write an email directly at{" "}
            <email>ecommerce@ecommerce.com</email>.
          </h3>
        </div>
        <div className={styles.form}>
          <form>
            <div className={styles.names}>
              <p>First Name</p>
              <p>Last Name</p>
            </div>
            <div className={styles.names_Input}>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <div>
              <p>Email</p>
              <input type="email" placeholder="Email" />
            </div>
            <div>
              <p>What can we help you with?</p>
              <textarea type="text" />
            </div>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
}
