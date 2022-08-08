import React from "react";

import Input from "./index";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    // backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Input {...args} />;

export const Index = Template.bind({});
Index.args = {
  defaultValue: "test",
};
