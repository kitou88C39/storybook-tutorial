import type { Meta } from '@storybook/nextjs-vite';
import Circle from './Circle';

const meta: Meta<typeof Circle> = {
  component: Circle,
  title: 'Circle',
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['orange', 'green', 'yellow'],
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

export const GroupedCircles = {
  render: () => {
    <div>
      <Circle variant='orange' />
      <Circle variant='green' />
      <Circle variant='yellow' />
    </div>;
  },
};
