const navLinks = [
 {
	id: "menu",
	title: "Menu",
 },
 {
	id: "about",
	title: "About Us",
 },
 {
	id: "testimonials",
	title: "Reviews",
 },
 {
	id: "contact",
	title: "Contact",
 },
];

const appetizers = [
 {
	name: "Paneer Tikka",
	region: "North India",
	detail: "Grilled cottage cheese with spices",
	price: "₹350",
 },
 {
	name: "Samosa Chaat",
	region: "Delhi",
	detail: "Crispy samosas with chutneys",
	price: "₹180",
 },
 {
	name: "Chicken 65",
	region: "South India",
	detail: "Spicy fried chicken",
	price: "₹420",
 },
 {
	name: "Hara Bhara Kabab",
	region: "Lucknow",
	detail: "Spinach & peas patties",
	price: "₹290",
 },
];

const mainCourse = [
 {
	name: "Butter Chicken",
	region: "Punjab",
	detail: "Creamy tomato curry",
	price: "₹480",
 },
 {
	name: "Biryani (Veg/Chicken)",
	region: "Hyderabad",
	detail: "Fragrant rice with spices",
	price: "₹380/₹520",
 },
 {
	name: "Dal Makhani",
	region: "Punjab",
	detail: "Creamy black lentils",
	price: "₹320",
 },
 {
	name: "Palak Paneer",
	region: "North India",
	detail: "Spinach with cottage cheese",
	price: "₹360",
 },
];

const profileLists = [
 {
	imgPath: "/images/profile1.png",
 },
 {
	imgPath: "/images/profile2.png",
 },
 {
	imgPath: "/images/profile3.png",
 },
 {
	imgPath: "/images/profile4.png",
 },
];

const featureLists = [
 "Authentic regional recipes",
 "Fresh ingredients daily",
 "Traditional cooking methods",
 "Spice levels customizable",
];

const goodLists = [
 "Handpicked spices from India",
 "Time-honored cooking methods",
 "Culinary artistry in every dish",
 "Freshly ground masalas",
];

const storeInfo = {
 heading: "Where to Find Us",
 address: "123, MG Road, Sector 29, Gurgaon, Haryana 122001",
 contact: {
	phone: "+91 98765 43210",
	email: "info@restauranttemplate.com",
 },
};

const openingHours = [
 { day: "Mon–Thu", time: "11:00 AM – 11:00 PM IST" },
 { day: "Fri", time: "11:00 AM – 11:30 PM IST" },
 { day: "Sat", time: "10:00 AM – 11:30 PM IST" },
 { day: "Sun", time: "10:00 AM – 11:00 PM IST" },
];

const socials = [
 {
	name: "Instagram",
	icon: "/images/insta.png",
	url: "#",
 },
 {
	name: "X (Twitter)",
	icon: "/images/x.png",
	url: "#",
 },
 {
	name: "Facebook",
	icon: "/images/fb.png",
	url: "#",
 },
];

const allCocktails = [
 {
	id: 1,
	name: "Classic Mojito",
	image: "/images/drink1.png",
	title: "Simple Ingredients, Bold Flavor",
	description:
	 "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
 },
 {
	id: 2,
	name: "Raspberry Mojito",
	image: "/images/drink2.png",
	title: "A Zesty Classic That Never Fails",
	description:
	 "The Margarita is a classic that balances tangy lime, smooth tequila, and a touch of sweetness. Shaken, frozen, or on the rocks—it’s always crisp & refreshing.",
 },
 {
	id: 3,
	name: "Violet Breeze",
	image: "/images/drink3.png",
	title: "Simple Ingredients, Bold Flavor",
	description:
	 "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
 },
 {
	id: 4,
	name: "Curacao Mojito",
	image: "/images/drink4.png",
	title: "Crafted With Care, Poured With Love",
	description:
	 "Each cocktail is made with fresh ingredients and a passion for perfecting every pour, whether you're celebrating or simply relaxing.",
 },
];

const testimonialsList = [
 {
	quote:
	 "The food here is absolutely authentic! Every dish tastes like it's made by my grandmother. The spices are perfectly balanced and the flavors transport you straight to India. Best Indian restaurant in the city!",
	name: "Rajesh Kumar",
	designation: "Food Blogger",
	src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1368&auto=format&fit=crop",
 },
 {
	quote:
	 "This restaurant has become our family's favorite spot! The ambiance is warm and inviting, and every dish is consistently delicious. Their biryani is to die for. Highly recommended for family gatherings!",
	name: "Priya Sharma",
	designation: "Regular Customer",
	src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1368&auto=format&fit=crop",
 },
 {
	quote:
	 "As a food critic, I've dined at countless Indian restaurants. This one stands out for its authentic recipes, fresh ingredients, and impeccable service. The tandoori platter is exceptional!",
	name: "Arjun Mehta",
	designation: "Restaurant Critic",
	src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1368&auto=format&fit=crop",
 },
 {
	quote:
	 "From the moment we walked in, we felt welcomed. The staff is incredibly courteous, the atmosphere is beautiful, and most importantly, the food is outstanding. A must-visit for anyone who loves authentic Indian cuisine!",
	name: "Neha Patel",
	designation: "Food Enthusiast",
	src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1368&auto=format&fit=crop",
 },
];

export {
 navLinks,
 appetizers,
 mainCourse,
 profileLists,
 featureLists,
 goodLists,
 openingHours,
 storeInfo,
 socials,
 allCocktails as signatureDishes,
 testimonialsList,
};
