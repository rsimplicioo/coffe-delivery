import { InputHTMLAttributes, ReactNode, forwardRef } from "react";

import {
  PaymentMethodInputContainer,
  PaymentMethodInputContent,
} from "./styles";

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode;
  label: string;
};

export const PaymentMethodInput = forwardRef<
  HTMLInputElement,
  PaymentMethodInputProps
>(({ id, icon, label, ...props }, ref) => {
  return (
    <PaymentMethodInputContainer>
      <input id={id} type="radio" name="paymentMethod" {...props} ref={ref} />
      <label htmlFor={id}>
        <PaymentMethodInputContent>
          {icon}
          {label}
        </PaymentMethodInputContent>
      </label>
    </PaymentMethodInputContainer>
  );
});
