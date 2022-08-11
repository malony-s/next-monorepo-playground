import { Story } from '@storybook/react';

import React from 'react';

import Input from '@shared/ui/components/atoms/Input';

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
