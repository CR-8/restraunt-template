import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import { CircularTestimonials } from './ui/circular-testimonials.jsx';
import { testimonialsList } from '../../constants/index.js';

const Testimonials = () => {
 useGSAP(() => {
	const titleSplit = SplitText.create('#testimonials h2', {
	 type: 'words'
	})
	
	const scrollTimeline = gsap.timeline({
	 scrollTrigger: {
		trigger: '#testimonials',
		start: 'top center'
	 }
	})
	
	scrollTimeline
	 .from(titleSplit.words, {
		opacity: 0, duration: 1, yPercent: 100, ease: 'expo.out', stagger: 0.02
	})
	 .from('.testimonials-wrapper', {
		opacity: 0, duration: 1, ease: 'power1.inOut',
	}, '-=0.5')
 })
 
 return (
	<section id="testimonials" className="min-h-screen py-28 2xl:px-0 px-5 container mx-auto">
	 <div className="mb-16">
		<p className="badge">Testimonials</p>
		<h2 className="text-5xl md:text-6xl font-modern-negra max-w-3xl">
		 What Our Guests <span className="text-yellow">Are Saying</span>
		</h2>
	 </div>
	 
	 <div className="testimonials-wrapper flex items-center justify-center">
		<CircularTestimonials
		 testimonials={testimonialsList}
		 autoplay={true}
		 colors={{
			name: "#e7d393",
			designation: "#efefef",
			testimony: "#ffffff",
			arrowBackground: "#e7d393",
			arrowForeground: "#000000",
			arrowHoverBackground: "#ffffff",
		 }}
		 fontSizes={{
			name: "28px",
			designation: "18px",
			quote: "20px",
		 }}
		/>
	 </div>
	</section>
 )
}

export default Testimonials
