import type { Meta, StoryObj } from '@storybook/vue3'
import DsNavItem from './DsNavItem.vue'

const meta: Meta<typeof DsNavItem> = {
  title: 'Molecules/DsNavItem',
  component: DsNavItem,

  argTypes: {
    label: { control: 'text' },
    active: { control: 'boolean' },
    href: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Navigation',
    active: false,
    href: '#',
  },
}

export const Active: Story = {
  args: {
    label: 'Page active',
    active: true,
    href: '#',
  },
}

export const WithHref: Story = {
  args: {
    label: 'Lien externe',
    active: false,
    href: '#section',
  },
}
