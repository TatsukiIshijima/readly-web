import type { Meta, StoryObj } from '@storybook/react';

import BasicTabs from './BasicTabs';

const meta = {
  component: BasicTabs,
} satisfies Meta<typeof BasicTabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [{ label: 'unread' }, { label: 'reading' }, { label: 'done' }],
    onChange: (newValue) => {
      console.log('Selected value:', newValue);
    },
  },
};
