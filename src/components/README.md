# Astro Components Documentation

## 🎯 **Component-Based Architecture**

The CSS architecture has been successfully converted from separate CSS files to Astro components with scoped styles. This approach provides better maintainability, reusability, and developer experience.

## 📦 **Available Components**

### **Core UI Components**

#### `Button.astro`

Reusable button component with multiple variants and sizes.

```astro
---
import Button from '../components/Button.astro';
---

<Button variant="primary" size="lg" href="/articles">
  Read More
</Button>
```

**Props:**

- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost'
- `size`: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
- `href`: Optional link URL
- `class`: Additional CSS classes

#### `Card.astro`

Flexible card component for displaying content.

```astro
---
import Card from '../components/Card.astro';
---

<Card variant="elevated" size="lg" href="/article">
  <div class="card-header">
    <h3 class="card-title">Card Title</h3>
  </div>
  <div class="card-body">
    <p class="card-content">Card content goes here</p>
  </div>
</Card>
```

**Props:**

- `variant`: 'default' | 'elevated' | 'glass' | 'gradient'
- `size`: 'sm' | 'md' | 'lg' | 'xl'
- `href`: Optional link URL
- `class`: Additional CSS classes

### **Layout Components**

#### `Layout.astro`

Provides layout utilities and container classes.

```astro
---
import Layout from '../components/Layout.astro';
---

<Layout variant="compact" class="my-custom-layout">
  <div class="content-wrapper">
    <!-- Your content here -->
  </div>
</Layout>
```

**Props:**

- `variant`: 'default' | 'compact' | 'full' | 'sidebar'
- `class`: Additional CSS classes

### **Content Components**

#### `Hero.astro`

Hero section component for landing pages.

```astro
---
import Hero from '../components/Hero.astro';
---

<Hero
  title="Welcome to My Blog"
  subtitle="Personal Development"
  description="Thoughts on technology, business, and life."
  image="/hero-image.jpg"
  showButton={true}
  buttonText="Explore Articles"
  buttonHref="/articles"
/>
```

**Props:**

- `title`: Hero title
- `subtitle`: Optional subtitle
- `description`: Optional description
- `image`: Optional hero image
- `imageAlt`: Image alt text
- `showButton`: Show call-to-action button
- `buttonText`: Button text
- `buttonHref`: Button link

#### `ArticleGrid.astro`

Grid layout for displaying articles.

```astro
---
import ArticleGrid from '../components/ArticleGrid.astro';

const articles = [
  {
    title: "Article Title",
    description: "Article description",
    date: "2024-01-01",
    url: "/article",
    image: "/article-image.jpg",
    tags: ["Technology", "Business"]
  }
];
---

<ArticleGrid
  articles={articles}
  columns={3}
  showImages={true}
  showTags={true}
  showDates={true}
/>
```

**Props:**

- `articles`: Array of article objects
- `columns`: 1 | 2 | 3 | 4
- `showImages`: Show article images
- `showTags`: Show article tags
- `showDates`: Show article dates

#### `FeaturedSection.astro`

Featured articles section with primary article.

```astro
---
import FeaturedSection from '../components/FeaturedSection.astro';

const featuredArticles = [
  {
    title: "Featured Article",
    description: "This is the main featured article",
    date: "2024-01-01",
    url: "/featured-article",
    image: "/featured-image.jpg",
    tags: ["Featured", "Technology"]
  }
];
---

<FeaturedSection
  title="Featured Articles"
  description="Latest and greatest content"
  articles={featuredArticles}
  showViewAll={true}
  viewAllUrl="/articles"
/>
```

**Props:**

- `title`: Section title
- `description`: Optional description
- `articles`: Array of article objects
- `showViewAll`: Show "View All" link
- `viewAllUrl`: URL for "View All" link

#### `TagsSection.astro`

Display tags with counts and links.

