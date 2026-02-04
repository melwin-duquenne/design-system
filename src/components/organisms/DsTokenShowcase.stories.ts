import type { Meta, StoryObj } from '@storybook/vue3'
import DsTokenShowcase from './DsTokenShowcase.vue'

const meta: Meta<typeof DsTokenShowcase> = {
  title: 'Organisms/DsTokenShowcase',
  component: DsTokenShowcase,

  argTypes: {
    title: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { title: 'Couleurs' },
  render: (args) => ({
    components: { DsTokenShowcase },
    setup() { return { args } },
    template: `
      <DsTokenShowcase v-bind="args">
        <div style="display: flex; gap: 8px;">
          <div style="width: 48px; height: 48px; border-radius: 8px; background: var(--color-brand-orange);"></div>
          <div style="width: 48px; height: 48px; border-radius: 8px; background: var(--color-brand-blue);"></div>
          <div style="width: 48px; height: 48px; border-radius: 8px; background: var(--color-status-success);"></div>
          <div style="width: 48px; height: 48px; border-radius: 8px; background: var(--color-status-error);"></div>
        </div>
      </DsTokenShowcase>
    `,
  }),
}

export const WithContent: Story = {
  args: { title: 'Espacement' },
  render: (args) => ({
    components: { DsTokenShowcase },
    setup() { return { args } },
    template: `
      <DsTokenShowcase v-bind="args">
        <div style="display: flex; flex-direction: column; gap: 4px;">
          <div style="height: 8px; background: var(--color-action-primary); width: var(--spacing-xs);"></div>
          <div style="height: 8px; background: var(--color-action-primary); width: var(--spacing-sm);"></div>
          <div style="height: 8px; background: var(--color-action-primary); width: var(--spacing-md);"></div>
          <div style="height: 8px; background: var(--color-action-primary); width: var(--spacing-lg);"></div>
          <div style="height: 8px; background: var(--color-action-primary); width: var(--spacing-xl);"></div>
        </div>
      </DsTokenShowcase>
    `,
  }),
}
