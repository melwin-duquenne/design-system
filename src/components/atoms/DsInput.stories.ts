import type { Meta, StoryObj } from '@storybook/vue3'
import DsInput from './DsInput.vue'

const meta: Meta<typeof DsInput> = {
  title: 'Atoms/DsInput',
  component: DsInput,

  argTypes: {
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    modelValue: { control: 'text' },
    ariaLabel: { control: 'text' },
  },
  args: {
    ariaLabel: 'Champ de saisie',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { ariaLabel: 'Champ de saisie' },
}

export const WithPlaceholder: Story = {
  args: { placeholder: 'Entrez du texte...', ariaLabel: 'Saisie texte' },
}

export const Disabled: Story = {
  args: { placeholder: 'Champ desactive', disabled: true, ariaLabel: 'Champ desactive' },
}

export const WithValue: Story = {
  args: { modelValue: 'Valeur saisie', ariaLabel: 'Champ avec valeur' },
}
