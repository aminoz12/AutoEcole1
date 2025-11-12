# Netlify Deployment Guide

## 🚀 Quick Deployment Steps

### 1. Prepare Your Repository
- Ensure all files are committed to your Git repository
- Push your code to GitHub, GitLab, or Bitbucket

### 2. Deploy to Netlify

#### Option A: Connect Git Repository (Recommended)
1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Click "New site from Git"
3. Choose your Git provider (GitHub, GitLab, Bitbucket)
4. Select your repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: `18`
6. Click "Deploy site"

#### Option B: Drag & Drop
1. Run `npm run build` locally
2. Go to [netlify.com](https://netlify.com)
3. Drag the `dist` folder to the deploy area

### 3. Environment Variables (if needed)
If you have any environment variables:
1. Go to Site settings → Environment variables
2. Add your variables (e.g., API keys, database URLs)

### 4. Custom Domain (Optional)
1. Go to Site settings → Domain management
2. Add your custom domain
3. Configure DNS settings as instructed

## 📁 Project Structure for Deployment

```
autoecole/
├── components/          # React components
├── app/                # Next.js app directory
├── public/             # Static assets
│   ├── *.png          # Images
│   ├── *.avif         # Media logos
│   ├── *.svg          # CPF logo
│   ├── robots.txt     # SEO
│   └── sitemap.xml    # SEO
├── netlify.toml        # Netlify configuration
├── _redirects          # URL redirects
├── next.config.js      # Next.js configuration
├── package.json        # Dependencies
└── tailwind.config.js  # Styling
```

## ⚙️ Configuration Files

### netlify.toml
- Build command and publish directory
- Node.js version
- Redirects and headers
- Caching rules

### next.config.js
- Static export enabled
- Image optimization disabled (for static hosting)
- Trailing slashes enabled
- Custom dist directory

### _redirects
- SPA routing support
- Fallback to index.html

## 🔧 Build Process

1. **Install dependencies**: `npm install`
2. **Build static site**: `npm run build`
3. **Output**: Static files in `dist/` directory
4. **Deploy**: Upload `dist/` to Netlify

## 📱 Features Included

- ✅ Responsive design (mobile-first)
- ✅ SEO optimized (robots.txt, sitemap.xml)
- ✅ Performance optimized (caching headers)
- ✅ Security headers
- ✅ Static export ready
- ✅ Image optimization
- ✅ Interactive maps
- ✅ Smooth animations

## 🌐 Live Features

- **Interactive Google Maps**: Embedded location map
- **Navigation buttons**: Google Maps, Waze, Apple Maps
- **Responsive design**: Works on all devices
- **Fast loading**: Optimized images and code
- **SEO friendly**: Proper meta tags and structure

## 🚨 Important Notes

1. **Update sitemap.xml**: Replace `your-domain.netlify.app` with your actual domain
2. **Update robots.txt**: Replace the sitemap URL with your actual domain
3. **Test locally**: Run `npm run build` and `npm run start` to test
4. **Check images**: Ensure all images in `/public` are optimized
5. **Monitor performance**: Use Netlify's analytics to track performance

## 🔄 Continuous Deployment

Once connected to Git:
- Every push to main branch triggers automatic deployment
- Preview deployments for pull requests
- Rollback to previous deployments if needed

## 📊 Performance Optimization

- Static site generation for fast loading
- Image optimization and lazy loading
- Efficient caching headers
- Minified CSS and JavaScript
- Optimized fonts and assets

Your AutoEcole website is now ready for production deployment on Netlify! 🎉
