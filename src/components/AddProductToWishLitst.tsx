export interface AddProductToWishListProps {
  onAddToWishList: (id: number) => Promise<void>;
  onRequestClose: () => void;
}

export function AddProductToWishList({
  onAddToWishList,
  onRequestClose,
}: AddProductToWishListProps) {
  return (
    <span>
      Deseja adicionar o produto a sua lista de desejos?
      <button onClick={() => onAddToWishList(1)}>Sim</button>
      <button onClick={onRequestClose}>Não</button>
    </span>
  );
}
