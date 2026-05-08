# Task 03: CSS Styling

**Difficulty:** ★★☆☆☆ (Beginner-Intermediate)
**Module:** HTML Basics
**Time estimate:** 1-2 hours
**Builds on:** [Task 02](../02-profile-page/TASK.md)

## What You'll Learn

- What CSS is and how it works with HTML
- Three ways to add CSS (inline, internal, external)
- CSS selectors (element, class, ID)
- Colors, fonts, spacing (margin, padding)
- The CSS Box Model
- Basic hover effects

## Background

CSS (Cascading Style Sheets) controls how HTML elements look. Without CSS, every webpage would be plain black text on a white background. CSS lets you change colors, fonts, sizes, spacing, layouts, and much more.

### The Box Model

Every HTML element is a box with four layers:
```
┌─────────── margin (space outside the box) ──────────┐
│  ┌──────── border (the box edge) ────────┐           │
│  │  ┌───── padding (space inside box) ──┐│           │
│  │  │      CONTENT                      ││           │
│  │  └───────────────────────────────────┘│           │
│  └───────────────────────────────────────┘           │
└──────────────────────────────────────────────────────┘
```

Understanding this model is key to controlling spacing and sizing.

## Your Task

Copy your `index.html` from Task 02 into this folder and style it with CSS to make it look professional and polished.

### Requirements

1. **Create an external CSS file** called `styles.css` and link it to your HTML
2. **Apply a color scheme** - choose 2-3 colors that work well together
3. **Style the typography:**
   - Use a Google Font (add a `<link>` in `<head>`)
   - Set different font sizes for headings and body text
   - Set a comfortable line-height (1.5 or 1.6)
4. **Style the navigation:**
   - Horizontal nav links
   - Hover effect on links (color change)
   - Remove default link underlines
5. **Style the profile image:**
   - Make it circular (hint: `border-radius: 50%`)
   - Add a border or shadow
6. **Style the table:**
   - Add borders and padding to cells
   - Alternate row colors (zebra striping)
7. **Style the form:**
   - Consistent input sizing
   - A styled submit button with a hover effect
8. **Style the footer:**
   - Different background color
   - Centered text
9. **Add proper spacing** throughout the page using margin and padding

### CSS Concepts to Use

| Concept | Example | What It Does |
|---------|---------|-------------|
| Element selector | `p { color: blue; }` | Styles all `<p>` tags |
| Class selector | `.highlight { color: red; }` | Styles elements with `class="highlight"` |
| ID selector | `#header { background: gray; }` | Styles the element with `id="header"` |
| Pseudo-class | `a:hover { color: green; }` | Styles links when mouse hovers |
| Box model | `padding: 20px; margin: 10px;` | Controls spacing |

## Step-by-Step Guide

1. Copy `index.html` from Task 02 into this folder
2. Create `styles.css` in this folder
3. Link the CSS in your HTML's `<head>`:
   ```html
   <link rel="stylesheet" href="styles.css">
   ```
4. Pick a color palette - try [coolors.co](https://coolors.co/) for inspiration
5. Pick a Google Font from [fonts.google.com](https://fonts.google.com/)
6. Start styling from the top of the page down
7. Open the browser DevTools (F12 or right-click > Inspect) to experiment with styles live
8. Save and refresh frequently to see your changes

## Acceptance Criteria

- [ ] Has a separate `styles.css` file linked to the HTML
- [ ] Uses at least one Google Font
- [ ] Has a consistent color scheme (2-3 colors)
- [ ] Navigation links are styled (horizontal, hover effect)
- [ ] Profile image is circular
- [ ] Table has borders, padding, and alternating row colors
- [ ] Form inputs and button are styled
- [ ] Footer has a distinct background color
- [ ] Page has comfortable spacing (no content touching edges)
- [ ] Uses at least 2 class selectors and 1 ID selector

## Bonus Challenges

- Add a `box-shadow` to the profile image
- Add a smooth color transition on hover: `transition: color 0.3s ease;`
- Add a CSS variable for your primary color: `--primary-color: #3498db;`
- Style the scrollbar (Chrome only)
- Add a gradient background to the header
- Make the form button change color when you press it (`:active` pseudo-class)

## Using Claude Code

- **"How do I pick good colors?"** - Ask Claude: `"Suggest a professional color scheme with a primary color, secondary color, and accent color for a personal profile page"`
- **"My CSS isn't applying"** - Ask Claude: `"I linked my styles.css but the styles aren't showing. Here's my HTML head section: [paste]. What's wrong?"`
- **"How does the box model work?"** - Ask Claude: `"Explain CSS box model with a visual example. What's the difference between margin and padding?"`
- **"I want to experiment with a style"** - Open browser DevTools (F12), go to the Elements tab, click on an element, and edit CSS directly in the Styles panel. This is temporary - save what you like to your CSS file.
- **"How do I center things?"** - Ask Claude: `"How do I center a div horizontally in CSS? Show me 3 different methods"`
