# 🍸 Velvet Pour - Premium Bar & Restaurant Website Template

A modern, fully responsive website template for bars, restaurants, and nightlife venues. Built with React, Vite, Tailwind CSS, and GSAP animations.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.3.1-61dafb.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.0-38bdf8.svg)

## ✨ Features

### 🎨 Modern UI/UX
- Smooth GSAP scroll animations
- Responsive design (mobile-first approach)
- Card-based menu with hover effects
- Instagram-style social proof grid
- Interactive cocktail showcase with staggered animations

### 📱 Mobile Optimizations
- Sticky "Reserve Table" button (mobile-only)
- WhatsApp deep linking for instant orders/reservations
- Touch-friendly navigation
- Optimized grid layouts (2 columns mobile, 4 columns desktop)

### 🗺️ Location & Contact
- Google Maps integration
- 3-column footer with address, hours, and map
- Social media links
- Click-to-call & email functionality

### 🚀 Multi-Client System
- Centralized `restaurantConfig` for easy client switching
- Change 1 file to rebrand entire site
- Perfect for agencies serving multiple restaurants
- **Switch clients in 30 seconds!**

## 🛠️ Tech Stack

- **Framework**: React 18.3.1 + Vite 6.3.5
- **Styling**: Tailwind CSS 4.1.0
- **Animations**: GSAP 3.12.8 with ScrollTrigger
- **UI Components**: Radix UI primitives
- **Icons**: Custom SVG components
- **Deployment**: Vercel (optimized)

## 📦 Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd mashup

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎯 Quick Client Customization

Edit `constants/index.js` and modify the `restaurantConfig`:

```javascript
const restaurantConfig = {
  name: "Your Restaurant Name",
  tagline: "Your Tagline",
  phone: "+91 XXXXXXXXXX",
  whatsapp: "91XXXXXXXXXX",
  email: "info@yourrestaurant.com",
  address: {
    line1: "Your Address",
    line2: "City, State PIN",
    city: "Your City",
    state: "Your State",
    country: "India"
  },
  hours: "Your Hours",
  socialMedia: {
    instagram: "https://instagram.com/yourhandle",
    facebook: "https://facebook.com/yourpage",
    twitter: "https://twitter.com/yourhandle"
  },
  googleMapsEmbed: "Your Google Maps Embed URL"
};
```

**That's it!** The entire site updates automatically.

See [CLIENT-SWITCH-GUIDE.md](CLIENT-SWITCH-GUIDE.md) for detailed instructions.

## 📁 Project Structure

```
mashup/
├── public/
│   ├── favicon.svg          # Custom martini glass favicon
│   ├── fonts/               # Custom fonts
│   ├── images/              # All images and assets
│   └── videos/              # Video assets
├── src/
│   ├── components/
│   │   ├── About.jsx        # About section
│   │   ├── Art.jsx          # Art/gallery section
│   │   ├── Cocktails.jsx    # Cocktails showcase
│   │   ├── Contact.jsx      # Footer with map
│   │   ├── Hero.jsx         # Hero section
│   │   ├── Menu.jsx         # Signature dishes/drinks
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── StickyButton.jsx # Mobile reserve button
│   │   ├── Testimonials.jsx # Customer reviews
│   │   ├── Vibes.jsx        # Instagram grid
│   │   └── ui/              # Reusable UI components
│   ├── lib/
│   │   └── utils.js         # Utility functions
│   ├── App.jsx              # Main app component
│   ├── index.css            # Global styles + Tailwind
│   └── main.jsx             # Entry point
├── constants/
│   └── index.js             # All data & config
├── index.html               # HTML template with SEO
└── vite.config.js           # Vite configuration
```

## 🎨 Key Components

### Sticky Reserve Button
Mobile-only floating button that follows scroll. Integrates with WhatsApp for instant reservations.

### Card-Based Menu
Grid layout with:
- High-quality drink images
- Prices displayed prominently
- One-click WhatsApp ordering
- Smooth hover animations

### Vibes Section
Instagram-style 6-image grid showcasing:
- Live venue photos
- Food and drink shots
- Customer experiences
- Direct Instagram link

### Enhanced Footer
Three-column layout:
- **Address**: Full location details
- **Hours & Contact**: Business hours, phone, email
- **Map**: Embedded Google Maps

## 🎬 Animations

- **Hero Section**: Split text animations, floating leaves
- **Menu Section**: Staggered bottom-to-top glass reveal with scale effect
- **Scroll Triggers**: Elements animate on scroll into view
- **Smooth Scroll**: CSS-based smooth anchor navigation

## 🔧 Customization Guide

### Change Colors
Edit `src/index.css`:
```css
@theme {
  --color-yellow: #e7d393;  /* Accent color */
  --color-white-100: #efefef;
}
```

### Add Menu Items
Edit `constants/index.js` - `allCocktails` array:
```javascript
{
  id: 5,
  name: "New Cocktail",
  image: "/images/drink5.png",
  title: "Catchy Title",
  description: "Description here",
  price: "₹500"
}
```

### Update Images
Replace images in `public/images/` folder. Keep the same filenames for automatic updates.

### Modify Sections
All sections are in `src/components/`. Edit component files directly.

## 📱 WhatsApp Integration

The template includes WhatsApp deep linking:

```javascript
// Reserve table
https://wa.me/{whatsapp}?text=I'd like to reserve a table

// Order item
https://wa.me/{whatsapp}?text=I'd like to order {itemName}
```

Update the WhatsApp number in `restaurantConfig.whatsapp`.

## 🌐 SEO Optimization

The template includes:
- Semantic HTML5 elements
- Meta descriptions and keywords
- Open Graph tags for social sharing
- Optimized title tags
- Alt text on all images
- Structured data ready

Edit SEO tags in `index.html`.

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
```bash
# Build the project
npm run build

# Upload the 'dist' folder to your hosting provider
```

## 📸 Replace Demo Images

1. Add your images to `public/images/`
2. Update image references in components
3. Update Vibes section URLs in `Vibes.jsx`
4. Recommended image sizes:
   - Hero: 1920x1080
   - Menu items: 800x800
   - Vibes grid: 600x600

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

MIT License - feel free to use for commercial projects!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Support

For questions or support, reach out via:
- Email: your-email@example.com
- GitHub Issues: [Project Issues](#)

---

**Built with ❤️ for the hospitality industry**

*Perfect for bars, restaurants, cafes, lounges, and nightclubs*