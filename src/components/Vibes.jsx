import { restaurantConfig } from '../../constants/index.js';

const Vibes = () => {
  const vibeImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=500&auto=format&fit=crop",
      alt: "Live music night at Velvet Pour"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=500&auto=format&fit=crop",
      alt: "Signature cocktails at the bar"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=500&auto=format&fit=crop",
      alt: "Friends enjoying drinks"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=500&auto=format&fit=crop",
      alt: "Bartender crafting cocktails"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=500&auto=format&fit=crop",
      alt: "Weekend vibes at the lounge"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1574096079513-d8259312b785?w=500&auto=format&fit=crop",
      alt: "Elegant dining experience"
    }
  ];

  return (
    <section className="py-20 px-4 bg-black" id="vibes">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center text-white mb-3">
          Live from {restaurantConfig.name}
        </h2>
        <p className="text-center text-gray-400 mb-12">
          See what's happening at {restaurantConfig.city}'s premier bar & lounge
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {vibeImages.map((image) => (
            <div 
              key={image.id}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                    <span className="text-sm font-semibold">Follow us on Instagram</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href={restaurantConfig.socialMedia.instagram} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Follow @velvetpour
          </a>
        </div>
      </div>
    </section>
  );
};

export default Vibes;
