# Git Workflow Guide

## Recommended Workflow

Your described workflow is **mostly correct**, but here's the improved version:

### Step-by-Step Process

1. **Create your feature branch**
   ```bash
   git checkout -b deepti-branch
   ```

2. **Make your changes**
   - Edit files, add features, fix bugs
   - Commit your changes:
     ```bash
     git add .
     git commit -m "Description of your changes"
     ```

3. **Keep your branch up-to-date with main** (Important!)
   ```bash
   git checkout main
   git pull origin main
   git checkout deepti-branch
   git merge main
   # Or use rebase: git rebase main
   ```
   This ensures your branch has the latest changes from main and reduces merge conflicts.

4. **Push your branch and create a Pull Request**
   ```bash
   git push origin deepti-branch
   ```
   Then go to GitHub and create a Pull Request from `deepti-branch` to `main`.

5. **CI/CD Pipeline runs automatically**
   - The pipeline will run on your branch
   - It will check:
     - ✅ Code linting (ESLint)
     - ✅ Code formatting (Prettier)
     - ✅ Build succeeds
   - All checks must pass before merging

6. **Test locally** (before creating PR)
   ```bash
   pnpm dev          # Test development server
   pnpm build        # Test production build
   pnpm lint         # Test linting
   pnpm format:check # Test formatting
   ```

7. **After PR is approved and CI passes, merge to main**
   - Use GitHub's "Merge" button on the PR
   - Or if you have permissions, merge via command line:
     ```bash
     git checkout main
     git merge deepti-branch
     git push origin main
     ```

## Why Use Pull Requests?

- ✅ Code review before merging
- ✅ CI/CD runs automatically
- ✅ History of changes
- ✅ Easy to revert if needed
- ✅ Team collaboration

## CI/CD Pipeline

The pipeline automatically runs on:
- Every push to `main` branch
- Every push to `deepti-branch` (or any branch)
- Every Pull Request to `main`

### What the Pipeline Does

1. **Lint and Format Check**
   - Runs ESLint to catch code issues
   - Checks code formatting with Prettier

2. **Build**
   - Builds the Next.js application
   - Ensures the build succeeds
   - Uploads build artifacts

3. **Deploy** (when configured)
   - Can be added to automatically deploy to production

## Quick Reference Commands

```bash
# Create and switch to new branch
git checkout -b deepti-branch

# Make changes, then commit
git add .
git commit -m "Your commit message"

# Update branch with latest main
git checkout main
git pull origin main
git checkout deepti-branch
git merge main

# Push branch
git push origin deepti-branch

# After PR is merged, clean up
git checkout main
git pull origin main
git branch -d deepti-branch  # Delete local branch
git push origin --delete deepti-branch  # Delete remote branch
```

