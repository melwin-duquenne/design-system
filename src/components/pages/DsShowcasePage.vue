<script setup lang="ts">
import { ref } from 'vue'
import DsHeader from '../organisms/DsHeader.vue'
import DsSidebar from '../organisms/DsSidebar.vue'
import DsTokenShowcase from '../organisms/DsTokenShowcase.vue'
import DsButton from '../atoms/DsButton.vue'
import DsInput from '../atoms/DsInput.vue'
import DsBadge from '../atoms/DsBadge.vue'
import DsTypography from '../atoms/DsTypography.vue'
import DsAvatar from '../atoms/DsAvatar.vue'
import DsDivider from '../atoms/DsDivider.vue'
import DsLink from '../atoms/DsLink.vue'
import DsSpinner from '../atoms/DsSpinner.vue'
import DsInputGroup from '../molecules/DsInputGroup.vue'
import DsAlert from '../molecules/DsAlert.vue'
import DsSearchBar from '../molecules/DsSearchBar.vue'
import DsButtonGroup from '../molecules/DsButtonGroup.vue'
import DsCard from '../molecules/DsCard.vue'

const sidebarSections = [
  { id: 'colors', label: 'Colors' },
  { id: 'typography', label: 'Typography' },
  { id: 'spacing', label: 'Spacing' },
  { id: 'radius', label: 'Border Radius' },
  { id: 'shadows', label: 'Shadows' },
  { id: 'buttons', label: 'Buttons' },
  { id: 'badges', label: 'Badges' },
  { id: 'inputs', label: 'Inputs' },
  { id: 'avatars', label: 'Avatars' },
  { id: 'dividers', label: 'Dividers' },
  { id: 'links', label: 'Links' },
  { id: 'spinners', label: 'Spinners' },
  { id: 'alerts', label: 'Alerts' },
  { id: 'search-bar', label: 'Search Bar' },
  { id: 'button-group', label: 'Button Group' },
  { id: 'cards', label: 'Cards' },
]

const brandColors = [
  { name: 'Orange', var: '--color-brand-orange' },
  { name: 'Blue', var: '--color-brand-blue' },
]

const neutralColors = [
  { name: '50', var: '--color-neutral-50' },
  { name: '100', var: '--color-neutral-100' },
  { name: '200', var: '--color-neutral-200' },
  { name: '300', var: '--color-neutral-300' },
  { name: '400', var: '--color-neutral-400' },
  { name: '500', var: '--color-neutral-500' },
  { name: '600', var: '--color-neutral-600' },
  { name: '700', var: '--color-neutral-700' },
  { name: '800', var: '--color-neutral-800' },
  { name: '900', var: '--color-neutral-900' },
  { name: 'White', var: '--color-neutral-white' },
]

const semanticColors = [
  { name: 'Text Primary', var: '--color-text-primary' },
  { name: 'Text Secondary', var: '--color-text-secondary' },
  { name: 'Action Primary', var: '--color-action-primary' },
  { name: 'Action Secondary', var: '--color-action-secondary' },
  { name: 'Background Primary', var: '--color-background-primary' },
  { name: 'Background Secondary', var: '--color-background-secondary' },
  { name: 'Border Default', var: '--color-border-default' },
]

const statusColors = [
  { name: 'Success', var: '--color-success' },
  { name: 'Warning', var: '--color-warning' },
  { name: 'Error', var: '--color-error' },
  { name: 'Info', var: '--color-info' },
]

const spacings = [
  { name: '0', var: '--spacing-0' },
  { name: 'xs', var: '--spacing-xs' },
  { name: 'sm', var: '--spacing-sm' },
  { name: 'md', var: '--spacing-md' },
  { name: 'lg', var: '--spacing-lg' },
  { name: 'xl', var: '--spacing-xl' },
  { name: '2xl', var: '--spacing-2xl' },
  { name: '3xl', var: '--spacing-3xl' },
]

const radiuses = [
  { name: 'none', var: '--radius-none' },
  { name: 'sm', var: '--radius-sm' },
  { name: 'md', var: '--radius-md' },
  { name: 'lg', var: '--radius-lg' },
  { name: 'xl', var: '--radius-xl' },
  { name: 'full', var: '--radius-full' },
]

const shadows = [
  { name: 'sm', var: '--shadow-sm' },
  { name: 'md', var: '--shadow-md' },
  { name: 'lg', var: '--shadow-lg' },
]