```astro
---
import TagsSection from '../components/TagsSection.astro';

const tags = [
  { name: "Technology", count: 15, url: "/tags/technology" },
  { name: "Business", count: 8, url: "/tags/business" }
];
---

<TagsSection
  tags={tags}
  title="Popular Tags"
  showCount={true}
  maxTags={10}
/>
```

**Props:**

- `tags`: Array of tag objects
- `title`: Optional section title
- `showCount`: Show tag counts
- `maxTags`: Maximum number of tags to display

## 🎨 **Design System Integration**

All components use the centralized design tokens from `src/styles/design-system/tokens.css`:

```css
/* Colors */
--color-primary: #98c7f1;
--color-secondary: #ee6f6b;

/* Spacing */
--space-4: 1rem;
--space-6: 1.5rem;

/* Typography */
--font-size-base: 18px;
--font-weight-semibold: 600;
```

## 🔧 **Benefits of Astro Components**

### **1. Scoped Styles**

- Styles are automatically scoped to each component
- No CSS conflicts between components
- Easier to maintain and debug

### **2. Type Safety**

- TypeScript interfaces for all props
- Better IDE support and autocomplete
- Catch errors at build time

### **3. Reusability**

- Components can be easily imported and reused
- Consistent styling across the site
- Props allow for customization

### **4. Performance**

- Only the styles you use are included
- Smaller CSS bundles
- Better caching

### **5. Developer Experience**

- HTML and CSS in one file
- Easier to understand component structure
- Better code organization

## 📝 **Usage Examples**

### **Creating a Homepage**

```astro
---
import Layout from '../components/Layout.astro';
import Hero from '../components/Hero.astro';
import FeaturedSection from '../components/FeaturedSection.astro';
import ArticleGrid from '../components/ArticleGrid.astro';
import TagsSection from '../components/TagsSection.astro';
---

<Layout variant="full">
  <Hero
    title="Welcome to My Blog"
    description="Thoughts on technology, business, and life."
    showButton={true}
    buttonText="Explore Articles"
    buttonHref="/articles"
  />

  <FeaturedSection
    title="Featured Articles"
    articles={featuredArticles}
    showViewAll={true}
  />

  <ArticleGrid
    articles={recentArticles}
    columns={3}
    showImages={true}
  />

  <TagsSection
    tags={popularTags}
    title="Popular Tags"
  />
</Layout>
```

### **Creating a Button with Custom Styling**

```astro
---
import Button from '../components/Button.astro';
---

<Button
  variant="primary"
  size="lg"
  href="/contact"
  class="my-custom-button"
>
  Get in Touch
</Button>
```

## 🚀 **Migration from CSS Files**

The following CSS components have been converted to Astro components:

- ✅ `button.css` → `Button.astro`
- ✅ `card.css` → `Card.astro`
- ✅ `hero.css` → `Hero.astro`
- ✅ `article-grid.css` → `ArticleGrid.astro`
- ✅ `featured-section.css` → `FeaturedSection.astro`
- ✅ `tags-section.css` → `TagsSection.astro`
- ✅ `layout.css` → `Layout.astro`

## 📚 **Best Practices**

### **1. Component Composition**

```astro
<!-- Good: Compose components -->
<Card variant="elevated">
  <div class="card-header">
    <h3 class="card-title">Title</h3>
  </div>
  <div class="card-body">
    <p>Content</p>
  </div>
</Card>
```

### **2. Props Usage**

```astro
<!-- Good: Use props for customization -->
<Button variant="primary" size="lg" href="/articles">
  Read More
</Button>
```

### **3. Scoped Styles**

```astro
<!-- Styles are automatically scoped -->
<style>
  .my-component {
    /* These styles only apply to this component */
  }
</style>
```

## 🔄 **Future Enhancements**

- Add more component variants
- Create component documentation site
- Add component testing
- Implement component playground
- Add animation components
- Create form components

---

**The component-based architecture provides a more maintainable, scalable, and developer-friendly approach to building the blog!** 🎉
