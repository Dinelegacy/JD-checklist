import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button} from './Button';

const meta: Meta<typeof Button> = {
  title: 'core-components/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;
export const Primary: Story = {
  args: {
    variant: 'primary',
    text: 'Button',
  },
};
