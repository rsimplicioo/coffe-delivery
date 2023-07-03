import { useTheme } from "styled-components";

import { CurrencyDollar, MapPinLine } from "phosphor-react";

import { TitleText } from "../../../../components/Typography";
import { AddressForm } from "./AddressForm";
import { SectionTitle } from "../SectionTitle";
import { PaymentMethodOptions } from "./PaymentMethodOptions";

import { ContainerCompleteOrderForm, ContainerFormSection } from "./styles";

export function CompleteOrderForm() {
  const { colors } = useTheme();

  return (
    <ContainerCompleteOrderForm>
      <TitleText size="xs" color="subtitle">
        Complete seu pedido
      </TitleText>

      <ContainerFormSection>
        <SectionTitle
          title="Endereço de entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
          icon={<MapPinLine size={22} color={colors["brand-yellow-dark"]} />}
        />

        <AddressForm />
      </ContainerFormSection>
      <ContainerFormSection>
        <SectionTitle
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          icon={<CurrencyDollar size={22} color={colors["brand-purple"]} />}
        />

        <PaymentMethodOptions />
      </ContainerFormSection>
    </ContainerCompleteOrderForm>
  );
}
