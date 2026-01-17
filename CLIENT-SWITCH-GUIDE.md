# Quick Client Switch Guide

To customize this template for a new client, edit `constants/index.js` and change the `restaurantConfig` object:

```javascript
const restaurantConfig = {
  name: "Your Restaurant Name",
  tagline: "Your Tagline",
  phone: "+91 XXXXXXXXXX",
  whatsapp: "91XXXXXXXXXX", // Without + or spaces
  email: "info@yourrestaurant.com",
  address: {
    line1: "Your Address Line 1",
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
  googleMapsEmbed: "Your Google Maps Embed URL",
};
```

## How to get Google Maps Embed URL:
1. Go to Google Maps
2. Search for your location
3. Click "Share"
4. Click "Embed a map"
5. Copy the URL from the iframe src attribute

That's it! Change these values and redeploy for instant client customization.
