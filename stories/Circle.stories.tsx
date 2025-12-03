import type { Meta } from '@storybook/nextjs-vite';
import Circle from './Circle';

const meta: Meta<typeof Circle> = {
  component: Circle,
  title: 'Circle',
  argTypes: {
    variant: {
      control: { type: 'select' },
    },
  },
};

export default meta;

export const BaseCircle = {
  args: {
    variant: 'orange',
  },
};

export const GreenCircle = {
  args: {
    variant: 'green',
  },
};

export const YellowCircle = {
  args: {
    variant: 'yellow',
  },
};
