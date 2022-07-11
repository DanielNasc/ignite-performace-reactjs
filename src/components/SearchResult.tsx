import { useMemo } from "react";
import { ProductItem } from "./ProductItem";

interface SearchResultProps {
  results: Array<{
    id: number;
    price: number;
    name: string;
    formattedPrice: string;
  }>;

  totalPrice: string;

  onAddToWishList: (id: number) => Promise<void>;
}

export function SearchResult({
  results,
  onAddToWishList,
  totalPrice,
}: SearchResultProps) {
  return (
    <div id="resuts">
      <h2>total: {totalPrice}</h2>

      {results.map((result) => (
        <ProductItem
          key={result.id}
          product={result}
          onAddToWishList={onAddToWishList}
        />
      ))}
    </div>
  );
}
