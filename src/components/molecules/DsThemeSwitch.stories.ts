import type { Meta, StoryObj } from '@storybook/vue3'
import DsThemeSwitch from './DsThemeSwitch.vue'

const meta: Meta<typeof DsThemeSwitch> = {
  title: 'Molecules/DsThemeSwitch',
  component: DsThemeSwitch,

}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
