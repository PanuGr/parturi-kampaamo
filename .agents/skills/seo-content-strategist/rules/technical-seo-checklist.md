---
title: Technical SEO for Astro + Netlify Sites
impact: HIGH
tags: technical-seo, astro, netlify, schema, sitemap, canonical, structured-data
---

# Technical SEO — Astro + Netlify

Stack-specific technical SEO checklist for every project built with Astro v6
on Netlify. Run this checklist as part of Phase 3.3 and again during Phase 4.5
post-build verification. Every item below is mandatory unless marked optional.

---

## 1. Canonical URLs

Every page must have a `<link rel="canonical">` that agrees with the `og:url`
Open Graph tag. They must point to the same URL.

```astro
---
const canonicalURL = new URL(Astro.url.pathname, Astro.site);
---
<link rel="canonical" href={canonicalURL} />
<meta property="og:url" content={canonicalURL} />
```

- [ ] `<link rel="canonical">` on every page
- [ ] `og:url` matches canonical exactly (same protocol, same trailing slash rule)

---

## 2. Title Tags

| Rule | Guideline |
|---|---|
| Length | 50–60 characters |
| Keyword placement | Primary keyword as close to the front as possible |
| Brand suffix | Optional, at the end — "Title \| Brand" |
| H1 relationship | Do not repeat H1 word-for-word — the title is for SERPs, the H1 is for the page |
| Uniqueness | Every page must have a unique title across the site |

```astro
<title>{frontmatter.title} | {SITE_NAME}</title>
```

- [ ] All titles 50–60 characters
- [ ] Primary keyword near the front
- [ ] No two pages share the same title

---

## 3. Meta Descriptions

- 150–160 characters
- Unique on every key page
- Describes the outcome or value — not the topic

```astro
<meta name="description" content={frontmatter.description} />
```

- [ ] Unique meta description on every page
- [ ] 150–160 characters
- [ ] Reads as a benefit, not a summary

---

## 4. Heading Structure

- One `<h1>` per page — no exceptions
- Logical heading order: H1 → H2 → H3, no skipping levels
- H1 should reflect the page's primary intent

- [ ] One `<h1>` per page
- [ ] Heading order is logical throughout

---

## 5. Open Graph & Twitter Cards

Every page that could be shared needs full OG and Twitter card tags.

```astro
<!-- Open Graph -->
<meta property="og:title" content={frontmatter.title} />
<meta property="og:description" content={frontmatter.description} />
<meta property="og:image" content={new URL(frontmatter.image, Astro.site)} />
<meta property="og:url" content={canonicalURL} />
<meta property="og:type" content="article" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={frontmatter.title} />
<meta name="twitter:description" content={frontmatter.description} />
<meta name="twitter:image" content={new URL(frontmatter.image, Astro.site)} />
```

- [ ] OG tags on every page
- [ ] Twitter card on every page
- [ ] OG image is 1200×630px

---

## 6. Images

Use `<Image />` from `astro:assets` for everything in `src/assets/`.
Never use raw `<img>` tags for content images.

```astro
---
import { Image } from 'astro:assets';
import heroImage from '../assets/hero.jpg';
---

<Image src={heroImage} alt="Descriptive alt text" width={1200} height={630} />
```

- [ ] All content images use `<Image />` from `astro:assets`
- [ ] Every image has a meaningful, descriptive `alt` attribute
- [ ] Decorative images use `alt=""`
- [ ] Hero / LCP image has `fetchpriority="high"` and no `loading="lazy"`
- [ ] Below-fold images have `loading="lazy"` and `decoding="async"`

---

## 7. First Paragraph Rule

For any page or blog post answering a question or explaining a topic: put a
one- or two-sentence definition or outcome in the first paragraph.

This signals to Google what the page is about immediately, and increases
the chance of winning a featured snippet.

```markdown
<!-- Good -->
Supabase is an open-source Firebase alternative built on PostgreSQL.
It provides authentication, real-time subscriptions, and file storage
out of the box.

<!-- Bad -->
In this post we will explore Supabase and what it can do for your project...
```

- [ ] Every post/page with an explanatory intent has a definition or outcome
  in the first paragraph

---

## 8. Internal Linking

- Use descriptive anchor text — never "click here" or "read more"
- Every page should be reachable within 2–3 clicks from the homepage
- New content should receive at least one internal link from an existing page

- [ ] All internal links use descriptive anchor text
- [ ] No orphan pages (every page linked from somewhere)

---

## 9. Sitemap & Robots.txt

Astro generates a sitemap automatically with `@astrojs/sitemap`.

```js
// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://your-site.com',
  integrations: [sitemap()],
});
```

`robots.txt` in `public/`:

```
User-agent: *
Allow: /
Sitemap: https://your-site.com/sitemap-index.xml
```

- [ ] `@astrojs/sitemap` configured with `site` URL
- [ ] `robots.txt` present in `public/` and references the sitemap
- [ ] No pages that should be indexed are blocked

---

## 10. Noindex the 404 Page

```astro
<!-- src/pages/404.astro -->
<meta name="robots" content="noindex" />
```

- [ ] 404 page has `<meta name="robots" content="noindex">`

---

## 11. URL Structure & Redirects

- Short, kebab-case, lowercase
- No underscores, no `.html` extensions, no trailing dates unless meaningful
- When a slug changes, add a 301 redirect in `astro.config.mjs`

