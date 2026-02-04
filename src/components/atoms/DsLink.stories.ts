import type { Meta, StoryObj } from '@storybook/vue3'
import DsLink from './DsLink.vue'

const meta: Meta<typeof DsLink> = {
  title: 'Atoms/DsLink',
  component: DsLink,

  argTypes: {
    href: { control: 'text' },
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
  },
  args: {
    href: '#',
    default: 'Link text',
  },
  render: (args) => ({
    components: { DsLink },
    setup() {
      return { args }
    },
    template: '<DsLink v-bind="args">{{ args.default }}</DsLink>',
  }),
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: { variant: 'primary', href: '#', default: 'Primary link' },
}

export const Secondary: Story = {
  args: { variant: 'secondary', href: '#', default: 'Secondary link' },
}
