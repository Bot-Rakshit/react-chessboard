import type { Meta, StoryObj } from '@storybook/react';

import { Chessboard } from '../../../src';

const meta: Meta<typeof Chessboard> = {
  title: 'Options/Notation Sides',
  component: Chessboard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LeftBottomOnly: Story = {
  args: {
    options: {
      showMargin: true,
      coordinatesOnMargin: true,
      marginOptions: {
        thickness: 25,
        color: '#f5f5f5',
      },
      notationSides: {
        top: false,
        bottom: true,
        left: true,
        right: false,
      },
    },
  },
};

export const TopRightOnly: Story = {
  args: {
    options: {
      showMargin: true,
      coordinatesOnMargin: true,
      marginOptions: {
        thickness: 25,
        color: '#f5f5f5',
      },
      notationSides: {
        top: true,
        bottom: false,
        left: false,
        right: true,
      },
    },
  },
};

export const AllSides: Story = {
  args: {
    options: {
      showMargin: true,
      coordinatesOnMargin: true,
      marginOptions: {
        thickness: 25,
        color: '#f5f5f5',
      },
      notationSides: {
        top: true,
        bottom: true,
        left: true,
        right: true,
      },
    },
  },
};

export const BottomOnly: Story = {
  args: {
    options: {
      showMargin: true,
      coordinatesOnMargin: true,
      marginOptions: {
        thickness: 25,
        color: '#f5f5f5',
      },
      notationSides: {
        top: false,
        bottom: true,
        left: false,
        right: false,
      },
    },
  },
};

export const LeftOnly: Story = {
  args: {
    options: {
      showMargin: true,
      coordinatesOnMargin: true,
      marginOptions: {
        thickness: 25,
        color: '#f5f5f5',
      },
      notationSides: {
        top: false,
        bottom: false,
        left: true,
        right: false,
      },
    },
  },
};
