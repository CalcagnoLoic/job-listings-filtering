import type { Meta, StoryObj } from "@storybook/react";

import JobsPage from "./index";

const meta = {
  title: "Pages/JobsPage",
  component: JobsPage,
} satisfies Meta<typeof JobsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
