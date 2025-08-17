# GitHub Pages Setup Guide

Follow these steps to deploy your SchaetzKC LLC website to GitHub Pages:

## 📋 Prerequisites

1. A GitHub account
2. Git installed on your computer

## 🚀 Deployment Steps

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository: `schaetzkc`
5. Make sure it's set to "Public" (required for free GitHub Pages)
6. **Do NOT** initialize with README, .gitignore, or license (we already have these)
7. Click "Create repository"

### Step 2: Connect Local Project to GitHub

Open terminal in your project directory and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Make first commit
git commit -m "Initial commit: Schaetzkc LLC website"

# Add GitHub repository as origin (replace 'yourusername' with your GitHub username)
git remote add origin https://github.com/yourusername/schaetzkc.git

# Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "GitHub Actions"
5. The workflow will automatically trigger and deploy your site

### Step 4: Access Your Website

After the deployment completes (usually 2-5 minutes):
- Your website will be available at: `https://yourusername.github.io/schaetzkc/`
- You can find the URL in the "Pages" settings section

## 🔄 Updating Your Website

To update your website, simply make changes and push to GitHub:

```bash
# Make your changes to the code
# Then commit and push:
git add .
git commit -m "Update website content"
git push
```

The GitHub Action will automatically rebuild and redeploy your site.

## 🎯 Custom Domain (Optional)

If you want to use a custom domain:

1. In your repository settings, go to "Pages"
2. Under "Custom domain", enter your domain (e.g., `schaetzkc.com`)
3. Add a CNAME file to your repository root with your domain
4. Configure your domain's DNS to point to GitHub Pages

## 🚨 Troubleshooting

- **Build fails**: Check the "Actions" tab in your repository for error details
- **Site not loading**: Make sure the repository is public and Pages is enabled
- **Assets not loading**: Verify the base path in `vite.config.js` matches your repository name

## 📞 Need Help?

If you encounter any issues, check:
1. The "Actions" tab for build logs
2. The "Issues" section for common problems
3. GitHub Pages documentation: https://pages.github.com/
