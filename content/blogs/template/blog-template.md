---
# Template: copy this file OUT into content/blogs/ to start a new post.
# (the template/ folder itself is excluded from the site — see src/content.config.ts)
# draft: true keeps a post off the live site (visible in dev with a "(Draft)" badge).
title: "Your post title, 60 characters max"
description: "One or two sentences used for SEO and link previews."
publishDate: "09 Jul 2026"
tags: ["agent", "inference"] # must come from APPROVED_TAGS in src/content.config.ts
draft: true
# pinned: true                 # uncomment to feature it on the homepage
# updatedDate: "10 Jul 2026"   # shows an "updated" note next to the date
# ogImage: "/my-social-card.png"
# coverImage:                  # put the image next to this file (use a folder + index.md)
#   src: "./cover.png"
#   alt: "Describe the image for screen readers"
---

_An italic opening line that frames the piece — a hook, a claim, or a question._

---

## First section

Short paragraphs read best. Links look like [this](https://example.com), and inline code
looks like `getAllPosts()`.

## Code

```ts title="example.ts"
export function hello(name: string) {
	return `Hi, ${name}`;
}
```

## Lists, quotes, callouts

- A point
- Another point

> A pull quote for emphasis.

:::note
The theme also supports callout boxes like this one (tip, note, important, caution, warning).
:::

## Wrapping up

End with the takeaway, or point readers at a related post.