```js
// astro.config.mjs
export default defineConfig({
  redirects: {
    '/old-slug': '/new-slug',
  },
});
```

- [ ] All URLs are kebab-case and lowercase
- [ ] Any changed slugs have 301 redirects configured
- [ ] No `.html` extensions in URLs

---

## 12. JSON-LD Schema — Article / BlogPosting

Use helper functions to keep schema consistent across all posts.

```js
// src/lib/schema.js

export function getArticleSchema(post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: {
      '@type': 'ImageObject',
      url: post.image,
      width: 1200,
      height: 630,
    },
    datePublished: post.publishDate,
    dateModified: post.updateDate ?? post.publishDate,
    author: getPersonSchema(),
    publisher: getOrganizationSchema(),
    mainEntityOfPage: post.canonical,
    wordCount: post.wordCount,
  };
}

export function getPersonSchema() {
  return {
    '@type': 'Person',
    name: '[Author Name]',
    url: '[Author URL]',
    jobTitle: '[Title]',
  };
}

export function getOrganizationSchema() {
  return {
    '@type': 'Organization',
    name: '[Company Name]',
    url: '[Site URL]',
    logo: {
      '@type': 'ImageObject',
      url: '[Logo URL]',
      width: 600,
      height: 60,
    },
  };
}
```

Inject in the `<head>` via a Layout component:

```astro
<script type="application/ld+json" set:html={JSON.stringify(schema)} />
```

- [ ] Article/BlogPosting schema on all blog posts
- [ ] `datePublished` and `dateModified` both set
- [ ] `author` uses Person schema
- [ ] `publisher` uses Organization schema with logo

---

## 13. BreadcrumbList Schema

```js
export function getBreadcrumbSchema(crumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.label,
      item: crumb.url,
    })),
  };
}
```

- [ ] BreadcrumbList schema on all pages below root level
- [ ] Breadcrumb nav in HTML matches the schema values

---

## 14. HowTo Schema (tutorial posts)

Use when a post walks through sequential steps. Requires at least 3 steps
for Google to render the rich result.

```js
export function getHowToSchema({ name, totalTime, steps }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    totalTime,   // ISO 8601 duration e.g. "PT30M"
    step: steps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step.name,
      text: step.text,
    })),
  };
}
```

A post can carry both `Article` and `HowTo` JSON-LD — Google reads both.

- [ ] HowTo schema added to all tutorial/step-by-step posts
- [ ] Minimum 3 steps defined
- [ ] `totalTime` in ISO 8601 format

---

## 15. FAQ Schema (optional but recommended)

Use when a page has a dedicated FAQ section with 2+ questions.

```js
export function getFAQSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
```

- [ ] FAQ schema added when a page has a structured FAQ section

---

## 16. Speakable JSON-LD (optional, forward-looking)

Marks content for voice answer engines (Google Assistant, Alexa).
Add to existing Article schema:

```js
speakable: {
  '@type': 'SpeakableSpecification',
  cssSelector: ['h1', '[data-speakable]'],
}
```

Tag TL;DR sections with `data-speakable` for voice-readable summaries.

---

## 17. Pagination: rel="prev" / rel="next"

Astro's pagination provides `page.url.prev` and `page.url.next` automatically.

```astro
---
const { page } = Astro.props;
---
<head>
  {page.url.prev && <link rel="prev" href={page.url.prev} />}
  {page.url.next && <link rel="next" href={page.url.next} />}
</head>
```

- [ ] Paginated routes have `rel="prev"` / `rel="next"` in `<head>`

---

## 18. llms.txt and llms-full.txt (optional but recommended)

Create `public/llms.txt` — a plain-text summary of the site for AI crawlers.
Create `public/llms-full.txt` — complete text content of all important pages.

No special Astro tooling needed; these are static files in `public/`.

- [ ] `llms.txt` present in `public/`
- [ ] `llms-full.txt` present in `public/` with full site content

---

## 19. Site Search with Pagefind (optional)

```bash
npm install --save-dev pagefind
```

```json
// package.json
"scripts": {
  "postbuild": "pagefind --site dist"
}
```

```astro
<!-- Mark indexable content -->
<article data-pagefind-body>
  <!-- page content -->
</article>
```

---

## Full Checklist Summary

- [ ] Canonical URL on every page, matches `og:url`
- [ ] Title tags: 50–60 chars, unique, keyword near front
- [ ] Meta descriptions: 150–160 chars, unique, benefit-focused
- [ ] One `<h1>` per page, logical heading order
- [ ] OG and Twitter cards on every page
- [ ] All content images via `<Image />` with `alt` text
- [ ] First paragraph is a definition or outcome (informational pages)
- [ ] Descriptive internal links, no orphan pages
- [ ] Sitemap configured and referenced in robots.txt
- [ ] 404 page has `noindex`
- [ ] URLs are kebab-case, changed slugs have 301 redirects
- [ ] Article JSON-LD on all blog posts
- [ ] BreadcrumbList schema on sub-pages
- [ ] HowTo schema on tutorial posts (min. 3 steps)
- [ ] FAQ schema where applicable
- [ ] `rel="prev"` / `rel="next"` on paginated routes
- [ ] `llms.txt` and `llms-full.txt` in `public/`
