# AutoEcole Pro - Driving School Website

A modern, responsive driving school website built with Next.js, Tailwind CSS, and Framer Motion. Inspired by Ornikar's design with a clean, professional interface and smooth animations.

## 🚗 Features

- **Modern Design**: Clean, minimalist interface with orange/blue accent colors
- **Responsive**: Mobile-first design that works on all devices
- **Animations**: Smooth Framer Motion animations throughout the site
- **Components**: Modular, reusable React components
- **Performance**: Optimized with Next.js Image component and lazy loading
- **Accessibility**: Semantic HTML and proper ARIA labels

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## 📁 Project Structure

```
autoecole/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Homepage
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── PromoBanner.tsx      # Promotional banner with countdown
│   ├── HeroSection.tsx      # Main hero section
│   ├── FeaturesSection.tsx  # Features and benefits
│   ├── PricingSection.tsx   # Pricing plans
│   ├── TrustSection.tsx     # Testimonials and reviews
│   ├── InstructorsPreview.tsx # Instructor cards
│   ├── FAQSection.tsx       # FAQ accordion
│   ├── CTASection.tsx       # Call-to-action section
│   └── Footer.tsx           # Footer with links
├── tailwind.config.js       # Tailwind configuration
├── next.config.js           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone or download the project**
   ```bash
   cd autoecole
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Design System

### Colors
- **Primary**: #FF6B00 (Orange)
- **Secondary**: #0055FF (Blue)
- **Neutral**: #F8F9FB (Light Gray)
- **Background**: White with subtle gradients

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold, large sizes (text-4xl to text-6xl)
- **Body**: Regular weight, good line height

### Spacing
- **Section Padding**: py-16 md:py-24
- **Container**: max-w-7xl, centered
- **Card Padding**: p-6 to p-8

### Border Radius
- **Cards**: rounded-2xl (1.5rem)
- **Buttons**: rounded-xl (1rem)
- **Images**: rounded-xl to rounded-2xl

## 🎭 Animations

The website includes various Framer Motion animations:

- **Page Load**: Fade-in and slide-up effects
- **Staggered Cards**: Features, pricing, and instructor cards
- **Hover Effects**: Scale and lift animations
- **Scroll Animations**: Elements animate into view
- **Interactive Elements**: Button presses and form interactions
- **Continuous Animations**: Logo carousel and promotional banners

## 📱 Responsive Design

- **Mobile**: Stacked layout, centered text, touch-friendly buttons
- **Tablet**: 2-column grids, adjusted spacing
- **Desktop**: 3-4 column grids, side-by-side layouts
- **Large Screens**: Maximum width containers with generous spacing

## 🔧 Customization

### Adding New Sections
1. Create a new component in `/components/`
2. Import and add to `app/page.tsx`
3. Follow the existing animation patterns

### Modifying Colors
Update the color palette in `tailwind.config.js`:
```javascript
colors: {
  primary: '#FF6B00',
  secondary: '#0055FF',
  neutral: '#F8F9FB',
}
```

### Adding Content
- Replace placeholder text with real content
- Update images with actual photos
- Modify pricing and contact information
- Add real testimonials and reviews

## 📞 Contact Information

Update the contact details in the components:
- Phone: 01 23 45 67 89
- Email: contact@autoecolepro.fr
- Location: Paris & Banlieue

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📄 License

This project is for educational and commercial use. Feel free to modify and use for your driving school business.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support, please contact the development team or create an issue in the repository.

---

**Built with ❤️ for driving schools everywhere**

