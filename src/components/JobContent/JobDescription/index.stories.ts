import type { Meta, StoryObj } from "@storybook/react";

import JobDescription from "./index";

const meta = {
  title: "Components/JobDescription",
  tags: ["autodocs"],
  component: JobDescription,
  argTypes: {
    postedAt: {
      description: "Description of position",

      type: "string",
    },
    contract: {
      description: "Type of contract",
      type: "string",
    },
    location: {
      description: "Location of position",
      type: "string",
    },
  },
} satisfies Meta<typeof JobDescription>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    postedAt: "5d ago",
    contract: "Full Time",
    location: "Belgium",
  },
};
