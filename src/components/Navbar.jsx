import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import { useState } from 'react';

import { navLinks } from '../../constants/index.js'

const Navbar = () => {
 const [isOpen, setIsOpen] = useState(false);

 useGSAP(() => {
	const navTween = gsap.timeline({
	 scrollTrigger: {
		trigger: 'nav',
		start: 'bottom top'
	 }
	});
 })

 const toggleMenu = () => {
	setIsOpen(!isOpen);
 }

 const closeMenu = () => {
	setIsOpen(false);
 }
 
 return (
	<nav>
	 <div className="flex flex-row justify-between items-center gap-5 py-5 lg:px-0 px-5 container mx-auto">
		<a href="#home" className="flex items-center gap-2 z-50">
		 <img src="/images/logo.png" alt="logo" className="h-8 w-auto" />
		 <p className="font-modern-negra text-3xl -mb-2">Velvet Pour</p>
		</a>
		
		{/* Desktop Menu */}
		<ul className="hidden md:flex items-center lg:gap-12 gap-7">
		 {navLinks.map((link) => (
			<li key={link.id}>
			 <a href={`#${link.id}`} className="cursor-pointer text-nowrap md:text-base text-sm hover:text-yellow transition-colors">
				{link.title}
			 </a>
			</li>
		 ))}
		</ul>

		{/* Mobile Menu Button */}
		<button 
		 onClick={toggleMenu}
		 className="md:hidden z-50 flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
		 aria-label="Toggle menu"
		>
		 <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
		 <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
		 <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
		</button>

		{/* Mobile Menu */}
		<div className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-md z-40 transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
		 <ul className="flex flex-col items-center justify-center h-full gap-8">
			{navLinks.map((link) => (
			 <li key={link.id}>
				<a 
				 href={`#${link.id}`} 
				 className="text-2xl font-medium hover:text-yellow transition-colors"
				 onClick={closeMenu}
				>
				 {link.title}
				</a>
			 </li>
			))}
		 </ul>
		</div>
	 </div>
	</nav>
 )
}
export default Navbar