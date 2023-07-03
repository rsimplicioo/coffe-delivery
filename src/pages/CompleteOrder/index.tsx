import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";

import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { SelectedCoffees } from "./components/SelectedCoffees";

import { ContainerCompleteOrder } from "./styles";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

enum PaymentMethods {
  credit = "credit",
  debit = "debit",
  money = "money",
}

const confirmOrderFormValidationScheme = zod.object({
  cep: zod.string().min(1, "Informe o cep"),
  street: zod.string().min(1, "Informe a rua"),
  number: zod.string().min(1, "Informe o número"),
  complement: zod.string(),
  district: zod.string().min(1, "Informe o bairro"),
  city: zod.string().min(1, "Informe a cidade"),
  uf: zod.string().min(1, "Informe a UF"),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return {
        message: "Informe o método de pagamento",
      };
    },
  }),
});

export type OrderData = zod.infer<typeof confirmOrderFormValidationScheme>;
type ConfirmOrderFormData = OrderData;

export function CompleteOrder() {
  const { cleanCart } = useCart();

  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationScheme),
  });

  const { handleSubmit } = confirmOrderForm;

  const navigate = useNavigate();

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    navigate("/orderConfirmed", { state: data });
    cleanCart();
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <ContainerCompleteOrder
        className="container"
        onSubmit={handleSubmit(handleConfirmOrder)}
      >
        <CompleteOrderForm />
        <SelectedCoffees />
      </ContainerCompleteOrder>
    </FormProvider>
  );
}
