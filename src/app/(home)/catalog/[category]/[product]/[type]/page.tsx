export default function ProductTypePage({
  params,
}: {
  params: { category: string; product: string; type: string };
}) {
  const { category, product, type } = params;

  return (
    <>
      <h1>Category: {category}</h1>
      <p>Product: {product}</p>
      <p>Type: {type}</p>
      <div>Product Type Page</div>
    </>
  );
}
