import type { Meta, StoryObj } from '@storybook/vue3'
import DsDivider from './DsDivider.vue'

const meta: Meta<typeof DsDivider> = {
  title: 'Atoms/DsDivider',
  component: DsDivider,

  argTypes: {
    direction: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  args: { direction: 'horizontal' },
}

export const Vertical: Story = {
  args: { direction: 'vertical' },
  decorators: [
    () => ({
      template: '<div style="display: flex; height: 80px; align-items: center;"><story /></div>',
    }),
  ],
}
