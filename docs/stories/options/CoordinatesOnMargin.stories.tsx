import type { Meta, StoryObj } from '@storybook/react';

import { Chessboard } from '../../../src';

const meta: Meta<typeof Chessboard> = {
  title: 'Options/Coordinates On Margin',
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

export const CoordinatesOnMargin: Story = {
  args: {
    options: {
      showMargin: true,
      coordinatesOnMargin: true,
      marginOptions: {
        thickness: 30,
        color: '#f8f9fa',
      },
    },
  },
};

export const CoordinatesOnSquares: Story = {
  args: {
    options: {
      showMargin: true,
      coordinatesOnMargin: false,
      showNotation: true,
      marginOptions: {
        thickness: 30,
        color: '#f8f9fa',
      },
    },
  },
};

export const BothCoordinatesAndMargin: Story = {
  args: {
    options: {
      showMargin: false,
      showNotation: true,
    },
  },
};

export const NoCoordinates: Story = {
  args: {
    options: {
      showMargin: true,
      coordinatesOnMargin: false,
      showNotation: false,
      marginOptions: {
        thickness: 30,
        color: '#f8f9fa',
      },
    },
  },
};

export const LeftBottomOnlyCoordinates: Story = {
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

export const AllSidesCoordinates: Story = {
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
