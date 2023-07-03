import { Trash } from "phosphor-react";

import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText } from "../../../../components/Typography";

import {
  ContainerActions,
  ContainerCoffeeCartCard,
  RemoveButton,
} from "./styles";
import { formatMoney } from "../../../../utils/formatMoney";
import { CartItem } from "../../../../contexts/CartContext";
import { useCart } from "../../../../hooks/useCart";

interface CoffeeCartCardProps {
  coffee: CartItem;
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
  const { changeCartItemQuantity, removeCartItemFromCartById } = useCart();

  const coffeeTotal = coffee.price * coffee.quantity;
  const formattedPrice = formatMoney(coffeeTotal);

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, "increase");
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, "decrease");
  }

  function handleRemove() {
    removeCartItemFromCartById(coffee.id);
  }

  return (
    <ContainerCoffeeCartCard>
      <div>
        <img src={`/coffees/${coffee.photo}`} />
        <div>
          <RegularText color="subtitle">{coffee.name}</RegularText>
          <ContainerActions>
            <QuantityInput
              size="small"
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              quantity={coffee.quantity}
            />
            <RemoveButton onClick={handleRemove}>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ContainerActions>
        </div>
      </div>
      <p>R$ {formattedPrice}</p>
    </ContainerCoffeeCartCard>
  );
}
