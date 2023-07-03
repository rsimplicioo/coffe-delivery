import { ButtonComponent } from "../../../../components/ButtonComponent";
import { RegularText } from "../../../../components/Typography";

import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";

const DELIVERY_PRICE = 3.5;

import { ContainerConfirmationSection } from "./styles";

export function ConfirmationSection() {
  const { cartItemsTotal, cartQuantity } = useCart();

  const cartTotal = DELIVERY_PRICE + cartItemsTotal;

  const formattedItemsTotal = formatMoney(cartItemsTotal);
  const formattedCartTotal = formatMoney(cartTotal);
  const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE);

  return (
    <ContainerConfirmationSection>
      <div>
        <RegularText size="s">Total dos itens</RegularText>
        <RegularText>{formattedItemsTotal}</RegularText>
      </div>

      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>R$ {formattedDeliveryPrice}</RegularText>
      </div>

      <div>
        <RegularText weight="700" color="subtitle" size="l">
          Total
        </RegularText>
        <RegularText weight="700" color="subtitle" size="l">
          R$ {formattedCartTotal}
        </RegularText>
      </div>

      <ButtonComponent
        text="Confirmar Pedido"
        disabled={cartQuantity <= 0}
        type="submit"
      />
    </ContainerConfirmationSection>
  );
}
