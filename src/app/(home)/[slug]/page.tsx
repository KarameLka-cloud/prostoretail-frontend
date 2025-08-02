export default async function PageCategory({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div>
      <h1>Category: {slug}</h1>
      <p>This is the page for the category with slug: {slug}</p>
    </div>
  );
}
