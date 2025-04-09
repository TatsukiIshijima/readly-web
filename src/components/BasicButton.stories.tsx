import type { Meta, StoryObj } from '@storybook/react';

import BasicButton from './BasicButton';

const meta = {
  component: BasicButton,
} satisfies Meta<typeof BasicButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  // @ts-ignore
  args: {
    id: 'id',
  },
};
