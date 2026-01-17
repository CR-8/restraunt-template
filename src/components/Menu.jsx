'use client';

import { signatureDishes } from '../../constants/index.js'
import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

const Menu = () => {
 const contentRef = useRef();
 const [currentIndex, setCurrentIndex] = useState(0);
 
 useGSAP(() => {
	const timeline = gsap.timeline();
	
	timeline
	 .fromTo('#title', 
		{ opacity: 0, y: 20 }, 
		{ opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
	 )
	 .fromTo('.dish-img img', 
		{ opacity: 0, y: 100, scale: 0.8 }, 
		{ y: 0, opacity: 1, scale: 1, duration: 1, ease: 'power2.out' },
		'-=0.3'
	 )
	 .fromTo('.details h2', 
		{ yPercent: 100, opacity: 0 }, 
		{ yPercent: 0, opacity: 1, duration: 0.8, ease: 'power1.inOut' },
		'-=0.6'
	 )
	 .fromTo('.details p', 
		{ yPercent: 100, opacity: 0 }, 
		{ yPercent: 0, opacity: 1, duration: 0.8, ease: 'power1.inOut' },
		'-=0.6'
	 );
 }, [currentIndex]);
 
 const totalDishes = signatureDishes.length;
 
 const goToSlide = (index) => {
	const newIndex = (index + totalDishes) % totalDishes;
	
	setCurrentIndex(newIndex);
 }
 
 const getDishAt = (indexOffset) => {
	return signatureDishes[(currentIndex + indexOffset + totalDishes) % totalDishes]
 }
 
 const currentDish = getDishAt(0);
 const prevDish = getDishAt(-1);
 const nextDish = getDishAt(1);
 
 return (
	<section id="menu" aria-labelledby="menu-heading">
	 <img src="/images/slider-left-leaf.png" alt="left-leaf" id="m-left-leaf" />
	 <img src="/images/slider-right-leaf.png" alt="right-leaf" id="m-right-leaf" />
	 
	 <h2 id="menu-heading" className="sr-only">
		Signature Dishes Menu
	 </h2>
	 
	 <nav className="cocktail-tabs" aria-label="Dish Navigation">
		{signatureDishes.map((dish, index) => {
		 const isActive = index === currentIndex;
		 
		 return (
			<button key={dish.id} className={`
				${isActive
				 ? 'text-white border-white'
				 : 'text-white/50 border-white/50'}
			 `}	onClick={() => goToSlide(index)}
			>
			 {dish.name}
			</button>
		 )
		})}
	 </nav>
	 
	 <div className="content">
		<div className="arrows">
		 <button className="text-left" onClick={() => goToSlide(currentIndex - 1)}>
			<span>{prevDish.name}</span>
			<img src="/images/right-arrow.png" alt="right-arrow" aria-hidden="true" />
		 </button>
		 
		 <button className="text-left" onClick={() => goToSlide(currentIndex + 1)}>
			<span>{nextDish.name}</span>
			<img src="/images/left-arrow.png" alt="left-arrow" aria-hidden="true" />
		 </button>
		</div>
		
		<div className="dish-img">
		 <img src={currentDish.image} className="object-contain"/>
		</div>
		
		<div className="recipe">
		 <div ref={contentRef} className="info">
			<p>Signature Dish:</p>
			<p id="title">{currentDish.name}</p>
		 </div>
		 
		 <div className="details">
			<h2>{currentDish.title}</h2>
			<p>{currentDish.description}</p>
		 </div>
		</div>
	 </div>
	</section>
 )
}
export default Menu
