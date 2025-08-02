import styles from "@/styles/home/Header.module.scss";
import Top from "@/components/home/Header/Top";
import Search from "@/components/home/Header/Search";
import Nav from "@/components/home/Header/Nav";

export default function Header() {
  return (
    <header className={styles.header}>
      <Top className={styles} />
      <Search className={styles} />
      <Nav className={styles} />
    </header>
  );
}
