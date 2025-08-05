export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const { category } = await params;

  return (
    <div>
      <h1>Category: {category}</h1>
      <p>This is the page for the category with slug: {category}</p>
    </div>
  );
}
