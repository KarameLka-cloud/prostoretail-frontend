export default function Nav({
  className,
}: {
  className?: { [key: string]: string };
}) {
  return (
    <nav className={className?.header_nav}>
      <div className={className?.header_nav__container}>Nav</div>
    </nav>
  );
}
