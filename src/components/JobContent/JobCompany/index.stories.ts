import type { Meta, StoryObj } from "@storybook/react";

import JobCompany from "./index";

const meta = {
  title: "Components/JobCompany",
  tags: ["autodocs"],
  component: JobCompany,
  argTypes: {
    company: {
      description: "The name of company",
      type: "string",
    },
  },
} satisfies Meta<typeof JobCompany>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    company: "Sneakers Company",
  },
};
