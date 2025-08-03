export default function CategoryProductPage({
  params,
}: {
  params: { category: string; product: string };
}) {
  const { category, product } = params;

  return (
    <div>
      <h1>Category: {category}</h1>
      <p>Product: {product}</p>
    </div>
  );
}
