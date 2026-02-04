import type { Meta, StoryObj } from '@storybook/vue3'
import DsBadge from './DsBadge.vue'

const meta: Meta<typeof DsBadge> = {
  title: 'Atoms/DsBadge',
  component: DsBadge,

  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'neutral', 'success', 'warning', 'error', 'info'],
    },
  },
  args: {
    default: 'Badge',
  },
  render: (args) => ({
    components: { DsBadge },
    setup() {
      return { args }
    },
    template: '<DsBadge v-bind="args">{{ args.default }}</DsBadge>',
  }),
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: { variant: 'primary', default: 'Primary' },
}

export const Secondary: Story = {
  args: { variant: 'secondary', default: 'Secondary' },
}

export const Neutral: Story = {
  args: { variant: 'neutral', default: 'Neutral' },
}

export const Success: Story = {
  args: { variant: 'success', default: 'Success' },
}

export const Warning: Story = {
  args: { variant: 'warning', default: 'Warning' },
}

export const Error: Story = {
  args: { variant: 'error', default: 'Error' },
}

export const Info: Story = {
  args: { variant: 'info', default: 'Info' },
}
