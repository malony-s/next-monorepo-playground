import styled from '@emotion/styled';

import React from 'react';

export type BaseInputProps = React.HTMLAttributes<HTMLInputElement>;

export const BaseInput = styled('input')<BaseInputProps>(() => ({
  border: 'none',
  outline: 'none',
  '&:focus': {},
}));
