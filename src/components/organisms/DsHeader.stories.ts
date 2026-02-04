import type { Meta, StoryObj } from '@storybook/vue3'
import DsHeader from './DsHeader.vue'

const meta: Meta<typeof DsHeader> = {
  title: 'Organisms/DsHeader',
  component: DsHeader,

}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
