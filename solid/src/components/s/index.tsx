import { useEffect, useMemo, useState } from "react";

/**
 * S (Single Responsibility Principle)
 * Every class should only have one responsibility
 */

type Product = {
  rating: number;
};

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    const response = await fetch("/products");
    const data = await response.json();

    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products };
};

const useFilterRate = () => {
  const [filterRate, setFilterRate] = useState(0);

  const handleRating = (rate: number) => {
    setFilterRate(rate);
  };

  return { filterRate, handleRating };
};

export const Rating = ({
  handleRating,
}: {
  handleRating: (rating: number) => void;
}) => {
  return (
    <div>
      <button onClick={() => handleRating(1)}>1</button>
      <button onClick={() => handleRating(1)}>2</button>
      <button onClick={() => handleRating(1)}>3</button>
      <button onClick={() => handleRating(1)}>4</button>
    </div>
  );
};

const Product = ({ product }: { product: { rating: number } }) => {
  return <div>{product.rating}</div>;
};

export function Good() {
  const { filterRate, handleRating } = useFilterRate();
  const { products } = useProducts();

  const filteredProducts = useMemo(() => {
    return products.filter((product) => product?.rating >= filterRate);
  }, [products, filterRate]);

  return (
    <div>
      <Rating handleRating={handleRating} />
      <div>
        {filteredProducts.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
}
