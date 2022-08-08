import React, { ForwardedRef, forwardRef } from "react";
import { BaseInput, BaseInputProps } from "./styled.component";

type InputProps = BaseInputProps;

const Input = (props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <div>
      <BaseInput ref={ref} {...props} />
    </div>
  );
};

export default forwardRef<HTMLInputElement, InputProps>(Input);

/*
@todo add props
variant.
helperText.
*/
