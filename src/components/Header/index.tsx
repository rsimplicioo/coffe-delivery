import coffeeLogoImg from "../../assets/coffee-logo.svg";

import { MapPin, ShoppingCart } from "phosphor-react";

import {
  ContainerHeader,
  HeaderButton,
  HeaderButtonsContainer,
} from "./styles";

export function Header() {
  return (
    <ContainerHeader>
      <div className="container">
        <img src={coffeeLogoImg} alt="" />

        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Porto Alegre, RS
          </HeaderButton>
          <HeaderButton variant="yellow">
            <ShoppingCart size={20} weight="fill" />
          </HeaderButton>
        </HeaderButtonsContainer>
      </div>
    </ContainerHeader>
  );
}
