/**
 * I (Interface Segregation Principle)
 * Clients should not be forced to depend upon interfaces that they do not use.
 */

type Product = {
  rating: number;
  image: string;
  name: string;
  price: number;
  description: string;
  category: string;
  id: number;
  quantity: number;
};

function Thumbnail({ image }: { image: string }) {
  return <img src={image} alt="product" />;
}

export function BadProduct({ product }: { product: Product }) {
  return (
    <div>
      <Thumbnail image={product.image} />
      <div>{product.name}</div>
    </div>
  );
}
