# Task 17: Next.js Portfolio

**Difficulty:** ★★★★☆ (Intermediate-Advanced)
**Module:** Next.js & Deployment
**Time estimate:** 4-6 hours
**Builds on:** All React tasks

## What You'll Learn

- What Next.js is and why it's used over plain React
- File-based routing (pages from file structure)
- Server-side rendering (SSR) vs client-side rendering (CSR)
- The App Router and layouts
- Metadata and SEO
- Image optimization with `next/image`
- CSS Modules or Tailwind CSS
- Building a real portfolio website

## Background

**Next.js** is a React framework that adds features React doesn't have:

| Feature | React (Vite) | Next.js |
|---------|-------------|---------|
| Routing | Need extra library | Built-in (file-based) |
| SEO | Poor (JavaScript renders) | Great (server rendering) |
| Image optimization | Manual | Built-in |
| API routes | Need separate server | Built-in |
| Performance | Good | Excellent |

### File-Based Routing

In Next.js App Router, the file structure IS your URL structure:

```
app/
├── page.jsx          → /
├── about/
│   └── page.jsx      → /about
├── projects/
│   ├── page.jsx      → /projects
│   └── [id]/
│       └── page.jsx  → /projects/1, /projects/2, etc.
└── layout.jsx        → Wraps all pages (shared header/footer)
```

### Server vs Client Components

In Next.js, components are **Server Components** by default (rendered on the server). If you need interactivity (useState, onClick, etc.), add `"use client"` at the top:

```jsx
// Server Component (default) - no interactivity, great for SEO
export default function AboutPage() {
    return <h1>About Me</h1>;
}

// Client Component - for interactive features
"use client";
import { useState } from "react";
export default function ContactForm() {
    const [name, setName] = useState("");
    // ...
}
```

## Your Task

Build your **personal portfolio website** with Next.js.

### Setup

```bash
npx create-next-app@latest my-portfolio
```

Choose these options:
- TypeScript: **No** (keep it simple for now)
- ESLint: **Yes**
- Tailwind CSS: **Yes** (or No if you prefer CSS Modules)
- `src/` directory: **No**
- App Router: **Yes**
- Customize import alias: **No**

```bash
cd my-portfolio
npm run dev
```

Open `http://localhost:3000`.

### Pages to Build

#### 1. Home Page (`app/page.jsx`)
- Hero section with your name and title
- Brief introduction
- Call-to-action buttons ("View Projects", "Contact Me")
- Featured projects section (3 highlighted projects)

#### 2. About Page (`app/about/page.jsx`)
- Your story / bio
- Skills list with categories (Frontend, Backend, Tools)
- Education or learning journey timeline
- Fun facts or hobbies

#### 3. Projects Page (`app/projects/page.jsx`)
- Grid of project cards
- Each card: thumbnail, title, description, tech stack tags, links
- Projects data stored in a separate data file

#### 4. Project Detail Page (`app/projects/[slug]/page.jsx`)
- Full project description
- Screenshots
- Technologies used
- Links (live demo, GitHub)
- Challenges and learnings

#### 5. Contact Page (`app/contact/page.jsx`)
- Contact form (name, email, message)
- Social media links
- A note about response time

### Shared Layout (`app/layout.jsx`)

```jsx
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export const metadata = {
    title: "Your Name - Portfolio",
    description: "Web developer portfolio",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navigation />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
```

### Navigation Component

```jsx
// app/components/Navigation.jsx
import Link from "next/link";

export default function Navigation() {
    return (
        <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
        </nav>
    );
}
```

### Projects Data

Create `app/data/projects.js`:
```js
const projects = [
    {
        slug: "weather-dashboard",
        title: "Weather Dashboard",
        description: "Real-time weather app using OpenWeatherMap API",
        longDescription: "A detailed description of the project...",
        image: "/images/weather.png",
        technologies: ["HTML", "CSS", "JavaScript", "API"],
        github: "https://github.com/...",
        live: "https://...",
        featured: true,
    },
    // Use projects from earlier tasks!
];

export default projects;
```

### Dynamic Routes

```jsx
// app/projects/[slug]/page.jsx
import projects from "../../data/projects";

export default function ProjectDetail({ params }) {
    const project = projects.find(p => p.slug === params.slug);

    if (!project) {
        return <h1>Project not found</h1>;
    }

    return (
        <div>
            <h1>{project.title}</h1>
            <p>{project.longDescription}</p>
            {/* more details */}
        </div>
    );
}
```

### Images

Use the `next/image` component for optimized images:
```jsx
import Image from "next/image";

<Image
    src="/images/project.png"
    alt="Project screenshot"
    width={600}
    height={400}
/>
```

Place images in the `public/images/` folder.

## Step-by-Step Guide

1. Create the Next.js project and clean up defaults
2. Set up the layout with navigation and footer
3. Build the Home page
4. Build the About page
5. Create the projects data file
6. Build the Projects list page
7. Build the Project detail page with dynamic routing
8. Build the Contact page with a form
9. Add styling throughout (Tailwind or CSS Modules)
10. Add metadata for SEO on each page
11. Test all navigation links work
12. Add images and polish

## Acceptance Criteria

- [ ] Has 5 pages: Home, About, Projects, Projects Detail, Contact
- [ ] Uses Next.js App Router (file-based routing)
- [ ] Has a shared layout with navigation and footer
- [ ] Navigation uses `next/link` (not `<a>` tags)
- [ ] Projects page shows a grid of project cards
- [ ] Clicking a project goes to its detail page (dynamic route)
- [ ] Contact page has a form
- [ ] Each page has proper metadata (title, description)
- [ ] Uses `next/image` for at least some images
- [ ] Responsive design (looks good on mobile and desktop)
- [ ] Clean, professional design
- [ ] No console errors

## Bonus Challenges

- Add dark mode toggle
- Add page transitions / animations
- Add a blog section with markdown files
- Add an API route (`app/api/contact/route.js`) that logs form submissions
- Add a `loading.jsx` file for loading states
- Add an `error.jsx` file for error boundaries
- Add `generateStaticParams` for static generation of project pages
- Add a sitemap using `app/sitemap.js`

## Using Claude Code

- **"What's the difference between Next.js and React?"** - Ask Claude: `"Explain Next.js App Router vs plain React (Vite). When should I use each?"`
- **"My page doesn't show"** - Ask Claude: `"I created app/about/page.jsx but /about shows a 404. What's wrong?"`
- **"Server vs Client components"** - Ask Claude: `"When do I need 'use client' in Next.js? My useState doesn't work without it."`
- **"Dynamic routes"** - Ask Claude: `"How do I create a dynamic route like /projects/[slug] in Next.js App Router? How do I access the slug parameter?"`
- **"next/image won't load"** - Ask Claude: `"My Image component shows a broken image. I have the file in public/images/. Here's my code: [paste]"`
- **"How do I add metadata?"** - Ask Claude: `"How do I set the page title and description for SEO in Next.js App Router?"`
