import styles from "./index.module.scss";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function MainLayout({ children }) {
  return (
    <div className={styles.MainLayout}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
