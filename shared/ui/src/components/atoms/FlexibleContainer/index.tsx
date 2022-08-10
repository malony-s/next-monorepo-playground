import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';
import { Property } from 'csstype';

import { spacing } from '@shared/ui/utils/spacing';
import withDivider, { WithDivider } from '@shared/ui/utils/withDivider';

type Direction = Property.FlexDirection;

export type FlexibleContainerProps = WithDivider & {
  direction?: Direction;
  spacing?: number;
  align?: Property.AlignItems;
  justify?: Property.JustifyContent;
  background?: Property.Background;
};

const FlexibleContainer = styled('div', {
  shouldForwardProp: (prop) => isPropValid(prop),
})<FlexibleContainerProps>(
  ({
    direction: flexDirection = 'column',
    spacing: gap = 0,
    align: alignItems,
    justify: justifyContent,
  }) => ({
    display: 'flex',
    flexDirection,
    alignItems,
    justifyContent,
    gap: spacing(gap),
  }),
);

export default withDivider<FlexibleContainerProps>(FlexibleContainer);