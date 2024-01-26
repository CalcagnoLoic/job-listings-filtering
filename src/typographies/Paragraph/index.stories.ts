import type { Meta, StoryObj } from "@storybook/react";

import Paragraph from "./index";

const meta = {
  title: "Typographies/Paragraph",
  tags: ["autodocs"],
  component: Paragraph,
  argTypes: {
    kind: {
      description: "Tag p or span",
      type: "string",
    },
    content: {
      description: "The value of a string",
      type: "string",
    },
    css: {
      description: "Classes tailwind",
      type: "string",
    },
  },
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ParagraphFooter: Story = {
  args: {
    kind:"p",
    content: "Coding with love",
    css: "p-5 text-center text-outerSpace font-bold mt-5",
  },
};

export const ParagraphBulletPoint: Story = {
  args: {
    kind:"p",
    content: "New!",
    css: "top-heading-wrapper bg-breakerBay",
  },
};

export const ParagraphJobCompany: Story = {
  args: {
    kind:"span",
    content: "Loop Studios",
    css: "top-heading text-[13px] text-breakerBay md:text-[18px]",
  },
};
