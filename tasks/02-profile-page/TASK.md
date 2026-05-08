# Task 02: Profile Page

**Difficulty:** ★☆☆☆☆ (Beginner)
**Module:** HTML Basics
**Time estimate:** 45-90 minutes
**Builds on:** [Task 01](../01-hello-html/TASK.md)

## What You'll Learn

- Semantic HTML elements (`<header>`, `<main>`, `<footer>`, `<section>`, `<nav>`)
- HTML forms and input elements
- Tables in HTML
- How to structure a more complex page

## Background

In Task 01, you used basic HTML tags. Now you'll learn about **semantic HTML** - tags that describe the *meaning* of the content, not just how it looks. For example, `<header>` tells the browser (and screen readers for blind users) "this is the top section of the page" - much clearer than just using a generic `<div>`.

Think of it like building a house:
- `<div>` = a generic room
- `<header>` = the entrance hall
- `<main>` = the living room
- `<footer>` = the basement/utility room
- `<nav>` = the hallway connecting rooms
- `<section>` = different areas within a room

## Your Task

Create a detailed profile page (`index.html`) with multiple sections, using semantic HTML:

### Required Sections

1. **Header** - with your name and a navigation menu
2. **About Me** - a section with a profile photo and bio
3. **Skills** - a table showing your skills and skill levels
4. **Contact** - a contact form (it won't actually send anything yet, but you'll build the form)
5. **Footer** - with copyright text and current year

### Detailed Requirements

**Navigation (`<nav>`):**
- Links that jump to each section on the page (use `#about`, `#skills`, `#contact`)

**About Section:**
- Profile image (use a placeholder from https://placehold.co like `https://placehold.co/200x200`)
- 2-3 paragraphs about yourself
- A "fun facts" list

**Skills Table (`<table>`):**
- At least 3 rows
- Columns: Skill Name, Level (Beginner/Intermediate/Advanced), Notes
- Table should have a header row (`<thead>`) and body (`<tbody>`)

**Contact Form (`<form>`):**
- Name input (`<input type="text">`)
- Email input (`<input type="email">`)
- Message textarea (`<textarea>`)
- Submit button (`<button>`)
- Each input should have a `<label>`

**Footer (`<footer>`):**
- Copyright text
- Link to your GitHub (or any social media)

## Step-by-Step Guide

1. Create `index.html` in this folder
2. Start with the HTML boilerplate from Task 01
3. Build the page section by section - don't try to do everything at once
4. After each section, open in browser and check it looks right
5. Add the anchor links (`<a href="#about">`) and IDs (`<section id="about">`) for navigation

## Example Structure

```html
<body>
    <header>
        <h1>Your Name</h1>
        <nav>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>

    <main>
        <section id="about">
            <!-- about content -->
        </section>

        <section id="skills">
            <!-- skills table -->
        </section>

        <section id="contact">
            <!-- contact form -->
        </section>
    </main>

    <footer>
        <!-- footer content -->
    </footer>
</body>
```

## Acceptance Criteria

- [ ] Uses semantic HTML elements (`<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`)
- [ ] Has a working navigation that jumps to page sections
- [ ] Has a profile image (placeholder is fine)
- [ ] Has a properly structured table with `<thead>` and `<tbody>`
- [ ] Has a form with labeled inputs (name, email, message) and a submit button
- [ ] Has a footer with copyright info
- [ ] Code is properly indented and readable

## Bonus Challenges

- Add a `<details>` / `<summary>` element for expandable FAQ items
- Add a `<blockquote>` with your favorite quote
- Add a `<progress>` bar for each skill instead of text levels
- Use `<figure>` and `<figcaption>` around your profile image
- Add `required` attribute to form inputs

## Using Claude Code

- **"What's the difference between div and section?"** - Ask Claude: `"When should I use <section> vs <div> in HTML?"`
- **"My anchor links don't work"** - Ask Claude: `"I have <a href='#skills'> but clicking it doesn't jump to my skills section. Here's my code: [paste]. What's wrong?"`
- **"I'm confused about form structure"** - Ask Claude: `"Show me how to create a form with a label and text input that are properly connected"`
- **"My table looks weird"** - Ask Claude: `"Help me create a proper HTML table with headers and 3 rows of data"`
- **"How do I make this more accessible?"** - Ask Claude: `"What are the most important accessibility attributes I should add to my profile page?"`
