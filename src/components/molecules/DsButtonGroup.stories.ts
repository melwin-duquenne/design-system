import type { Meta, StoryObj } from '@storybook/vue3'
import DsButtonGroup from './DsButtonGroup.vue'
import DsButton from '../atoms/DsButton.vue'

const meta: Meta<typeof DsButtonGroup> = {
  title: 'Molecules/DsButtonGroup',
  component: DsButtonGroup,

}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { DsButtonGroup, DsButton },
    template: `
      <DsButtonGroup>
        <DsButton variant="primary">Gauche</DsButton>
        <DsButton variant="secondary">Centre</DsButton>
        <DsButton variant="outline">Droite</DsButton>
      </DsButtonGroup>
    `,
  }),
}

export const MultipleButtons: Story = {
  render: () => ({
    components: { DsButtonGroup, DsButton },
    template: `
      <DsButtonGroup>
        <DsButton variant="primary">Un</DsButton>
        <DsButton variant="primary">Deux</DsButton>
        <DsButton variant="primary">Trois</DsButton>
        <DsButton variant="primary">Quatre</DsButton>
      </DsButtonGroup>
    `,
  }),
}
