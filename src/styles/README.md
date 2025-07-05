# CSS Architecture Documentation

This project uses **ITCSS (Inverted Triangle CSS)** architecture to organize styles by specificity and maintainability.

## 🎉 Architecture Refactoring Complete!

The CSS architecture has been successfully refactored from a monolithic structure to a modern, maintainable component-based system. All legacy files have been removed and styles are now organized following ITCSS principles.

### ✅ **Refactoring Status: COMPLETE**

- **All legacy CSS files removed** (home.css, article.css, post.css, etc.)
- **Component-based architecture** implemented
- **Design tokens** centralized and consistent
- **ITCSS layer structure** properly organized
- **Visual consistency** maintained throughout

## Architecture Overview

```
src/styles/
├── design-system/
│   └── tokens.css                    # Design tokens (colors, spacing, typography)
├── base/
│   ├── normalize.css                 # CSS normalize
│   ├── reset.css                    # Modern CSS reset
│   └── typography.css               # Typography system
├── utilities/
│   ├── spacing.css                  # Spacing utilities
│   └── layout.css                   # Layout utilities
├── components/
│   ├── button.css                   # Button component
│   ├── card.css                     # Card component
│   ├── compact-header.css           # Header component
│   ├── hero.css                     # Hero section component
│   ├── featured-section.css         # Featured section component
│   ├── article-grid.css             # Article grid component
│   ├── tags-section.css             # Tags section component
│   ├── about-section.css            # About section component
│   ├── article.css                  # Article component
│   ├── post.css                     # Post component
│   ├── post-template-details.css    # Post template details component
│   ├── page-template-details.css    # Page template details component
│   ├── menu.css                     # Menu component
│   ├── links.css                    # Links component
│   ├── sidebar.css                  # Sidebar component
│   ├── about.css                    # About component
│   ├── syntax-highlighting.css      # Code syntax highlighting
│   └── layout.css                   # Layout utilities component
├── global.css                       # Main entry point
└── README.md                        # This file
```

## Layer Structure (ITCSS)

### 1. Settings Layer

- **Purpose**: Global variables and configuration
- **Files**: `design-system/tokens.css`
- **Specificity**: 0,0,0,0

### 2. Tools Layer

- **Purpose**: Mixins, functions, and preprocessor tools
- **Files**: None (using vanilla CSS)
- **Specificity**: 0,0,0,0

### 3. Generic Layer

- **Purpose**: Reset, normalize, and base styles
- **Files**: `base/normalize.css`, `base/reset.css`
- **Specificity**: 0,0,0,0

### 4. Elements Layer

- **Purpose**: Unclassed HTML elements
- **Files**: `base/typography.css`
- **Specificity**: 0,0,0,1

### 5. Objects Layer

- **Purpose**: Layout and structural patterns
- **Files**: None (using utilities instead)
- **Specificity**: 0,0,1,0

### 6. Components Layer

- **Purpose**: Reusable UI components
- **Files**: `components/*.css`
- **Specificity**: 0,1,0,0

### 7. Utilities Layer

- **Purpose**: Helper classes and overrides
- **Files**: `utilities/*.css`
- **Specificity**: 1,0,0,0

## Design Tokens

All design values are centralized in `design-system/tokens.css`:

### Colors

```css
--color-primary: #98c7f1;
--color-secondary: #ee6f6b;
--color-background: #041423;
--color-white: #ffffff;
```

### Spacing

```css
--space-1: 0.25rem; /* 4px */
--space-2: 0.5rem; /* 8px */
--space-4: 1rem; /* 16px */
--space-6: 1.5rem; /* 24px */
--space-8: 2rem; /* 32px */
```

### Typography

```css
--font-size-base: 18px;
--font-size-lg: 22px;
--font-weight-medium: 500;
--font-weight-semibold: 600;
```

### Layout

```css
--layout-width: 1200px;
--layout-width-compact: 985px;
--radius-lg: 0.5rem;
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
```

## Components

### Button Component

```html
<button class="btn btn-primary btn-lg">Primary Button</button>
<button class="btn btn-secondary btn-sm">Secondary Button</button>
<button class="btn btn-outline btn-md">Outline Button</button>
```

**Variants**: `btn-primary`, `btn-secondary`, `btn-outline`, `btn-ghost`
**Sizes**: `btn-xs`, `btn-sm`, `btn-md`, `btn-lg`, `btn-xl`

### Card Component

```html
<div class="card card-elevated card-lg">
  <div class="card-header">
    <h3 class="card-title">Card Title</h3>
  </div>
  <div class="card-body">
    <p>Card content goes here</p>
  </div>
</div>
```

**Variants**: `card-default`, `card-elevated`, `card-glass`, `card-gradient`
**Sizes**: `card-sm`, `card-md`, `card-lg`, `card-xl`

## Utilities

### Spacing Utilities

```css
.m-4 {
  margin: var(--space-4);
}
.px-6 {
  padding-left: var(--space-6);
  padding-right: var(--space-6);
}
.mt-8 {
  margin-top: var(--space-8);
}
.mb-12 {
  margin-bottom: var(--space-12);
}
```

### Layout Utilities

```css
.flex {
  display: flex;
}
.grid {
  display: grid;
}
.justify-center {
  justify-content: center;
}
.items-center {
  align-items: center;
}
.gap-4 {
  gap: var(--space-4);
}
```

