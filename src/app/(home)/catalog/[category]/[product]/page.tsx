export default async function CategoryProductPage({
  params,
}: {
  params: { category: string; product: string };
}) {
  const { category, product } = await params;

  return (
    <div>
      <h1>Category: {category}</h1>
      <p>Product: {product}</p>
    </div>
  );
}
