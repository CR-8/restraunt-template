import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";

import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Cocktails from './components/Cocktails.jsx'
import About from './components/About.jsx'
import Art from './components/Art.jsx'
import Menu from './components/Menu.jsx'
import Testimonials from './components/Testimonials.jsx';
import Vibes from './components/Vibes.jsx';
import Contact from './components/Contact.jsx'
import StickyButton from './components/StickyButton.jsx'

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
 return (
	<main className='font-poppins'>
	 <Navbar />
	 <Hero />
	 <Cocktails />
	 <About />
	 <Art />
	 <Menu />
	 <Testimonials />
	 <Vibes />
	 <Contact />
	 <StickyButton />
	</main>
 )
}

export default App
