import type { Meta, StoryObj } from '@storybook/vue3'
import DsAvatar from './DsAvatar.vue'

const meta: Meta<typeof DsAvatar> = {
  title: 'Atoms/DsAvatar',
  component: DsAvatar,

  argTypes: {
    src: { control: 'text' },
    initials: { control: 'text' },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=3',
    size: 'md',
  },
}

export const WithInitials: Story = {
  args: { initials: 'AB', size: 'md' },
}

export const Fallback: Story = {
  args: { size: 'md' },
}

export const Small: Story = {
  args: { initials: 'SM', size: 'sm' },
}

export const Medium: Story = {
  args: { initials: 'MD', size: 'md' },
}

export const Large: Story = {
  args: { initials: 'LG', size: 'lg' },
}
