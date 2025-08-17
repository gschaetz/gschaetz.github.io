# GitHub Pages Setup Guide

Follow these steps to deploy your SchaetzKC LLC website to GitHub Pages:

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
