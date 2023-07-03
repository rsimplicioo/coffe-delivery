import { InputHTMLAttributes, forwardRef } from "react";

import {
  InputWrapper,
  InputStyleContainer,
  InputStyled,
  RightText,
} from "./styles";
import { RegularText } from "../Typography";

type InputComponentProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  rightText?: string;
};

export const InputComponent = forwardRef<HTMLInputElement, InputComponentProps>(
  ({ error, className, rightText, ...props }, ref) => {
    return (
      <InputWrapper className={className}>
        <InputStyleContainer hasError={!!error}>
          <InputStyled {...props} ref={ref} />
          {rightText && <RightText>{rightText}</RightText>}
        </InputStyleContainer>
        {error && <RegularText size="s">{error}</RegularText>}
      </InputWrapper>
    );
  }
);
