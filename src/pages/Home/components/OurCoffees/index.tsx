import { CoffeeCard } from "../../../../components/CoffeeCard";
import { TitleText } from "../../../../components/Typography";
import { coffees } from "../../../../data/coffees";

import { ContainerOurCoffees, CoffeeList } from "./styles";

export function OurCoffees() {
  return (
    <ContainerOurCoffees className="container">
      <TitleText size="l" color="subtitle">
        Nossos cafés
      </TitleText>
      <CoffeeList>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeList>
    </ContainerOurCoffees>
  );
}
