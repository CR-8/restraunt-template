import { openingHours, socials, restaurantConfig } from '../../constants/index.js'
import { useGSAP } from '@gsap/react'
import { SplitText} from 'gsap/all';
import gsap from 'gsap';

const Contact = () => {
 	useGSAP(() => {
		const titleSplit = SplitText.create('#contact h2', { type: 'words' });
		
		const timeline = gsap.timeline({
		 scrollTrigger: {
			trigger: '#contact',
			start: 'top center',
		 },
		 ease: "power1.inOut"
		})
	 
	 timeline
		.from(titleSplit.words, {
		 opacity: 0, yPercent: 100, stagger: 0.02
	 })
		.from('#contact h3, #contact p', {
			opacity: 0, yPercent: 100, stagger: 0.02
	 })
		.to('#f-right-leaf', {
		 y: '-50', duration: 1, ease: 'power1.inOut'
	 }).to('#f-left-leaf', {
		 y: '-50', duration: 1, ease: 'power1.inOut'
	 }, '<')
	})
 
 return (
	<footer id="contact">
	 <img src="/images/footer-right-leaf.png" alt="leaf-right" id="f-right-leaf" />
	 <img src="/images/footer-left-leaf.png" alt="leaf-left" id="f-left-leaf" />
	 
	 <div className="content">
		<h2>Where to Find Us</h2>
		
		<div className="grid md:grid-cols-3 gap-8">
		 <div>
			<h3 className="text-amber-500 font-bold text-xl mb-3">Address</h3>
			<p className="text-gray-300">{restaurantConfig.address.line1}</p>
			<p className="text-gray-300">{restaurantConfig.address.line2}</p>
			<p className="text-gray-300 mt-2">{restaurantConfig.address.country}</p>
		 </div>
		 
		 <div>
			<h3 className="text-amber-500 font-bold text-xl mb-3">Hours</h3>
			<p className="text-gray-300 font-semibold">{restaurantConfig.hours}</p>
			<div className="mt-4">
			 <h3 className="text-amber-500 font-bold text-xl mb-2">Contact</h3>
			 <p className="text-gray-300">{restaurantConfig.phone}</p>
			 <p className="text-gray-300">{restaurantConfig.email}</p>
			</div>
		 </div>
		 
		 <div>
			<h3 className="text-amber-500 font-bold text-xl mb-3">Find Us</h3>
			<div className="w-full h-48 rounded-lg overflow-hidden shadow-lg">
			 <iframe 
				src={restaurantConfig.googleMapsEmbed}
				width="100%"
				height="100%"
				style={{ border: 0 }}
				allowFullScreen=""
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
				title={`${restaurantConfig.name} Location`}
			 />
			</div>
		 </div>
		</div>
		
		<div className="mt-12 pt-8 border-t border-gray-800">
		 <h3 className="text-center text-amber-500 font-bold text-xl mb-4">Follow Us</h3>
		 
		 <div className="flex-center gap-5">
			{socials.map((social) => (
			 <a
			 	key={social.name}
				href={social.url}
				target="_blank"
				rel="noopener noreferrer"
				aria-label={social.name}
				className="hover:scale-110 transition-transform duration-300"
			 >
				<img src={social.icon} className="w-8 h-8" alt={social.name} />
			 </a>
			))}
		 </div>
		 
		 <p className="text-center text-gray-500 text-sm mt-8">
			© 2026 {restaurantConfig.name}. All rights reserved.
		 </p>
		</div>
	 </div>
	</footer>
 )
}

export default Contact
