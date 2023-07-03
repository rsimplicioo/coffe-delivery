import { QuantityInput } from "../QuantityInput";
import { RegularText, TitleText } from "../Typography";

import { ShoppingCart } from "phosphor-react";

import {
  ContainerCoffeeCard,
  Tags,
  Name,
  Description,
  CardFooter,
  AddCartWrapper,
} from "./styles";
import { formatMoney } from "../../utils/formatMoney";
import { useCart } from "../../hooks/useCart";
import { useState } from "react";

export interface Coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface CoffeeCardProps {
  coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { addCoffeeToCart } = useCart();

  const [quantity, setQuantity] = useState(1);

  function handleIncrese() {
    setQuantity((state) => state + 1);
  }

  function handleDecrese() {
    setQuantity((state) => state - 1);
  }

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity: 1,
    };

    addCoffeeToCart(coffeeToAdd);
  }

  const formattedPrice = formatMoney(coffee.price);

  return (
    <ContainerCoffeeCard>
      <img src={`/coffees/${coffee.photo}`} alt="" />

      <Tags>
        {coffee.tags.map((tag) => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </Tags>

      <Name>{coffee.name}</Name>
      <Description>{coffee.description}</Description>

      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            {formattedPrice}
          </TitleText>
        </div>

        <AddCartWrapper>
          <QuantityInput
            onIncrease={handleIncrese}
            onDecrease={handleDecrese}
            quantity={quantity}
          />
          <button onClick={handleAddToCart}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </ContainerCoffeeCard>
  );
}
