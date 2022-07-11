import { useMemo } from "react";
import { ProductItem } from "./ProductItem";
import { List, ListRowRenderer } from "react-virtualized";

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
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem
          product={results[index]}
          onAddToWishList={onAddToWishList}
        />
      </div>
    );
  };

  return (
    <div id="resuts">
      <h2>total: {totalPrice}</h2>

      <List
        height={300}
        width={900}
        rowHeight={30}
        overscanRowCount={10}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />
      {/* {results.map((result) => (
        <ProductItem
          key={result.id}
          product={result}
          onAddToWishList={onAddToWishList}
        />
      ))} */}
    </div>
  );
}
