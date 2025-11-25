# GitHub Pages Setup Guide

## Repository Configuration

This project is configured to deploy to GitHub Pages using the repository: `hunexture/hunexture.github.io`

### Branch Structure

- **source**: Development branch (main working branch)
- **main**: Production branch (GitHub Pages serves from here)

## Deployment Methods

### Method 1: Automatic Deployment (Recommended)

The project uses GitHub Actions for automatic deployment.

**How it works:**
1. Push your changes to the `source` branch
2. GitHub Actions automatically builds and deploys to the `main` branch
3. Your site updates at https://hunexture.github.io

**Configuration file:** `.github/workflows/deploy.yml`

### Method 2: Manual Deployment

You can also deploy manually from your local machine:

```bash
npm run deploy
```

This command:
1. Runs `npm run build` (predeploy script)
2. Pushes the build folder to the `main` branch

## GitHub Pages Settings

1. Go to: https://github.com/hunexture/hunexture.github.io/settings/pages
2. Configure:
   - **Source:** Deploy from a branch
   - **Branch:** main
   - **Folder:** / (root)

## package.json Configuration

```json
{
  "homepage": "https://hunexture.github.io",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build -b main"
  }
}
```

## Workflow for Development

1. **Make changes** on the `source` branch
   ```bash
   git checkout source
   # Make your changes
   ```

2. **Test locally**
   ```bash
   npm start
   ```

3. **Commit changes**
   ```bash
   git add .
   git commit -m "Your commit message"
   ```

4. **Push to source branch**
   ```bash
   git push origin source
   ```

5. **Automatic deployment**
   - GitHub Actions will automatically build and deploy
   - Check progress at: https://github.com/hunexture/hunexture.github.io/actions

   OR

   **Manual deployment**
   ```bash
   npm run deploy
   ```

6. **Wait 1-5 minutes** for GitHub Pages to update

7. **Visit your site:** https://hunexture.github.io

## Troubleshooting

### Site not updating?
1. Check GitHub Actions status (if using automatic deployment)
2. Verify GitHub Pages settings point to `main` branch
3. Check if build completed successfully
4. Clear browser cache and refresh

### Build fails?
1. Run `npm run build` locally to check for errors
2. Fix any compilation errors
3. Commit and push again

### GitHub Actions not running?
1. Check `.github/workflows/deploy.yml` exists
2. Verify you pushed to the `source` branch
3. Check Actions tab for error messages

## Required Dependencies

- `gh-pages`: For manual deployment
- Node.js 18+ (for GitHub Actions)

## First Time Setup Checklist

- [ ] Repository created as `hunexture.github.io`
- [ ] `homepage` field set in package.json
- [ ] GitHub Pages enabled in repository settings
- [ ] GitHub Pages source set to `main` branch
- [ ] GitHub Actions workflow file created
- [ ] First successful deployment completed

## URLs

- **Live Site:** https://hunexture.github.io
- **Repository:** https://github.com/hunexture/hunexture.github.io
- **Settings:** https://github.com/hunexture/hunexture.github.io/settings/pages
- **Actions:** https://github.com/hunexture/hunexture.github.io/actions
