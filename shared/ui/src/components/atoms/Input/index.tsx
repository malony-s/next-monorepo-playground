import { ForwardedRef, forwardRef } from 'react';

import { BaseInput, BaseInputProps } from './styled.component';

type InputProps = BaseInputProps;

const Input = (props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
  return <BaseInput ref={ref} {...props} />;
};

export default forwardRef<HTMLInputElement, InputProps>(Input);

/*
@todo add props
variant.
helperText.
*/