### Responsive Utilities

```css
.sm:flex {
  /* flex on small screens and up */
}
.md:grid-cols-2 {
  /* 2 columns on medium screens and up */
}
.lg:hidden {
  /* hidden on large screens and up */
}
```

## Best Practices

### 1. Use Design Tokens

❌ **Don't** use hardcoded values:

```css
.button {
  padding: 16px;
  color: #98c7f1;
}
```

✅ **Do** use design tokens:

```css
.button {
  padding: var(--space-4);
  color: var(--color-primary);
}
```

### 2. Component Composition

❌ **Don't** create overly specific components:

```css
.hero-button {
  /* Specific to hero section */
}
```

✅ **Do** create reusable components:

```css
.btn-primary {
  /* Reusable across the site */
}
```

### 3. Utility-First Approach

❌ **Don't** create custom CSS for simple layouts:

```css
.article-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
```

✅ **Do** use utility classes:

```html
<div class="grid grid-cols-3 gap-6">
  <!-- Article content -->
</div>
```

### 4. Responsive Design

❌ **Don't** use device-specific breakpoints:

```css
@media (max-width: 768px) {
  /* Mobile styles */
}
```

✅ **Do** use semantic breakpoints:

```css
@media (max-width: var(--breakpoint-md)) {
  /* Tablet and down styles */
}
```

## Adding New Components

1. **Create the component file**:

   ```bash
   touch src/styles/components/my-component.css
   ```

2. **Follow the component structure**:

   ```css
   /* ==========================================================================
      MY COMPONENT
      ========================================================================== */

   .my-component {
     /* Base styles */
   }

   /* Variants */
   .my-component--variant {
     /* Variant styles */
   }

   /* Responsive */
   @media (max-width: 768px) {
     .my-component {
       /* Mobile styles */
     }
   }
   ```

3. **Import in global.css**:

   ```css
   @import url("components/my-component.css");
   ```

4. **Use in components**:

   ```astro
   ---
   import "../styles/components/my-component.css";
   ---

   <div class="my-component">
     <!-- Component content -->
   </div>
   ```

## Migration Guide

### Phase 1: Design System Foundation ✅

- [x] Create design tokens (`tokens.css`)
- [x] Establish base layer (reset, normalize, typography)
- [x] Add utility classes (spacing, layout)

### Phase 2: Component Extraction ✅

- [x] Extract CompactHeader component
- [x] Extract Button component
- [x] Extract Card component
- [x] Extract Hero component from `home.css`
- [x] Extract Featured Section component from `home.css`
- [x] Extract Article Grid component from `home.css`
- [x] Extract Tags Section component from `home.css`
- [x] Extract About Section component from `home.css`
- [x] Extract Article component from `article.css`
- [x] Extract Post component from `post.css`
- [x] Extract Post Template Details component from `posttemplatedetails.css`
- [x] Extract Page Template Details component from `pagetemplatedetails.css`
- [x] Extract Menu component from `menu.css`
- [x] Extract Links component from `links.css`
- [x] Extract Sidebar component from `sidebar.css`
- [x] Extract About component from `about.css`
- [x] Extract Syntax Highlighting component from `base/highlight.css`
- [x] Extract Layout component from various legacy files

### Phase 3: Cleanup ✅

- [x] Remove all legacy CSS files
- [x] Update global.css import structure
- [x] Ensure all components use design tokens
- [x] Verify visual consistency

### From Legacy Styles

1. **Extract design tokens** from existing styles
2. **Create component files** for reusable patterns
3. **Replace hardcoded values** with design tokens
4. **Use utility classes** for simple layouts
5. **Remove duplicate styles** and consolidate

### Example Migration

**Before**:

```css
.hero-button {
  background: linear-gradient(135deg, #98c7f1 0%, #ee6f6b 100%);
  padding: 12px 24px;
  border-radius: 8px;
  color: white;
}
```

**After**:

```css
.btn-primary {
  background: var(--gradient-primary);
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-lg);
  color: var(--color-white);
}
```

## Performance Considerations

1. **CSS Custom Properties** are well-supported and performant
2. **Utility classes** reduce CSS bundle size
3. **Component composition** prevents style duplication
4. **Design tokens** ensure consistency and maintainability

## Browser Support

- **CSS Custom Properties**: IE11+ (with polyfill)
- **CSS Grid**: IE11+ (with autoprefixer)
- **Flexbox**: IE10+ (with autoprefixer)
- **Backdrop Filter**: Modern browsers (graceful degradation)

## Tools and Workflow

### Recommended Tools

- **Stylelint**: CSS linting and formatting
- **PostCSS**: CSS processing and optimization
- **Autoprefixer**: Vendor prefixing
- **CSS Purge**: Remove unused styles

### Development Workflow

1. **Design tokens first**: Define colors, spacing, typography
2. **Components second**: Create reusable UI patterns
3. **Utilities third**: Add helper classes for layout
4. **Page-specific styles last**: Only when necessary

## Contributing

When contributing to the CSS architecture:

1. **Follow the ITCSS structure**
2. **Use design tokens** for all values
3. **Create reusable components** when possible
4. **Document new components** in this README
5. **Test across browsers** and devices
6. **Consider performance** and bundle size
