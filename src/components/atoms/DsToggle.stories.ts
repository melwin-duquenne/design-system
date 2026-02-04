import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import DsToggle from './DsToggle.vue'

const meta: Meta<typeof DsToggle> = {
  title: 'Atoms/DsToggle',
  component: DsToggle,

  argTypes: {
    modelValue: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { modelValue: false },
}

export const Checked: Story = {
  args: { modelValue: true },
}

export const Interactive: Story = {
  render: () => ({
    components: { DsToggle },
    setup() {
      const value = ref(false)
      return { value }
    },
    template: '<DsToggle v-model="value" />',
  }),
}
