# Task 04: Flexbox Layout

**Difficulty:** ★★☆☆☆ (Beginner-Intermediate)
**Module:** CSS Deep Dive
**Time estimate:** 1-2 hours

## What You'll Learn

- CSS Flexbox - the modern way to create layouts
- Flex direction, justify-content, align-items
- How to create card layouts
- How to build a proper navigation bar
- Spacing with flexbox `gap`

## Background

Before Flexbox, creating layouts in CSS was painful - developers used hacks with `float` and `position`. Flexbox makes layout easy and intuitive.

**Key idea:** Flexbox works in one direction at a time - either a **row** (horizontal) or a **column** (vertical).

```
Row (default):      Column:
┌──┐ ┌──┐ ┌──┐      ┌──────┐
│  │ │  │ │  │      │      │
└──┘ └──┘ └──┘      ├──────┤
                    │      │
                    ├──────┤
                    │      │
                    └──────┘
```

To use Flexbox, you add `display: flex` to the **parent** container:

```css
.container {
    display: flex;           /* Activate flexbox */
    justify-content: center; /* Horizontal alignment */
    align-items: center;     /* Vertical alignment */
    gap: 20px;              /* Space between items */
}
```

## Your Task

Create a **project showcase page** with a navigation bar and a grid of project cards.

### Page Structure

1. **Navigation bar** (horizontal, full width)
   - Logo/name on the left
   - Nav links on the right
   - Should use flexbox with `justify-content: space-between`

2. **Hero section** (centered text)
   - Big heading
   - Subtitle paragraph
   - A call-to-action button
   - Everything centered horizontally and vertically

3. **Projects section** (card grid)
   - At least 6 project cards
   - Cards should wrap to new rows when the screen is narrow
   - Each card has: image (placeholder), title, short description, and a "View Project" link

4. **Footer** (centered content)

### Card Design

Each card should look something like this:
```
┌──────────────────┐
│   [  IMAGE  ]    │
│                  │
│  Project Title   │
│  Short desc...   │
│                  │
│  [View Project]  │
└──────────────────┘
```

## Step-by-Step Guide

1. Create `index.html` and `styles.css` in this folder
2. Build the HTML structure first without any CSS
3. Style the navigation bar with flexbox
4. Style the hero section with flexbox centering
5. Create the card grid using flexbox with `flex-wrap: wrap`
6. Style individual cards

### Key Flexbox Properties

```css
/* Parent (container) properties */
display: flex;
flex-direction: row | column;
justify-content: flex-start | center | flex-end | space-between | space-around;
align-items: flex-start | center | flex-end | stretch;
flex-wrap: wrap | nowrap;
gap: 20px;

/* Child (item) properties */
flex: 1;           /* Grow to fill space equally */
flex-basis: 300px; /* Starting width before growing/shrinking */
```

## Acceptance Criteria

- [ ] Has a navigation bar with logo left and links right using flexbox
- [ ] Has a hero section with centered content using flexbox
- [ ] Has at least 6 project cards in a flex container
- [ ] Cards wrap to multiple rows (`flex-wrap: wrap`)
- [ ] Cards have consistent sizing (use `flex-basis` or `width`)
- [ ] Each card has an image, title, description, and link
- [ ] Uses `gap` for spacing between cards
- [ ] Page looks organized and professional with good spacing

## Bonus Challenges

- Add a hover effect on cards (scale up slightly, add shadow)
- Use `order` property to rearrange a card's position
- Create a sidebar layout using flexbox (content area + sidebar)
- Make the nav links have an active state (different color for current page)
- Play [Flexbox Froggy](https://flexboxfroggy.com/) to master flexbox concepts

## Using Claude Code

- **"I don't understand flexbox"** - Ask Claude: `"Explain CSS flexbox like I'm 10 years old. Use a real-world analogy."`
- **"My items won't go side by side"** - Ask Claude: `"I have 3 divs and I want them in a row. I added display:flex but they're still stacked. Here's my code: [paste]"`
- **"Cards are different heights"** - Ask Claude: `"My flexbox cards have different heights. How do I make them all the same height?"`
- **"How do I center everything?"** - Ask Claude: `"What's the easiest way to center a div both horizontally and vertically with flexbox?"`
- **Practice first:** Before asking Claude, try [Flexbox Froggy](https://flexboxfroggy.com/) - it's a free game that teaches flexbox interactively
