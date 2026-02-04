import type { Meta, StoryObj } from '@storybook/vue3'
import DsButton from './DsButton.vue'

const meta: Meta<typeof DsButton> = {
  title: 'Atoms/DsButton',
  component: DsButton,

  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: {
    default: 'Button',
  },
  render: (args) => ({
    components: { DsButton },
    setup() {
      return { args }
    },
    template: '<DsButton v-bind="args">{{ args.default }}</DsButton>',
  }),
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { variant: 'primary', size: 'md', default: 'Button' },
}

export const Primary: Story = {
  args: { variant: 'primary', default: 'Primary' },
}

export const Secondary: Story = {
  args: { variant: 'secondary', default: 'Secondary' },
}

export const Outline: Story = {
  args: { variant: 'outline', default: 'Outline' },
}

export const Small: Story = {
  args: { variant: 'primary', size: 'sm', default: 'Small' },
}

export const Medium: Story = {
  args: { variant: 'primary', size: 'md', default: 'Medium' },
}

export const Large: Story = {
  args: { variant: 'primary', size: 'lg', default: 'Large' },
}

export const Disabled: Story = {
  args: { variant: 'primary', disabled: true, default: 'Disabled' },
}
