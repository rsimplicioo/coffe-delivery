import { Minus, Plus } from "phosphor-react";

import { ContainerQuantityInput, IconWrapper } from "./styles";

export function QuantityInput() {
  return (
    <ContainerQuantityInput>
      <IconWrapper>
        <Minus size={14} weight="fill" />
      </IconWrapper>
      <input type="number" readOnly value={1} />
      <IconWrapper>
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </ContainerQuantityInput>
  );
}