const searchValue = ref('')
</script>

<template>
  <div class="ds-showcase-page">
    <DsHeader />

    <div class="ds-showcase-page__layout">
      <DsSidebar :sections="sidebarSections" />

      <div class="ds-showcase-page__sections">
        <!-- Colors -->
        <DsTokenShowcase title="Colors" id="colors">
          <div class="color-group">
            <DsTypography as="body-sm" weight="bold">Brand</DsTypography>
            <div class="color-swatches">
              <div v-for="c in brandColors" :key="c.var" class="color-swatch">
                <div class="color-swatch__preview" :style="{ backgroundColor: `var(${c.var})` }" />
                <DsTypography as="body-sm">{{ c.name }}</DsTypography>
                <code class="token-name">{{ c.var }}</code>
              </div>
            </div>
          </div>

          <div class="color-group">
            <DsTypography as="body-sm" weight="bold">Neutral</DsTypography>
            <div class="color-swatches">
              <div v-for="c in neutralColors" :key="c.var" class="color-swatch">
                <div class="color-swatch__preview" :style="{ backgroundColor: `var(${c.var})` }" />
                <DsTypography as="body-sm">{{ c.name }}</DsTypography>
                <code class="token-name">{{ c.var }}</code>
              </div>
            </div>
          </div>

          <div class="color-group">
            <DsTypography as="body-sm" weight="bold">Semantic</DsTypography>
            <div class="color-swatches">
              <div v-for="c in semanticColors" :key="c.var" class="color-swatch">
                <div class="color-swatch__preview" :style="{ backgroundColor: `var(${c.var})` }" />
                <DsTypography as="body-sm">{{ c.name }}</DsTypography>
                <code class="token-name">{{ c.var }}</code>
              </div>
            </div>
          </div>

          <div class="color-group">
            <DsTypography as="body-sm" weight="bold">Status</DsTypography>
            <div class="color-swatches">
              <div v-for="c in statusColors" :key="c.var" class="color-swatch">
                <div class="color-swatch__preview" :style="{ backgroundColor: `var(${c.var})` }" />
                <DsTypography as="body-sm">{{ c.name }}</DsTypography>
                <code class="token-name">{{ c.var }}</code>
              </div>
            </div>
          </div>
        </DsTokenShowcase>

        <!-- Typography -->
        <DsTokenShowcase title="Typography" id="typography">
          <div class="typography-samples">
            <div class="typography-sample">
              <DsTypography as="h1">Heading H1</DsTypography>
              <code class="token-name">--typography-heading-h1</code>
            </div>
            <div class="typography-sample">
              <DsTypography as="h2">Heading H2</DsTypography>
              <code class="token-name">--typography-heading-h2</code>
            </div>
            <div class="typography-sample">
              <DsTypography as="body-md">Body Medium — The quick brown fox jumps over the lazy dog.</DsTypography>
              <code class="token-name">--typography-body-md</code>
            </div>
            <div class="typography-sample">
              <DsTypography as="body-sm">Body Small — The quick brown fox jumps over the lazy dog.</DsTypography>
              <code class="token-name">--typography-body-sm</code>
            </div>
            <div class="typography-sample">
              <DsTypography as="body-md" weight="regular">Regular (400)</DsTypography>
              <DsTypography as="body-md" weight="medium">Medium (500)</DsTypography>
              <DsTypography as="body-md" weight="bold">Bold (700)</DsTypography>
            </div>
          </div>
        </DsTokenShowcase>

        <!-- Spacing -->
        <DsTokenShowcase title="Spacing" id="spacing">
          <div class="spacing-samples">
            <div v-for="s in spacings" :key="s.var" class="spacing-sample">
              <code class="token-name">{{ s.name }}</code>
              <div class="spacing-bar" :style="{ width: `var(${s.var})` }" />
              <code class="token-name">{{ s.var }}</code>
            </div>
          </div>
        </DsTokenShowcase>

        <!-- Radius -->
        <DsTokenShowcase title="Border Radius" id="radius">
          <div class="radius-samples">
            <div v-for="r in radiuses" :key="r.var" class="radius-sample">
              <div class="radius-preview" :style="{ borderRadius: `var(${r.var})` }" />
              <DsTypography as="body-sm">{{ r.name }}</DsTypography>
              <code class="token-name">{{ r.var }}</code>
            </div>
          </div>
        </DsTokenShowcase>

        <!-- Shadows -->
        <DsTokenShowcase title="Shadows" id="shadows">
          <div class="shadow-samples">
            <div v-for="s in shadows" :key="s.var" class="shadow-sample">
              <div class="shadow-preview" :style="{ boxShadow: `var(${s.var})` }" />
              <DsTypography as="body-sm">{{ s.name }}</DsTypography>
              <code class="token-name">{{ s.var }}</code>
            </div>
          </div>
        </DsTokenShowcase>

        <!-- Buttons -->
        <DsTokenShowcase title="Buttons" id="buttons">
          <div class="button-samples">
            <div class="button-row">
              <DsTypography as="body-sm" weight="bold">Variants</DsTypography>
              <div class="button-group">
                <DsButton variant="primary">Primary</DsButton>
                <DsButton variant="secondary">Secondary</DsButton>
                <DsButton variant="outline">Outline</DsButton>
                <DsButton variant="primary" disabled>Disabled</DsButton>
              </div>
            </div>
            <div class="button-row">
              <DsTypography as="body-sm" weight="bold">Sizes</DsTypography>
              <div class="button-group">
                <DsButton variant="primary" size="sm">Small</DsButton>
                <DsButton variant="primary" size="md">Medium</DsButton>
                <DsButton variant="primary" size="lg">Large</DsButton>
              </div>
            </div>
          </div>
        </DsTokenShowcase>

        <!-- Badges -->
        <DsTokenShowcase title="Badges" id="badges">
          <div class="badge-samples">
            <DsBadge variant="primary">Primary</DsBadge>
            <DsBadge variant="secondary">Secondary</DsBadge>
            <DsBadge variant="neutral">Neutral</DsBadge>
            <DsBadge variant="success">Success</DsBadge>
            <DsBadge variant="warning">Warning</DsBadge>
            <DsBadge variant="error">Error</DsBadge>
            <DsBadge variant="info">Info</DsBadge>
          </div>
        </DsTokenShowcase>

        <!-- Inputs -->
        <DsTokenShowcase title="Inputs" id="inputs">
          <div class="input-samples">
            <DsInputGroup label="Label" placeholder="Placeholder text..." />
            <DsInputGroup label="Disabled" placeholder="Disabled input..." />
          </div>
        </DsTokenShowcase>

        <!-- Avatars -->
        <DsTokenShowcase title="Avatars" id="avatars">
          <div class="avatar-samples">
            <div class="avatar-row">
              <DsTypography as="body-sm" weight="bold">Sizes</DsTypography>
              <div class="avatar-group">
                <DsAvatar initials="SM" size="sm" />
                <DsAvatar initials="MD" size="md" />
                <DsAvatar initials="LG" size="lg" />
              </div>
            </div>
            <div class="avatar-row">
              <DsTypography as="body-sm" weight="bold">Initials</DsTypography>
              <div class="avatar-group">
                <DsAvatar initials="AB" />
                <DsAvatar initials="CD" />
                <DsAvatar />
              </div>
            </div>
          </div>
        </DsTokenShowcase>

        <!-- Dividers -->
        <DsTokenShowcase title="Dividers" id="dividers">
          <div class="divider-samples">
            <DsTypography as="body-sm" weight="bold">Horizontal</DsTypography>
            <DsDivider direction="horizontal" />
            <DsTypography as="body-sm" weight="bold">Vertical</DsTypography>
            <div class="divider-vertical-demo">
              <span>Left</span>
              <DsDivider direction="vertical" />
              <span>Right</span>
            </div>
          </div>
        </DsTokenShowcase>

        <!-- Links -->
        <DsTokenShowcase title="Links" id="links">
          <div class="link-samples">
            <DsLink href="#" variant="primary">Primary Link</DsLink>
            <DsLink href="#" variant="secondary">Secondary Link</DsLink>
          </div>
        </DsTokenShowcase>

        <!-- Spinners -->
        <DsTokenShowcase title="Spinners" id="spinners">
          <div class="spinner-samples">
            <DsSpinner size="sm" />
            <DsSpinner size="md" />
            <DsSpinner size="lg" />
          </div>
        </DsTokenShowcase>

        <!-- Alerts -->
        <DsTokenShowcase title="Alerts" id="alerts">
          <div class="alert-samples">
            <DsAlert variant="success" closable>Operation completed successfully.</DsAlert>
            <DsAlert variant="warning" closable>Please review your input carefully.</DsAlert>
            <DsAlert variant="error" closable>An error occurred. Please try again.</DsAlert>
            <DsAlert variant="info">This is an informational message.</DsAlert>
          </div>
        </DsTokenShowcase>

        <!-- Search Bar -->
        <DsTokenShowcase title="Search Bar" id="search-bar">
          <div class="search-bar-samples">
            <DsSearchBar v-model="searchValue" placeholder="Search components..." />
          </div>
        </DsTokenShowcase>

        <!-- Button Group -->
        <DsTokenShowcase title="Button Group" id="button-group">
          <div class="button-group-samples">
            <DsButtonGroup>
              <DsButton variant="primary">Left</DsButton>
              <DsButton variant="primary">Center</DsButton>
              <DsButton variant="primary">Right</DsButton>
            </DsButtonGroup>
            <DsButtonGroup>
              <DsButton variant="outline">One</DsButton>
              <DsButton variant="outline">Two</DsButton>
            </DsButtonGroup>
          </div>
        </DsTokenShowcase>

        <!-- Cards -->
        <DsTokenShowcase title="Cards" id="cards">
          <div class="card-samples">
            <DsCard shadow="sm">
              <DsTypography as="body-sm" weight="bold">Shadow SM</DsTypography>
              <DsTypography as="body-sm">A card with a small shadow.</DsTypography>
            </DsCard>
            <DsCard shadow="md">
              <DsTypography as="body-sm" weight="bold">Shadow MD</DsTypography>
              <DsTypography as="body-sm">A card with a medium shadow.</DsTypography>
            </DsCard>
            <DsCard shadow="lg">
              <DsTypography as="body-sm" weight="bold">Shadow LG</DsTypography>
              <DsTypography as="body-sm">A card with a large shadow.</DsTypography>
            </DsCard>
          </div>
        </DsTokenShowcase>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ds-showcase-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-lg);
}

