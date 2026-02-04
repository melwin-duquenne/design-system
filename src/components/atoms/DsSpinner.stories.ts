import type { Meta, StoryObj } from '@storybook/vue3'
import DsSpinner from './DsSpinner.vue'

const meta: Meta<typeof DsSpinner> = {
  title: 'Atoms/DsSpinner',
  component: DsSpinner,

  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Small: Story = {
  args: { size: 'sm' },
}

export const Medium: Story = {
  args: { size: 'md' },
}

export const Large: Story = {
  args: { size: 'lg' },
}
