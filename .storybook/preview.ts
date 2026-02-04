import type { Preview } from '@storybook/vue3-vite'
import '../src/assets/base.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'error',
      options: {
        rules: {
          'aria-prohibited-attr': { enabled: false },
        },
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#171717' },
      ],
    },
  },
  globalTypes: {
    theme: {
      description: 'Theme',
      toolbar: {
        title: 'Theme',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'light',
  },
  decorators: [
    (story, context) => {
      const theme = context.globals.theme || 'light'
      return {
        setup() {
          return { theme }
        },
        template: `
          <div :class="{ dark: theme === 'dark' }" style="padding: 1rem;">
            <story />
          </div>
        `,
      }
    },
  ],
}

export default preview
