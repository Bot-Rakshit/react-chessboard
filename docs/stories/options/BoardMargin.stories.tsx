import type { Meta, StoryObj } from '@storybook/react';

import { Chessboard } from '../../../src';

const meta: Meta<typeof Chessboard> = {
  title: 'Options/Board Margin',
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

export const WithMargin: Story = {
  args: {
    options: {
      showMargin: true,
      marginOptions: {
        thickness: 25,
        color: '#f5f5f5',
      },
    },
  },
};

export const ColoredMargin: Story = {
  args: {
    options: {
      showMargin: true,
      marginOptions: {
        thickness: 25,
        color: '#e8f4fd',
      },
    },
  },
};

export const ThickMargin: Story = {
  args: {
    options: {
      showMargin: true,
      marginOptions: {
        thickness: 50,
        color: '#f5f5f5',
      },
    },
  },
};

export const MarginWithCustomNotation: Story = {
  args: {
    options: {
      showMargin: true,
      marginOptions: {
        thickness: 35,
        color: '#2c3e50',
      },
      marginNotationStyle: {
        fontSize: '14px',
        fontWeight: 'bold',
        color: '#ecf0f1',
        userSelect: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
  },
};

export const MarginWithoutCoordinates: Story = {
  args: {
    options: {
      showMargin: true,
      coordinatesOnMargin: false,
      marginOptions: {
        thickness: 20,
        color: '#34495e',
      },
    },
  },
};

export const MarginBlackOrientation: Story = {
  args: {
    options: {
      boardOrientation: 'black',
      showMargin: true,
      marginOptions: {
        thickness: 30,
        color: '#ecf0f1',
      },
    },
  },
};

export const MarginWithLeftBottomCoordinates: Story = {
  args: {
    options: {
      showMargin: true,
      coordinatesOnMargin: true,
      marginOptions: {
        thickness: 30,
        color: '#f8f9fa',
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
