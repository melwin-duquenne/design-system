import type { Meta, StoryObj } from '@storybook/vue3'
import DsTypography from './DsTypography.vue'

const meta: Meta<typeof DsTypography> = {
  title: 'Atoms/DsTypography',
  component: DsTypography,

  argTypes: {
    as: {
      control: 'select',
      options: ['h1', 'h2', 'body-md', 'body-sm'],
    },
    weight: {
      control: 'select',
      options: ['regular', 'medium', 'bold'],
    },
  },
  args: {
    default: 'The quick brown fox jumps over the lazy dog',
  },
  render: (args) => ({
    components: { DsTypography },
    setup() {
      return { args }
    },
    template: '<DsTypography v-bind="args">{{ args.default }}</DsTypography>',
  }),
}

export default meta
type Story = StoryObj<typeof meta>

export const H1: Story = {
  args: { as: 'h1', default: 'Heading 1' },
}

export const H2: Story = {
  args: { as: 'h2', default: 'Heading 2' },
}

export const BodyMd: Story = {
  args: { as: 'body-md', default: 'Body medium — 16px / 24px line-height' },
}

export const BodySm: Story = {
  args: { as: 'body-sm', default: 'Body small — 14px / 20px line-height' },
}

export const WeightRegular: Story = {
  args: { as: 'body-md', weight: 'regular', default: 'Regular weight (400)' },
}

export const WeightMedium: Story = {
  args: { as: 'body-md', weight: 'medium', default: 'Medium weight (500)' },
}

export const WeightBold: Story = {
  args: { as: 'body-md', weight: 'bold', default: 'Bold weight (700)' },
}
