import { FormEvent, useCallback, useState } from "react";
import { SearchResult } from "../components/SearchResult";

interface Product {
  id: number;
  price: number;
  name: string;
  formattedPrice: string;
}

interface Results {
  data: Array<Product>;
  totalPrice: number;
}
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function Home() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<Results>({
    data: [],
    totalPrice: 0,
  });

  async function handleSearch(e: FormEvent) {
    e.preventDefault();

    if (!search.trim()) return;

    const response = await fetch(`http://localhost:3333/products?q=${search}`);
    const data: Product[] = await response.json();

    const products = data.map((product) => ({
      ...product,
      formattedPrice: formatter.format(product.price),
    }));

    const totalPrice = data.reduce((acc, curr) => acc + curr.price, 0);

    setResults({ data: products, totalPrice });
  }

  const addToWishList = useCallback(async (id: number) => {
    console.log("add to wishlist", id);
  }, []);

  return (
    <div>
      <h1>Hello Next.js</h1>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <SearchResult
        results={results.data}
        totalPrice={formatter.format(results.totalPrice)}
        onAddToWishList={addToWishList}
      />
    </div>
  );
}
