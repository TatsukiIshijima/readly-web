import type { Meta, StoryObj } from '@storybook/react';

import BookGrid, { dummyBooks } from './BookGrid';

const meta = {
  component: BookGrid,
} satisfies Meta<typeof BookGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    books: dummyBooks,
    onClick: (id) => {
      console.log('Selected book ID:', id);
    },
  },
};
