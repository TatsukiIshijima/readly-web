import type { Meta, StoryObj } from '@storybook/react';

import BookItem from './BookItem';

const meta = {
  component: BookItem,
} satisfies Meta<typeof BookItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  // @ts-expect-error storybookによる自動生成のためESLintエラーを無視
  args: {},
};
