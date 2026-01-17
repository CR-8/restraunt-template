import { restaurantConfig } from '../../constants/index.js';

const StickyButton = () => {
  return (
    <a
      href={`https://wa.me/${restaurantConfig.whatsapp}?text=I'd like to reserve a table`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold flex items-center gap-2 md:hidden"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
      Reserve Table
    </a>
  );
};

export default StickyButton;
