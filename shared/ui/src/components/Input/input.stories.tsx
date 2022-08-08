import React from "react";

import Input from "./index";

export default {
  title: "Example/Input",
  component: Input,
  argTypes: {
    // backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  defaultValue: "",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};
