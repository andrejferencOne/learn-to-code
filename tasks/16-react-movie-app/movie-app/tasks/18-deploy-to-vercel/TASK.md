# Task 18: Deploy to Vercel

**Difficulty:** ★★★★★ (Advanced)
**Module:** Next.js & Deployment
**Time estimate:** 2-3 hours
**Builds on:** [Task 17](../17-nextjs-portfolio/TASK.md)

## What You'll Learn

- What deployment means and how it works
- Vercel platform and its features
- Connecting GitHub to Vercel for automatic deploys
- Environment variables in production
- Custom domains (optional)
- CI/CD (Continuous Integration / Continuous Deployment)
- Monitoring and analytics

## Background

Right now, your portfolio only works on `localhost` - your computer. **Deployment** means putting it on a server so anyone in the world can visit it.

### How Deployment Works

```
You push code      GitHub receives it     Vercel detects the push
to GitHub    →     and stores it     →    builds & deploys your app
                                          ↓
                                    https://your-app.vercel.app
                                    (live on the internet!)
```

### Why Vercel?

- Built by the creators of Next.js (perfect compatibility)
- Free tier is generous (hobby projects, portfolios)
- Automatic HTTPS (secure)
- Global CDN (fast worldwide)
- Automatic deployments from GitHub
- Preview deployments for branches

### What is CI/CD?

- **CI (Continuous Integration):** Every push to GitHub triggers automatic checks (build, tests)
- **CD (Continuous Deployment):** If checks pass, the app is automatically deployed

With Vercel + GitHub, you get CI/CD for free:
1. Push code to GitHub
2. Vercel automatically builds your project
3. If the build succeeds, it's live
4. If the build fails, the old version stays up

## Your Task

Deploy your Next.js portfolio (from Task 17) to Vercel and set up automatic deployments.

### Part 1: Prepare Your Project

1. Make sure your portfolio runs locally without errors:
   ```bash
   npm run build  # This is what Vercel will run
   npm start      # Test the production build locally
   ```
2. Fix any build errors before deploying
3. Make sure all images are in the `public/` folder
4. Make sure there are no hardcoded `localhost` URLs
5. Push everything to GitHub (your portfolio repo)

### Part 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up with your GitHub account
2. Click "Add New..." > "Project"
3. Import your portfolio repository from GitHub
4. Vercel will auto-detect it's a Next.js project
5. If you have environment variables (like API keys), add them in the settings
6. Click "Deploy"
7. Wait for the build to complete
8. Your site is now live at `https://your-project.vercel.app`!

### Part 3: Automatic Deployments

1. Make a small change to your portfolio (e.g., update the bio text)
2. Commit and push to GitHub
3. Go to your Vercel dashboard - you'll see a new deployment building
4. Once done, your changes are live!

### Part 4: Branch Preview Deployments

1. Create a new branch: `git checkout -b feature/new-section`
2. Make some changes (add a new section to the about page)
3. Push the branch: `git push -u origin feature/new-section`
4. Vercel automatically creates a **preview deployment** for this branch
5. The preview URL looks like: `your-project-git-feature-new-section.vercel.app`
6. You can share this URL for feedback before merging
7. When you merge to main, the production deployment updates automatically

### Part 5: Environment Variables

If your project uses API keys (like the weather app):

1. Go to your project settings on Vercel
2. Go to "Environment Variables"
3. Add your variables (e.g., `VITE_TMDB_API_KEY`)
4. Redeploy for changes to take effect

### Part 6: Custom Domain (Optional)

If you want a custom domain like `yourname.dev`:
1. Buy a domain from a registrar (Namecheap, Google Domains, etc.)
2. In Vercel, go to project Settings > Domains
3. Add your domain
4. Update DNS records as Vercel instructs
5. Vercel provides free SSL (HTTPS) automatically

## Deployment Checklist

Before deploying, check these:

```bash
# 1. Build succeeds locally
npm run build

# 2. No console errors
# Open browser console, check for errors

# 3. All links work
# Click through every page and link

# 4. Images load correctly
# Check all images appear

# 5. Responsive design works
# Test on mobile viewport

# 6. No hardcoded localhost URLs
grep -r "localhost" app/

# 7. Environment variables are set
# Check .env.local exists locally
# Check Vercel dashboard for production vars

# 8. .gitignore includes sensitive files
cat .gitignore
```

## Step-by-Step Guide

1. Ensure your portfolio builds cleanly: `npm run build`
2. Push to GitHub if not already done
3. Sign up on Vercel with GitHub
4. Import and deploy your repo
5. Verify the live site works
6. Make a change, push to main, verify auto-deployment
7. Create a branch, push it, check preview deployment
8. Document everything in this folder

## Acceptance Criteria

- [ ] Portfolio is live on Vercel at a public URL
- [ ] All pages load correctly on the live site
- [ ] All images and links work in production
- [ ] Automatic deployment works (push to main → site updates)
- [ ] Preview deployment works for a branch
- [ ] No build errors or warnings
- [ ] Environment variables are configured in Vercel (if applicable)
- [ ] Site has HTTPS (automatic with Vercel)
- [ ] Created a `deployment-notes.md` in this folder documenting your live URL and process

## Create: deployment-notes.md

Create this file in this folder with:
- Your live Vercel URL
- Steps you took to deploy
- Any issues you encountered and how you solved them
- What you learned about deployment

## Bonus Challenges

- Set up a custom domain
- Add Vercel Analytics (free tier available)
- Set up Speed Insights to monitor performance
- Create a GitHub Action that runs linting before deploy
- Add OpenGraph meta tags so your site looks good when shared on social media
- Set up Vercel's built-in commenting for preview deployments
- Create multiple environments (preview, production)
- Set up redirects in `next.config.js`

## Using Claude Code

- **"Build fails"** - Ask Claude: `"My Next.js project builds fine locally but fails on Vercel with this error: [paste error]. How do I fix it?"`
- **"Images broken in production"** - Ask Claude: `"My images work locally but show broken on Vercel. They're in the public folder. What's wrong?"`
- **"Environment variables"** - Ask Claude: `"How do I add environment variables on Vercel for a Next.js project?"`
- **"Custom domain setup"** - Ask Claude: `"I bought a domain from Namecheap. How do I connect it to my Vercel project?"`
- **"How do I check if my site is fast?"** - Ask Claude: `"How can I check the performance of my deployed Next.js site? What tools should I use?"`

## Congratulations!

If you've made it here, you've gone from writing your first HTML tag to deploying a full Next.js application on the internet. That's a massive achievement!

### What to Do Next

- **Keep building.** The best way to learn is to build projects you care about.
- **Learn TypeScript.** It adds type safety to JavaScript and is used in most professional projects.
- **Learn a backend.** Try Node.js with Express, or explore Next.js API routes.
- **Contribute to open source.** Find a project on GitHub and submit your first PR.
- **Build your network.** Share your portfolio, join developer communities.
- **Never stop learning.** Web development evolves fast - stay curious!

### Recommended Next Steps

1. Add a blog to your portfolio (using MDX or a CMS)
2. Build a full-stack app with authentication
3. Learn a database (PostgreSQL, MongoDB)
4. Learn testing (Jest, React Testing Library)
5. Explore advanced React patterns (context, custom hooks, suspense)
