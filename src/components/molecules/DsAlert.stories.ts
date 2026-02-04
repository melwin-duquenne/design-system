import type { Meta, StoryObj } from '@storybook/vue3'
import DsAlert from './DsAlert.vue'

const meta: Meta<typeof DsAlert> = {
  title: 'Molecules/DsAlert',
  component: DsAlert,

  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'warning', 'error', 'info'],
    },
    closable: { control: 'boolean' },
  },
  args: {
    default: 'Ceci est un message d\'alerte.',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Info: Story = {
  args: { variant: 'info', closable: false },
  render: (args) => ({
    components: { DsAlert },
    setup() { return { args } },
    template: '<DsAlert v-bind="args">Information importante.</DsAlert>',
  }),
}

export const Success: Story = {
  args: { variant: 'success', closable: false },
  render: (args) => ({
    components: { DsAlert },
    setup() { return { args } },
    template: '<DsAlert v-bind="args">Operation reussie !</DsAlert>',
  }),
}

export const Warning: Story = {
  args: { variant: 'warning', closable: false },
  render: (args) => ({
    components: { DsAlert },
    setup() { return { args } },
    template: '<DsAlert v-bind="args">Attention, verifiez vos donnees.</DsAlert>',
  }),
}

export const Error: Story = {
  args: { variant: 'error', closable: false },
  render: (args) => ({
    components: { DsAlert },
    setup() { return { args } },
    template: '<DsAlert v-bind="args">Une erreur est survenue.</DsAlert>',
  }),
}

export const Closable: Story = {
  args: { variant: 'info', closable: true },
  render: (args) => ({
    components: { DsAlert },
    setup() { return { args } },
    template: '<DsAlert v-bind="args">Cette alerte peut etre fermee.</DsAlert>',
  }),
}

export const NonClosable: Story = {
  args: { variant: 'info', closable: false },
  render: (args) => ({
    components: { DsAlert },
    setup() { return { args } },
    template: '<DsAlert v-bind="args">Cette alerte ne peut pas etre fermee.</DsAlert>',
  }),
}
