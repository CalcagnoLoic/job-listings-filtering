import type { Meta, StoryObj } from "@storybook/react";

import JobTags from "./index";

const meta = {
  title: "Components/JobTags",
  tags: ["autodocs"],
  component: JobTags,
  argTypes: {
    role: {
      description: "Role for position",
      type: "string",
    },
    level: {
      description: "Level for position",
      type: "string",
    },
    languages: {
      description: "Language(s) for position",
      type: "string",
    },
    tools: {
      description: "Tool(s) for position",
      type: "string",
    },
  },
} satisfies Meta<typeof JobTags>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    role: "Fullstack",
    level: "Junior",
    languages: ["Python", "JS"],
    tools: ["React"],
  },
};
