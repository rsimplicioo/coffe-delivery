import { Intro } from "./components/Intro";
import { OurCoffees } from "./components/OurCoffees";

import { ContainerHome } from "./styles";

export function Home() {
  return (
    <ContainerHome>
      <Intro />
      <OurCoffees />
    </ContainerHome>
  );
}
