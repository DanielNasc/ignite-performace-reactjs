import { memo, useState } from "react";
import dynamic from "next/dynamic";
import { AddProductToWishListProps } from "./AddProductToWishLitst";
// import { AddProductToWishList } from "./AddProductToWishLitst";

const AddProductToWishList = dynamic<AddProductToWishListProps>(
  () =>
    import("./AddProductToWishLitst").then((mod) => mod.AddProductToWishList),
  {
    loading: () => <span>Carregando...</span>,
  }
);

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    name: string;
    formattedPrice: string;
  };

  onAddToWishList: (id: number) => Promise<void>;
}

function ProductItemComponent({ product, onAddToWishList }: ProductItemProps) {
  const [isAddingToWishList, setIsAddingToWishList] = useState(false);

  async function handleAddToWishList(id: number) {
    onAddToWishList(id);
    setIsAddingToWishList(false);
  }

  return (
    <div>
      <p>
        {product.name} custa {product.formattedPrice}{" "}
        <button onClick={() => setIsAddingToWishList(true)}>
          Adicionar a lista de desejos
        </button>
        {isAddingToWishList && (
          <AddProductToWishList
            onAddToWishList={() => handleAddToWishList(product.id)}
            onRequestClose={() => setIsAddingToWishList(false)}
          />
        )}
      </p>
    </div>
  );
}

export const ProductItem = memo(ProductItemComponent, (prev, next) => {
  return Object.is(prev.product, next.product);
});
