import { TitleText } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { CoffeeCartCard } from "../CoffeeCartCard";
import { ConfirmationSection } from "./ConfirmationSection";

import { ContainerDetails, ContainerSelectedCoffees } from "./styles";

export function SelectedCoffees() {
  const { cartItems } = useCart();

  return (
    <ContainerSelectedCoffees>
      <TitleText size="xs" color="subtitle">
        Cafés selecionados
      </TitleText>

      <ContainerDetails>
        {cartItems.map((coffee) => (
          <CoffeeCartCard key={coffee.id} coffee={coffee} />
        ))}
        <ConfirmationSection />
      </ContainerDetails>
    </ContainerSelectedCoffees>
  );
}
