import React from 'react';

import FlexibleContainer, {
  FlexibleContainerProps,
} from '@shared/ui/components/atoms/FlexibleContainer';

export default {
  title: 'Atoms/Container',
  component: FlexibleContainer,
  argTypes: {
    direction: {
      control: 'radio',
      options: ['column', 'row'],
    },
    spacing: {
      control: { type: 'number' },
    },
    align: {
      control: 'radio',
      options: ['normal', 'flex-start', 'center', 'flex-end'],
    },
    justify: {
      control: 'radio',
      options: ['normal', 'flex-start', 'center', 'flex-end'],
    },
  },
};

const Template = (args: FlexibleContainerProps) => (
  <FlexibleContainer {...args}>
    <div>
      <span>div1</span>
    </div>
    <div>
      <span>div2</span>
    </div>
  </FlexibleContainer>
);

export const Index = Template.bind(
  {},
  {
    direction: 'row',
    spacing: 2,
    align: 'normal',
    justify: 'normal',
  },
);
export const WithDivider = Template.bind(
  {},
  {
    direction: 'row',
    spacing: 2,
    align: 'normal',
    justify: 'normal',
    divider: <div>{'/'}</div>,
  },
);