.ds-showcase-page__layout {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: var(--spacing-xl);
  align-items: start;
}

.ds-showcase-page__sections {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2xl);
}

/* Colors */
.color-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.color-swatches {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
}

.color-swatch {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-xs);
}

.color-swatch__preview {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border-default);
}

/* Typography */
.typography-samples {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.typography-sample {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

/* Spacing */
.spacing-samples {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.spacing-sample {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.spacing-bar {
  height: 16px;
  min-width: 2px;
  background-color: var(--color-action-primary);
  border-radius: var(--radius-sm);
}

/* Radius */
.radius-samples {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-lg);
}

.radius-sample {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-xs);
}

.radius-preview {
  width: 64px;
  height: 64px;
  background-color: var(--color-action-primary);
}

/* Shadows */
.shadow-samples {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-lg);
}

.shadow-sample {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-sm);
}

.shadow-preview {
  width: 80px;
  height: 80px;
  border-radius: var(--radius-md);
  background-color: var(--color-background-primary);
}

/* Buttons */
.button-samples {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.button-row {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  align-items: center;
}

/* Badges */
.badge-samples {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  align-items: center;
}

/* Inputs */
.input-samples {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  max-width: 360px;
}

/* Avatars */
.avatar-samples {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.avatar-row {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.avatar-group {
  display: flex;
  gap: var(--spacing-sm);
  align-items: center;
}

/* Dividers */
.divider-samples {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.divider-vertical-demo {
  display: flex;
  align-items: center;
  gap: 0;
  height: 40px;
  color: var(--color-text-primary);
  font-family: var(--typography-font-family-base), sans-serif;
}

/* Links */
.link-samples {
  display: flex;
  gap: var(--spacing-lg);
  align-items: center;
}

/* Spinners */
.spinner-samples {
  display: flex;
  gap: var(--spacing-lg);
  align-items: center;
}

/* Alerts */
.alert-samples {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

/* Search Bar */
.search-bar-samples {
  max-width: 480px;
}

/* Button Group */
.button-group-samples {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  align-items: flex-start;
}

/* Cards */
.card-samples {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-md);
}

/* Token name code styling */
.token-name {
  font-size: 11px;
  color: var(--color-text-secondary);
  background-color: var(--color-background-secondary);
  padding: 1px 4px;
  border-radius: var(--radius-sm);
}
</style>
