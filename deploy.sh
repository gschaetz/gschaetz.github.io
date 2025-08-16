#!/bin/bash

# Deploy to GitHub Pages script
echo "🚀 Starting deployment to GitHub Pages..."

# Build the project
echo "📦 Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📂 Built files are in the 'dist' directory"
    echo ""
    echo "🌐 To deploy to GitHub Pages:"
    echo "1. Push this repository to GitHub"
    echo "2. Go to repository Settings > Pages"
    echo "3. Set source to 'GitHub Actions'"
    echo "4. The site will be available at: https://schaetzkc.github.io/schaetzkc/"
    echo ""
    echo "Or run: npm run deploy (after installing gh-pages)"
else
    echo "❌ Build failed!"
    exit 1
fi
