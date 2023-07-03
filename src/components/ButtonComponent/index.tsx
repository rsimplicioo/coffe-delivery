import { ButtonHTMLAttributes, forwardRef } from "react";
import { ButtonComponentContainer } from "./style";

interface ButtonComponentProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string | number;
}

export const ButtonComponent = forwardRef<
  HTMLButtonElement,
  ButtonComponentProps
>(({ text, ...props }, ref) => {
  return (
    <ButtonComponentContainer {...props} ref={ref}>
      {text}
    </ButtonComponentContainer>
  );
});
