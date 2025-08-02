import styles from "@/styles/home/Main.module.scss";

export default function Main({
  children,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <main className={styles.main}>
      <div className={styles.main__container}>{children}</div>
    </main>
  );
}
