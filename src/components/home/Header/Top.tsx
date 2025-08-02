export default function Top({
  className,
}: {
  className?: { [key: string]: string };
}) {
  return (
    <div className={className?.header_top}>
      <div className={className?.header_top__container}>Top</div>
    </div>
  );
}
