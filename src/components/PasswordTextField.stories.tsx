import type { Meta, StoryObj } from '@storybook/react';

import PasswordTextField from './PasswordTextField';

const meta = {
  component: PasswordTextField,
} satisfies Meta<typeof PasswordTextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
