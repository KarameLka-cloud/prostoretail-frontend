export default function Search({
  className,
}: {
  className?: { [key: string]: string };
}) {
  return (
    <div className={className?.header_search}>
      <div className={className?.header_search__container}>Search</div>
    </div>
  );
}
