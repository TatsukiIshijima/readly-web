import type { Meta, StoryObj } from '@storybook/react';

import MultiSelect from './MultiSelect';
import { dummyGenres } from '../app/book/register/page';

const meta = {
  component: MultiSelect,
} satisfies Meta<typeof MultiSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'label',
    items: [...dummyGenres],
    selectedValue: [],
    onChange: () => {},
  },
};
