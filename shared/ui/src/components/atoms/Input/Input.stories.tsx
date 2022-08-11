import { Story } from '@storybook/react';
import Input from 'src/components/atoms/Input';

import React from 'react';

import { BaseInputProps } from './styled.component';

export default {
  title: 'Atoms/Input',
  component: Input,
  argTypes: {
    // backgroundColor: { control: "color" },
  },
};

const Template: Story = (args: BaseInputProps) => <Input {...args} />;

export const Index = Template.bind({});
Index.args = { defaultValue: 'test' };
