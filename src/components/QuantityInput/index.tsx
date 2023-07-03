import { Minus, Plus } from "phosphor-react";

import { ContainerQuantityInput, IconWrapper } from "./styles";

interface QuantityInputProps {
  size?: "small" | "medium";
  onIncrease: () => void;
  onDecrease: () => void;
  quantity: number;
}

export function QuantityInput({
  onIncrease,
  onDecrease,
  quantity,
  size = "medium",
}: QuantityInputProps) {
  return (
    <ContainerQuantityInput size={size}>
      <IconWrapper disabled={quantity <= 1} onClick={onDecrease}>
        <Minus size={14} weight="fill" />
      </IconWrapper>
      <input type="number" readOnly value={quantity} />
      <IconWrapper onClick={onIncrease}>
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </ContainerQuantityInput>
  );
}
