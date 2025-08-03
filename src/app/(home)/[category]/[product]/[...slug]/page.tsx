import Link from "next/link";

export default function CategorySlugPage({
  params,
}: {
  params: { category: string; product: string; slug?: string[] };
}) {
  // const { category, product, slug } = await params;
  const slugParts = params.slug ?? [];
  const { category, product } = params;

  return (
    <div>
      <div>
        <Link href={`/${category}`}>Category</Link>
        <br />
        <Link href={`/${category}/${product}`}>Product</Link>
        <br />
        {/* <Link href={`${category}/${product}/{}`}>Go to product page</Link> */}
      </div>

      {product}
      <br />
      {slugParts[0]}
      <br />
      {slugParts[1]}
      {/* <h1>Category: {category}</h1>
      <p>Product: {product}</p>
      <p>Slug: {slug}</p> */}
    </div>
  );
}
