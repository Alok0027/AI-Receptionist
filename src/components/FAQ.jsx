import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
	{
		question: 'What services do you offer?',
		answer:
			'We specialize in AI solutions, including machine learning models, automation, chatbots, predictive analytics, and consulting tailored to your business needs.',
	},
	{
		question: 'How long does it take to develop an AI solution?',
		answer:
			'Depending on the project’s complexity, timelines typically range from 2 to 12 weeks. We’ll provide a detailed timeline after our initial discovery call.',
	},
	{
		question: 'Do I need technical expertise to work with you?',
		answer:
			'No, you don\'t. We handle all the technical aspects. We work closely with you to understand your business needs and goals.',
	},
	{
		question: 'Is my data safe when working with your agency?',
		answer:
			'Yes, data security is our top priority. We follow strict data protection protocols and ensure your data is handled securely and confidentially.',
	},
	{
		question: 'Can AI really help my business grow?',
		answer:
			'Absolutely. AI can help you automate tasks, gain insights from data, improve customer service, and make better business decisions, all of which contribute to growth.',
	},
];

const Accordion = ({ question, answer, isOpen, onClick }) => {
	return (
		<div
			className="rounded-xl mb-4 relative shadow-lg"
			style={{
				background:
					'linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
				boxShadow: `
          0 -40px 0 0 rgba(255, 255, 255, 1) inset,
          0 -80px 120px rgba(255, 255, 255, 1) inset,
          0 -60px 100px rgba(255, 255, 255, 0.8) inset,
          0 4px 8px rgba(0, 0, 0, 0.1),
          0 1px 2px rgba(0, 0, 0, 0.06)
        `,
			}}
		>
			<div className="absolute top-0 left-0 w-full h-2 bg-white rounded-t-xl shadow-[inset_0_-2px_4px_rgba(255,255,255,0.6)] z-10" />
			<button
				onClick={onClick}
				className="w-full flex justify-between items-center text-left p-3 sm:p-4 font-medium text-stone-800 bg-transparent"
				style={{ background: 'transparent' }}
			>
				<span>{question}</span>
				<motion.span
					animate={{ rotate: isOpen ? 180 : 0 }}
					transition={{ duration: 0.3 }}
				>
					<svg
						className="w-5 h-5"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M19 9l-7 7-7-7"
						/>
					</svg>
				</motion.span>
			</button>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.2 }}
						className="px-3 sm:px-4 pb-3 sm:pb-4 text-stone-600"
					>
						<div className="pt-2">{answer}</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

const FAQ = () => {
	const [openIndex, setOpenIndex] = useState(null);

	const handleAccordionClick = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section className="bg-stone-50">
			<div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<span className="bg-stone-200 text-stone-600 px-4 py-2 rounded-full text-sm font-medium">
						FAQS
					</span>
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 mt-4">
						Questions? Answers!
					</h2>
					<p className="text-stone-500 mt-4 text-base">
						Find some quick answers to the most common questions.
					</p>
				</div>
				<div className="bg-stone-50">
					{faqs.map((faq, index) => (
						<Accordion
							key={index}
							question={faq.question}
							answer={faq.answer}
							isOpen={openIndex === index}
							onClick={() => handleAccordionClick(index)}
						/>
					))}
				</div>
				<div className="text-center mt-12 bg-stone-50">
					<p className="text-stone-600 text-base sm:text-lg flex items-center justify-center">
						<svg
							className="w-6 h-6 mr-2"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</svg>
						Feel free to mail us for any enquiries :{' '}
						<a
							href="mailto:orbai@support.com"
							className="font-medium text-stone-800 hover:underline ml-1"
						>
							kairo@support.com
						</a>
					</p>
				</div>
			</div>
		</section>
	);
};

export default FAQ;