import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "./Button";

const meta = {
  title: "Button",
  component: Button,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DarkSolid: Story = {
  args: {
    variant: "dark",
    children: "Dark & Solid",
  },
};

export const GreenSolid: Story = {
  args: {
    variant: "green",
    children: "Green & Solid",
  },
};

export const DarkOutlined: Story = {
  args: {
    variant: "dark",
    outlined: true,
    children: "Dark & Outlined",
  },
};

export const GreenOutlined: Story = {
  args: {
    variant: "green",
    outlined: true,
    children: "Green & Outlined",
  },
};
