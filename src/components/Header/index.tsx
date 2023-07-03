import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from "phosphor-react";

import { useCart } from "../../hooks/useCart";

import coffeeLogoImg from "../../assets/coffee-logo.svg";
import {
  ContainerHeader,
  HeaderButton,
  HeaderButtonsContainer,
} from "./styles";

export function Header() {
  const { cartQuantity } = useCart();

  return (
    <ContainerHeader>
      <div className="container">
        <NavLink to="/">
          <img src={coffeeLogoImg} alt="" />
        </NavLink>

        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Porto Alegre, RS
          </HeaderButton>
          <NavLink to="/completeOrder">
            <HeaderButton variant="yellow">
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={20} weight="fill" />
            </HeaderButton>
          </NavLink>
        </HeaderButtonsContainer>
      </div>
    </ContainerHeader>
  );
}
