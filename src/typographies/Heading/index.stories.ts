import type { Meta, StoryObj } from "@storybook/react";

import Heading from "./index";

const meta = {
  title: "Typographies/Heading",
  tags: ["autodocs"],
  component: Heading,
  argTypes: {
    content: {
      description: "The value of a string",
      type: "string",
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: "Software Engineer",
  },
};
