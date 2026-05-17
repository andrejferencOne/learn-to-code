# Task 10: GitHub Workflow

**Difficulty:** ★★☆☆☆ (Beginner-Intermediate)
**Module:** Git & GitHub
**Time estimate:** 1-2 hours
**Builds on:** [Task 09](../09-git-essentials/TASK.md)

## What You'll Learn

- The difference between Git (local) and GitHub (remote)
- Pushing code to GitHub
- Pulling changes from GitHub
- Creating Pull Requests (PRs)
- Writing good PR descriptions
- GitHub Issues
- Forking and cloning

## Background

**Git** runs on your computer. **GitHub** is a website that stores your Git repositories in the cloud. Think of it like:
- Git = your local save system
- GitHub = the cloud backup that others can see and contribute to

### Key Concepts

| Concept | What It Means |
|---------|--------------|
| Remote | A version of your repo on GitHub (usually called `origin`) |
| Push | Upload your commits to GitHub |
| Pull | Download commits from GitHub |
| Clone | Download an entire repo from GitHub |
| Fork | Copy someone else's repo to your GitHub account |
| Pull Request (PR) | A request to merge your changes into a branch |

### The Workflow

```
Your Computer         GitHub
┌──────────┐         ┌──────────┐
│  Local   │  push   │  Remote  │
│  Repo    │ ──────> │  Repo    │
│          │ <────── │          │
│          │  pull   │          │
└──────────┘         └──────────┘
```

## Your Task

### Part 1: Push to GitHub

1. Go to [github.com](https://github.com) and create a new repository called `my-git-project`
   - Make it public
   - Do NOT initialize with README (you already have one from Task 09)
2. In your `my-git-project` from Task 09, connect to GitHub:
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/my-git-project.git
   git branch -M main
   git push -u origin main
   ```
3. Refresh GitHub in your browser - your files should be there!

### Part 2: Make Changes via Branch + PR

1. Create a new branch locally: `git checkout -b feature/add-goals`
2. Create a file `goals.md` with your coding goals for the next 3 months
3. Commit the changes
4. Push the branch to GitHub: `git push -u origin feature/add-goals`
5. Go to GitHub - you'll see a "Compare & pull request" button
6. Create a Pull Request with:
   - A clear title
   - A description of what you changed and why
7. Look at the "Files changed" tab to see the diff
8. Merge the PR on GitHub
9. Pull the changes back to your local main:
   ```bash
   git checkout main
   git pull
   ```

### Part 3: GitHub Issues

1. Go to your repo's "Issues" tab on GitHub
2. Create an issue: "Add a projects page"
   - Add a description of what you want to build
   - Add a label (e.g., "enhancement")
3. Create a branch to fix this issue: `git checkout -b feature/projects-page`
4. Create `projects.md` with a list of projects you want to build
5. Commit, push, create a PR
6. In the PR description, write `Closes #1` (this links and auto-closes the issue)
7. Merge the PR and verify the issue was closed

### Part 4: Document Your Learning

Create a file called `workflow-notes.md` in this task folder with:
- A summary of the GitHub workflow you practiced
- Common commands you used
- Any difficulties you encountered and how you solved them

## Commands Reference

```bash
# Remote operations
git remote add origin <url>     # Connect to GitHub
git push -u origin main         # Push to GitHub (first time)
git push                        # Push to GitHub (subsequent)
git pull                        # Download changes from GitHub
git clone <url>                 # Download entire repo

# Branch + push
git checkout -b feature/name    # Create and switch to branch
git push -u origin feature/name # Push branch to GitHub
```

## Acceptance Criteria

- [ ] `my-git-project` repo exists on your GitHub account
- [ ] Has at least 2 merged Pull Requests
- [ ] At least one PR has a proper description
- [ ] Created and closed at least one GitHub Issue
- [ ] A PR references and closes an issue using `Closes #N`
- [ ] `workflow-notes.md` documents your learning
- [ ] You can successfully push and pull changes

## Good PR Descriptions

```markdown
## What changed
- Added a projects page listing planned portfolio projects

## Why
- Need to track project ideas and progress
- Closes #1

## How to review
- Check `projects.md` for the new content
```

## Bonus Challenges

- Fork a popular open-source repository and clone it locally
- Add a GitHub Actions workflow file (`.github/workflows/hello.yml`) that runs on push
- Customize your GitHub profile README (create a repo with your username as the name)
- Add collaborators to your repo and practice reviewing each other's PRs
- Try `gh` CLI tool: `gh pr create`, `gh issue list`, `gh repo view`

## Using Claude Code

- **"I can't push to GitHub"** - Ask Claude: `"I'm getting 'permission denied' when pushing to GitHub. How do I set up authentication?"`
- **"What's a Pull Request?"** - Ask Claude: `"Explain GitHub Pull Requests like I'm a beginner. When and why should I use them?"`
- **"How do I undo a push?"** - Ask Claude: `"I pushed something wrong to GitHub. How do I fix it safely?"`
- **"How do I write a good PR description?"** - Ask Claude: `"What should a good GitHub Pull Request description contain? Give me a template."`
- **"Setting up GitHub CLI"** - Ask Claude: `"How do I install and authenticate the GitHub CLI (gh) on Mac?"`

**Pro tip:** You can use the GitHub CLI (`gh`) to create PRs and issues directly from the terminal. Claude Code can help you with this too!
