import type { Meta, StoryObj } from "@storybook/react";

import Shape from "./index";

const meta = {
  title: "Components/Shape",
  tags: ["autodocs"],
  component: Shape,
  argTypes: {
    kindShape: {
      description: "The value of a string",
      type: "string",
    },
  },
} satisfies Meta<typeof Shape>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Round: Story = {
  args: {
    kindShape: "round",
  },
};

export const Line: Story = {
  args: {
    kindShape: "line",
  },
};
