# Task 09: Git Essentials

**Difficulty:** ★★☆☆☆ (Beginner-Intermediate)
**Module:** Git & GitHub
**Time estimate:** 1-2 hours

## What You'll Learn

- What version control is and why it matters
- How to initialize a Git repository
- The staging area (add) and commits
- Viewing history with `git log`
- Creating and switching branches
- How `.gitignore` works

## Background

**Git** is like a save system for your code. Imagine you're writing an essay:
- Without Git: you have `essay.docx`, `essay_v2.docx`, `essay_FINAL.docx`, `essay_FINAL_v2.docx`
- With Git: you have one file, but Git remembers every version you've ever saved

### Key Concepts

| Concept | What It Means |
|---------|--------------|
| Repository (repo) | A folder tracked by Git |
| Commit | A snapshot/save point of your files |
| Stage (add) | Selecting which changes to include in the next commit |
| Branch | A parallel timeline of changes |
| HEAD | Where you currently are in the history |

### The Git Workflow

```
Working Directory  →  Staging Area  →  Repository
  (your files)        (git add)       (git commit)
```

Think of it like packing a box:
1. **Working directory:** all your stuff on the floor
2. **Staging area (git add):** items you've put in the box
3. **Commit:** sealing and labeling the box

## Your Task

This is a hands-on exercise. You'll create a small project and practice Git operations. Create a file called `git-log.md` in this folder where you'll document what you did and what happened.

### Part 1: Initialize and First Commits

1. Create a new folder called `my-git-project` inside this task folder
2. Initialize a Git repository: `git init`
3. Check status: `git status`
4. Create a file `README.md` with the text "# My Git Practice Project"
5. Stage it: `git add README.md`
6. Commit it: `git commit -m "Initial commit: add README"`
7. Create a file `about.md` with a few lines about yourself
8. Stage and commit: `git add about.md && git commit -m "Add about page"`
9. View your history: `git log`

**Document the output of `git status` and `git log` in your `git-log.md`.**

### Part 2: Making Changes

1. Edit `README.md` - add a description paragraph
2. Check what changed: `git diff`
3. Stage and commit the changes
4. Edit `about.md` - add more content
5. Stage and commit
6. View the log: `git log --oneline`

### Part 3: Branching

1. Create a new branch: `git branch feature/add-hobbies`
2. Switch to it: `git checkout feature/add-hobbies` (or `git switch feature/add-hobbies`)
3. Create a new file `hobbies.md` with a list of your hobbies
4. Stage and commit on this branch
5. Switch back to main: `git checkout main` (or `git switch main`)
6. Notice that `hobbies.md` is gone (it only exists on the other branch)
7. Merge the branch: `git merge feature/add-hobbies`
8. Now `hobbies.md` is on main too!

### Part 4: Gitignore

1. Create a `.gitignore` file
2. Add these rules:
   ```
   node_modules/
   .DS_Store
   *.log
   .env
   ```
3. Create a file called `test.log` - notice git ignores it
4. Stage and commit the `.gitignore`

## Commands Reference

```bash
git init                    # Initialize new repo
git status                  # See what's changed
git add <file>              # Stage a file
git add .                   # Stage all changes
git commit -m "message"     # Create a commit
git log                     # View commit history
git log --oneline           # Compact history
git diff                    # See unstaged changes
git diff --staged           # See staged changes
git branch                  # List branches
git branch <name>           # Create branch
git checkout <name>         # Switch branch
git switch <name>           # Switch branch (newer command)
git merge <name>            # Merge branch into current
git checkout -b <name>      # Create and switch in one command
```

## Acceptance Criteria

- [ ] `my-git-project` folder exists with a git repository
- [ ] Has at least 4 commits with meaningful messages
- [ ] Has `README.md`, `about.md`, and `hobbies.md`
- [ ] Has a `.gitignore` file with common rules
- [ ] `git-log.md` documents what you did and the outputs you saw
- [ ] Successfully created, switched, and merged a branch
- [ ] `git log --oneline` shows a clean history

## Good Commit Messages

```
# Good - describes what and why
"Add user profile page with bio section"
"Fix broken navigation links on mobile"
"Update README with setup instructions"

# Bad - vague or meaningless
"update stuff"
"fix"
"asdfasdf"
"WIP"
```

## Bonus Challenges

- Create a merge conflict on purpose and resolve it:
  1. Create a branch, edit line 1 of README.md there
  2. Switch to main, edit the same line differently
  3. Try to merge - Git will show a conflict
  4. Manually resolve the conflict and commit
- Use `git stash` to temporarily save uncommitted changes
- Use `git log --graph` to see a visual branch history
- Use `git blame README.md` to see who wrote each line

## Using Claude Code

- **"What's the difference between add and commit?"** - Ask Claude: `"Explain the Git staging area. Why do I need to 'git add' before 'git commit'?"`
- **"I committed to the wrong branch"** - Ask Claude: `"I accidentally committed to main instead of my feature branch. How do I move the commit?"`
- **"Merge conflict!"** - Ask Claude: `"I have a merge conflict and I don't understand the <<< === >>> markers. How do I resolve it?"`
- **"What's in my .gitignore?"** - Ask Claude: `"What files and folders should I always put in .gitignore for a web project?"`
- **"I messed up!"** - Don't panic! Ask Claude: `"I accidentally deleted a file that was committed. How do I get it back?"`
