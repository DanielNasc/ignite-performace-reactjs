import { memo } from "react";

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
  return (
    <div>
      <p>
        {product.name} costs {product.formattedPrice}{" "}
        <button onClick={() => onAddToWishList(product.id)}>
          Add to wishlist
        </button>
      </p>
    </div>
  );
}

export const ProductItem = memo(ProductItemComponent, (prev, next) => {
  return Object.is(prev.product, next.product);
});
