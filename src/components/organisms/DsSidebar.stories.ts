import type { Meta, StoryObj } from '@storybook/vue3'
import DsSidebar from './DsSidebar.vue'

const meta: Meta<typeof DsSidebar> = {
  title: 'Organisms/DsSidebar',
  component: DsSidebar,

  argTypes: {
    sections: { control: 'object' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    sections: [
      { id: 'colors', label: 'Couleurs' },
      { id: 'typography', label: 'Typographie' },
      { id: 'spacing', label: 'Espacement' },
    ],
  },
}

export const WithSections: Story = {
  args: {
    sections: [
      { id: 'colors', label: 'Couleurs' },
      { id: 'typography', label: 'Typographie' },
      { id: 'spacing', label: 'Espacement' },
      { id: 'radius', label: 'Radius' },
      { id: 'shadows', label: 'Ombres' },
    ],
  },
}
