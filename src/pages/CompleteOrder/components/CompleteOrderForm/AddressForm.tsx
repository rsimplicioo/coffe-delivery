import { useFormContext } from "react-hook-form";
import { InputComponent } from "../../../../components/InputComponent";

import { ContainerAddressForm } from "./styles";

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    };
  };
}

export function AddressForm() {
  const { register, formState } = useFormContext();

  const { errors } = formState as unknown as ErrorsType;

  return (
    <ContainerAddressForm>
      <InputComponent
        {...register("cep")}
        placeholder="CEP"
        className="cep"
        error={errors.cep?.message}
      />
      <InputComponent
        {...register("street")}
        placeholder="Rua"
        className="street"
        error={errors.street?.message}
      />
      <InputComponent
        {...register("number")}
        placeholder="Número"
        className="number"
        error={errors.number?.message}
      />
      <InputComponent
        {...register("complement")}
        placeholder="Complemento"
        className="complement"
        error={errors.complement?.message}
        rightText="Opcional"
      />
      <InputComponent
        {...register("district")}
        placeholder="Bairro"
        error={errors.district?.message}
      />
      <InputComponent
        {...register("city")}
        placeholder="Cidade"
        error={errors.city?.message}
      />
      <InputComponent
        {...register("uf")}
        placeholder="UF"
        error={errors.uf?.message}
      />
    </ContainerAddressForm>
  );
}
