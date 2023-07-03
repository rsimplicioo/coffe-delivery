import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Clock, CurrencyDollar } from "phosphor-react";

import { RegularText, TitleText } from "../../components/Typography";
import { InfoWithIcon } from "../../components/InfoWithIcon";
import confirmedOrderImg from "../../assets/confirmed-order.svg";
import { OrderData } from "../CompleteOrder";
import { paymentMethods } from "../CompleteOrder/components/CompleteOrderForm/PaymentMethodOptions";

import { useTheme } from "styled-components";

import { ContainerOrderConfirmed, ContainerOrderDetails } from "./styles";

interface LocationType {
  state: OrderData;
}

export function OrderConfirmed() {
  const { colors } = useTheme();

  const { state } = useLocation() as unknown as LocationType;
  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, []);

  if (!state) return <></>;

  return (
    <ContainerOrderConfirmed className="container">
      <div>
        <TitleText size="l">Uhu! Pedido confirmado</TitleText>
        <RegularText size="l" color="subtitle">
          Agora é só aguardar que logo o café chegará até você
        </RegularText>
      </div>

      <section>
        <ContainerOrderDetails>
          <InfoWithIcon
            icon={<MapPin weight="fill" />}
            iconBg={colors["brand-purple"]}
            text={
              <RegularText>
                Entrega em{" "}
                <strong>
                  {state.street}, {state.number}
                </strong>
                <br />
                {state.district} - {state.city}, {state.uf}
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<Clock weight="fill" />}
            iconBg={colors["brand-yellow"]}
            text={
              <RegularText>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<CurrencyDollar weight="fill" />}
            iconBg={colors["brand-yellow-dark"]}
            text={
              <RegularText>
                Pagamento na entrega
                <br />
                <strong>{paymentMethods[state.paymentMethod].label}</strong>
              </RegularText>
            }
          />
        </ContainerOrderDetails>
        <img src={confirmedOrderImg} />
      </section>
    </ContainerOrderConfirmed>
  );
}
