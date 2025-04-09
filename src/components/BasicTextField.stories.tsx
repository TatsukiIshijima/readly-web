import type { Meta, StoryObj } from '@storybook/react';

import BasicTextField from './BasicTextField';

const meta = {
  component: BasicTextField,
} satisfies Meta<typeof BasicTextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  // @ts-expect-error storybookによる自動生成のためESLintエラーを無視
  args: {},
};
