# Task 05: Responsive Design

**Difficulty:** ★★☆☆☆ (Beginner-Intermediate)
**Module:** CSS Deep Dive
**Time estimate:** 1-2 hours
**Builds on:** [Task 04](../04-flexbox-layout/TASK.md)

## What You'll Learn

- What responsive design is and why it matters
- The viewport meta tag
- CSS media queries
- Mobile-first approach
- Responsive images
- CSS units: `rem`, `em`, `%`, `vw`, `vh`

## Background

More than half of all web traffic comes from mobile phones. **Responsive design** means your website looks good on any screen size - from a small phone to a huge monitor.

### How Media Queries Work

Media queries let you apply CSS rules only when certain conditions are met:

```css
/* Default styles (mobile first) */
.container {
    flex-direction: column;  /* Stack vertically on mobile */
}

/* Tablet and up (768px+) */
@media (min-width: 768px) {
    .container {
        flex-direction: row;  /* Side by side on tablet */
    }
}

/* Desktop and up (1024px+) */
@media (min-width: 1024px) {
    .container {
        max-width: 1200px;   /* Limit width on desktop */
        margin: 0 auto;      /* Center on large screens */
    }
}
```

### Common Breakpoints

| Device | Width |
|--------|-------|
| Mobile | < 768px |
| Tablet | 768px - 1023px |
| Desktop | 1024px+ |

## Your Task

Take your project showcase page from Task 04 and make it fully responsive. Create the files in this folder.

### Mobile Layout (< 768px)
- Navigation: hamburger menu concept (stack links vertically, hide/show is bonus)
- Hero: smaller font sizes, full-width button
- Cards: single column, full width
- All text readable without zooming

### Tablet Layout (768px - 1023px)
- Navigation: horizontal links
- Cards: 2 cards per row

### Desktop Layout (1024px+)
- Navigation: horizontal with spacing
- Cards: 3 cards per row
- Content has a max-width and is centered

### Other Requirements

1. **Add the viewport meta tag** in `<head>`:
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```

2. **Use relative units** instead of fixed pixels:
   - `rem` for font sizes and spacing
   - `%` or `vw` for widths
   - `em` for component-relative sizes

3. **Make images responsive:**
   ```css
   img {
       max-width: 100%;
       height: auto;
   }
   ```

4. **No horizontal scrollbar** at any screen size

## Step-by-Step Guide

1. Copy your project from Task 04 (or start fresh)
2. Add the viewport meta tag
3. Make all images responsive (see above CSS)
4. Start with mobile styles (no media query needed - this is your default)
5. Add a `@media (min-width: 768px)` block for tablet styles
6. Add a `@media (min-width: 1024px)` block for desktop styles
7. Test by resizing your browser window
8. Use Chrome DevTools device toolbar (Ctrl+Shift+M or Cmd+Shift+M) to simulate devices

## How to Test

1. **Resize browser window** - drag the edge to different widths
2. **Chrome DevTools** - press F12, then click the device toolbar icon (phone/tablet icon)
3. Try these devices: iPhone SE, iPad, Desktop (1920px)
4. Check that nothing overflows or breaks at any width

## Acceptance Criteria

- [ ] Has viewport meta tag
- [ ] Has at least 2 media query breakpoints (768px, 1024px)
- [ ] Mobile: cards stack in single column
- [ ] Tablet: cards show 2 per row
- [ ] Desktop: cards show 3 per row
- [ ] Images are responsive (don't overflow their container)
- [ ] No horizontal scrollbar at any screen size
- [ ] Text is readable on mobile without zooming
- [ ] Uses relative units (`rem`, `%`) instead of only `px`
- [ ] Navigation adapts to screen size

## Bonus Challenges

- Build a working hamburger menu (show/hide nav links on mobile)
- Add `@media (prefers-color-scheme: dark)` for dark mode support
- Use CSS Grid (`display: grid`) instead of Flexbox for the card layout
- Add a `<picture>` element that loads different image sizes for different screens
- Test with a real phone by running a local server: `npx serve .` in terminal, then open the IP address on your phone

## Using Claude Code

- **"How do I test on mobile?"** - Ask Claude: `"How can I test responsive design in Chrome DevTools?"`
- **"My layout breaks at 500px"** - Ask Claude: `"My page has a horizontal scrollbar at 500px width. Here's my CSS: [paste]. How do I fix it?"`
- **"I don't understand rem vs px"** - Ask Claude: `"Explain the difference between px, rem, em, %, vw, and vh in CSS. When should I use each one?"`
- **"How do I make a hamburger menu?"** - Ask Claude: `"Show me the simplest CSS-only hamburger menu for mobile navigation"`
- **Pro tip:** In Chrome DevTools, you can add custom devices to test specific screen sizes
