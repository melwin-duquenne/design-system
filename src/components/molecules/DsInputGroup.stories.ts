import type { Meta, StoryObj } from '@storybook/vue3'
import DsInputGroup from './DsInputGroup.vue'

const meta: Meta<typeof DsInputGroup> = {
  title: 'Molecules/DsInputGroup',
  component: DsInputGroup,

  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Email',
    placeholder: 'nom@exemple.com',
  },
}

export const WithValue: Story = {
  args: {
    label: 'Nom complet',
    placeholder: 'Jean Dupont',
  },
  render: (args) => ({
    components: { DsInputGroup },
    setup() { return { args } },
    template: '<DsInputGroup v-bind="args" model-value="Jean Dupont" />',
  }),
}
