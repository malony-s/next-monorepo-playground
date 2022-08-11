import { Story } from '@storybook/react';
import FlexibleContainer, {
  FlexibleContainerProps,
} from 'src/components/atoms/FlexibleContainer';

import React from 'react';

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

const Template: Story<FlexibleContainerProps> = (
  args: FlexibleContainerProps,
) => (
  <FlexibleContainer {...args}>
    <div>
      <span>div1</span>
    </div>
    <div>
      <span>div2</span>
    </div>
  </FlexibleContainer>
);

export const Index = Template.bind({});
Index.args = {
  direction: 'row',
  spacing: 2,
  align: 'normal',
  justify: 'normal',
};
export const WithDivider = Template.bind({});
WithDivider.args = {
  direction: 'row',
  spacing: 2,
  align: 'normal',
  justify: 'normal',
  divider: <div>{'/'}</div>,
};
