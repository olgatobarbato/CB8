import styles from "../../styles/404.module.scss";
import Link from "next/link";
import Image from "next/image";

const NotFoundPage = () => {
  return (
    <div className={styles.NotFoundPage}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! You make Ditto sad.</p>
      <Image
        src="https://pbs.twimg.com/media/D5j8smjWAAAQikp?format=png&name=360x360"
        alt="sad pokemon"
        width={200}
        height={200}
      />

      <Link className={styles.button} href="/">
        Go back to home
      </Link>
    </div>
  );
};

export default NotFoundPage;
