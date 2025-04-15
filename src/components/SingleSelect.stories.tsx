import type { Meta, StoryObj } from '@storybook/react';

import SingleSelect from './SingleSelect';
import { ReadingStatusList } from '../types/ReadingStatus';

const meta = {
  component: SingleSelect,
} satisfies Meta<typeof SingleSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'label',
    items: [...ReadingStatusList],
    value: ReadingStatusList[0],
    onChange: () => {},
  },
};
