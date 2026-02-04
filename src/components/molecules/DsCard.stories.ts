import type { Meta, StoryObj } from '@storybook/vue3'
import DsCard from './DsCard.vue'

const meta: Meta<typeof DsCard> = {
  title: 'Molecules/DsCard',
  component: DsCard,

  argTypes: {
    shadow: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
  args: {
    default: 'Contenu de la carte',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { shadow: 'sm' },
  render: (args) => ({
    components: { DsCard },
    setup() { return { args } },
    template: '<DsCard v-bind="args"><p>Contenu de la carte par defaut.</p></DsCard>',
  }),
}

export const ShadowSm: Story = {
  args: { shadow: 'sm' },
  render: (args) => ({
    components: { DsCard },
    setup() { return { args } },
    template: '<DsCard v-bind="args"><p>Shadow small</p></DsCard>',
  }),
}

export const ShadowMd: Story = {
  args: { shadow: 'md' },
  render: (args) => ({
    components: { DsCard },
    setup() { return { args } },
    template: '<DsCard v-bind="args"><p>Shadow medium</p></DsCard>',
  }),
}

export const ShadowLg: Story = {
  args: { shadow: 'lg' },
  render: (args) => ({
    components: { DsCard },
    setup() { return { args } },
    template: '<DsCard v-bind="args"><p>Shadow large</p></DsCard>',
  }),
}
