# SchaetzKC LLC - Modern React Website

A sleek, modern single-page application built with React and Vite, showcasing SchaetzKC LLC's services in AI, Big Data, and Mobile App Development.

## 🚀 Features

- **Modern Design**: Clean, minimal interface with gradient accents and smooth animations
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Single Page Application**: Seamless navigation between sections
- **Technology Focus**: Highlights AI, Big Data, and Mobile App services
- **Contact Form**: Interactive contact form with validation
- **Performance Optimized**: Built with Vite for fast development and builds

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icon library

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd schaetzkc
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.jsx          # Landing section with animated icons
│   ├── Services.jsx      # AI, Big Data, Mobile services
│   ├── About.jsx         # Company information and stats
│   ├── Contact.jsx       # Contact form and information
│   ├── Navigation.jsx    # Header navigation
│   └── Footer.jsx        # Footer with links
├── App.jsx               # Main application component
├── main.jsx             # Application entry point
└── index.css            # Global styles and Tailwind imports
```

## 🎨 Design Features

- **Dark Theme**: Modern dark color scheme with blue accents
- **Gradient Text**: Eye-catching gradient effects for headings
- **Glass Morphism**: Subtle glass effects for cards and navigation
- **Floating Animations**: Animated background elements
- **Hover Effects**: Interactive buttons and cards
- **Smooth Scrolling**: Seamless navigation between sections

## 🔧 Customization

### Colors
The color scheme can be modified in `tailwind.config.js`. The primary colors use a blue palette that can be easily changed.

### Content
Update the content in each component file:
- Company information in `About.jsx`
- Services details in `Services.jsx`
- Contact information in `Contact.jsx`

### Animations
Framer Motion animations can be customized in each component by modifying the `motion` props and variants.

## 📱 Services Highlighted

1. **Artificial Intelligence**
   - Machine Learning
   - Deep Learning
   - NLP & Computer Vision
   - AI Automation

2. **Big Data Analytics**
   - Data Pipeline Development
   - Predictive Analytics
   - Real-time Processing
   - Business Intelligence

3. **Mobile Applications**
   - iOS & Android Development
   - Cross-Platform Solutions
   - UI/UX Design
   - App Store Optimization

## 🌐 Deployment

### GitHub Pages (Recommended)

This project is configured for automatic deployment to GitHub Pages:

1. **Push to GitHub**: Push this repository to GitHub (make sure the repository name is `schaetzkc`)

2. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions"

3. **Automatic Deployment**: 
   - The GitHub Action will automatically run on every push to the `main` branch
   - Your site will be available at: `https://yourusername.github.io/schaetzkc/`

### Alternative Deployment Methods

The site can also be deployed to other static hosting services:

- **Vercel**: `npm i -g vercel && vercel`
- **Netlify**: Drag and drop the `dist` folder after running `npm run build`
- **Manual GitHub Pages**: Run `npm run deploy` (requires `gh-pages` package)

### Local Build

To build the project locally:

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📄 License

This project is private property of SchaetzKC LLC.

## 🤝 Contact

For any questions or modifications, please contact:
- Email: gary@schaetzKC.com
- Website: [SchaetzKC LLC](http://localhost:5173)
