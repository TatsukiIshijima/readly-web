import type { Meta, StoryObj } from '@storybook/react';

import Hello from './Hello';

const meta = {
  component: Hello,
} satisfies Meta<typeof Hello>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
