# Task 01: Hello HTML

**Difficulty:** ★☆☆☆☆ (Beginner)
**Module:** HTML Basics
**Time estimate:** 30-60 minutes

## What You'll Learn

- What HTML is and how browsers display it
- How to create an HTML file
- Basic HTML tags: headings, paragraphs, images, links
- How to open an HTML file in your browser

## Background

HTML (HyperText Markup Language) is the skeleton of every webpage. When you visit any website, your browser downloads an HTML file and turns it into the visual page you see. HTML uses **tags** to tell the browser what type of content to display.

Tags look like this:
```html
<tagname>content goes here</tagname>
```

Most tags have an **opening tag** (`<tagname>`) and a **closing tag** (`</tagname>`).

## Your Task

Create a file called `index.html` in this folder that contains:

1. A proper HTML document structure (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`)
2. A page title that shows up in the browser tab (using `<title>`)
3. A main heading (`<h1>`) with your name
4. A paragraph (`<p>`) introducing yourself (2-3 sentences)
5. A smaller heading (`<h2>`) saying "My Interests"
6. An unordered list (`<ul>`) with at least 3 of your interests using list items (`<li>`)
7. A link (`<a>`) to your favorite website
8. An image (`<img>`) - you can use any image URL from the internet

## Step-by-Step Guide

1. Create a new file called `index.html` in this folder (`tasks/01-hello-html/`)
2. Start with the basic HTML structure:
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <title>Your Page Title</title>
   </head>
   <body>
       <!-- Your content goes here -->
   </body>
   </html>
   ```
3. Add the content between the `<body>` tags
4. Open the file in your browser:
   - On Mac: Right-click the file > Open With > Chrome
   - Or drag the file into your browser window
   - Or in terminal: `open index.html`
5. Make changes, save the file, and refresh the browser to see updates

## Expected Result

When you open the file in a browser, you should see:
- Your name as a big heading at the top
- A paragraph about yourself
- A "My Interests" section heading
- A bulleted list of your interests
- A clickable link
- An image

## Acceptance Criteria

- [ ] File is named `index.html`
- [ ] Has proper HTML structure (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`)
- [ ] Has a `<title>` tag
- [ ] Has at least one `<h1>` and one `<h2>`
- [ ] Has at least one `<p>` tag
- [ ] Has a `<ul>` with at least 3 `<li>` items
- [ ] Has an `<a>` tag with a working `href` attribute
- [ ] Has an `<img>` tag with a `src` attribute
- [ ] Opens in a browser without errors

## Bonus Challenges

- Add a `<h3>` section called "My Goals" with a numbered/ordered list (`<ol>`)
- Add a horizontal line (`<hr>`) between sections
- Add **bold** (`<strong>`) and *italic* (`<em>`) text somewhere
- Add your email as a `mailto:` link

## Key Concepts to Understand

| Concept | What It Means |
|---------|--------------|
| Tag | An HTML element like `<p>` or `<h1>` |
| Attribute | Extra info on a tag like `href="..."` or `src="..."` |
| Nesting | Putting tags inside other tags |
| Self-closing tag | Tags that don't need a closing tag like `<img>` or `<br>` |

## Using Claude Code

Claude Code is your AI assistant. Here's how to use it for this task:

- **"What does this tag do?"** - Ask Claude: `"What is the <meta charset='UTF-8'> tag for in HTML?"`
- **"My image isn't showing"** - Ask Claude: `"My img tag isn't displaying the image, here's my code: [paste code]. What's wrong?"`
- **"I want to add something extra"** - Ask Claude: `"How do I add a table in HTML?"`
- **"Check my work"** - Ask Claude: `"Review my HTML file and tell me if I'm missing anything or doing something wrong: [paste code]"`

**Important rule:** Try to write the code yourself first! Only ask Claude after you've spent at least 10 minutes trying on your own. When Claude gives you an answer, make sure you understand *why* it works, not just *what* the code is.
