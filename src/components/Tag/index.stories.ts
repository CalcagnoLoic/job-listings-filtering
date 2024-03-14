import type { Meta, StoryObj } from "@storybook/react";

import Tag from "./index";

const meta = {
  title: "Components/Tag",
  tags: ["autodocs"],
  component: Tag,
  argTypes: {
    content: {
      description: "The value of a string",
      type: "string",
    },
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: "Python",
  },
};
