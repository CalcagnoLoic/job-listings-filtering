import type { Meta, StoryObj } from "@storybook/react";

import BulletPoint from "./index";

const meta = {
  title: "Components/BulletPoint",
  tags: ["autodocs"],
  component: BulletPoint,
  argTypes: {
    isNew: {
      description: "Indicate if a position is new or not",
      type: "boolean",
    },
    isFeatured: {
      description: "Indicate if a position is featured or not",
      type: "boolean",
    },
  },
} satisfies Meta<typeof BulletPoint>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BulletPointNew: Story = {
  args: {
    isNew: true,
    isFeatured: false,
  },
};

export const BulletPointFeatured: Story = {
  args: {
    isNew: false,
    isFeatured: true,
  },
};

export const BulletPointNewAndFeatured: Story = {
  args: {
    isNew: true,
    isFeatured: true,
  },
};
