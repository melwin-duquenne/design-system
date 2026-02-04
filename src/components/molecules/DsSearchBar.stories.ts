import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import DsSearchBar from './DsSearchBar.vue'

const meta: Meta<typeof DsSearchBar> = {
  title: 'Molecules/DsSearchBar',
  component: DsSearchBar,

  argTypes: {
    placeholder: { control: 'text' },
    modelValue: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Rechercher...',
  },
}

export const WithPlaceholder: Story = {
  args: {
    placeholder: 'Tapez votre recherche ici...',
  },
}

export const Interactive: Story = {
  render: () => ({
    components: { DsSearchBar },
    setup() {
      const query = ref('')
      const searched = ref(false)
      function onSearch() { searched.value = true }
      return { query, searched, onSearch }
    },
    template: `
      <div>
        <DsSearchBar v-model="query" placeholder="Rechercher..." @search="onSearch" />
        <p style="margin-top: 8px; color: var(--color-text-secondary);">
          Valeur : {{ query }}
          <span v-if="searched"> — Recherche lancee !</span>
        </p>
      </div>
    `,
  }),
}
