import styles from "@/styles/Homepage.module.scss";
import Link from "next/link";

export default function Homepage() {
  return (
    <>
      <div className={styles.Homepage}>
        <Link className={styles.buttonAuguri} href="/auguri">
          Auguri
        </Link>
        <Link className={styles.buttonQuote} href="/quote">
          Quote
        </Link>
      </div>
    </>
  );
}
