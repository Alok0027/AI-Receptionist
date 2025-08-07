import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import team1 from '../assets/team1.jpeg';
import team2 from '../assets/team2.jpeg';
import team3 from '../assets/team3.jpeg';
import team4 from '../assets/team4.jpeg';

const Team = () => {
    const members = [
      { name: 'Gwen Chase', role: 'Marketing', image: team1 },
      { name: 'James Bond', role: 'Designer', image: team2 },
      { name: 'Emily Gwen', role: 'Support Team', image: team3 },
      { name: 'Lena M', role: 'Product Manager', image: team4 },
    ];

    const [index, setIndex] = useState(members.length);
    const [isTransitioning, setIsTransitioning] = useState(true);

    const extendedMembers = [...members, ...members, ...members];

    const scroll = (direction) => {
        if (!isTransitioning) return;
        setIsTransitioning(true);
        setIndex((prevIndex) => prevIndex + direction);
    };

    const handleAnimationComplete = () => {
        if (index === members.length - 1) {
            setIsTransitioning(false);
            setIndex(members.length * 2 - 1);
        } else if (index === members.length * 2) {
            setIsTransitioning(false);
            setIndex(members.length);
        }
    };
    
    return (
        <div id="team" className="min-h-screen bg-stone-50">
            <section className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center text-3xl sm:text-4xl font-medium mb-8 text-stone-900">
                    Team Behind Success
                </div>
                <div className="text-center text-stone-600 mb-12">
                    Meet the experts behind our AI—driven to deliver smart solutions.
                </div>
            <div className="w-full relative flex justify-center items-center">
                <button
                    onClick={() => scroll(-1)}
                    className="absolute left-0 z-10 bg-white border border-stone-200 rounded-full p-2 shadow-md hover:bg-stone-50 transition-colors"
                >
                    ◀
                </button>
                <div className="overflow-hidden w-full max-w-4xl">
                    <motion.div
                        className="flex gap-6"
                        animate={{ x: `-${index * (380 + 24)}px` }}
                        transition={isTransitioning ? { type: 'spring', stiffness: 300, damping: 30 } : { duration: 0 }}
                        onAnimationComplete={handleAnimationComplete}
                    >
                        {extendedMembers.map((member, i) => (
                            <div
                                key={i}
                                className="w-80 sm:w-[380px] h-[28rem] bg-white rounded-2xl shadow-md p-4 flex-shrink-0"
                            >
                                <div className="text-lg font-normal">{member.name}</div>
                                <div className="text-sm text-stone-500 mb-4">{member.role}</div>

                                <div className="flex gap-2 mb-4">
                                    <button className="bg-stone-100 p-2 rounded-lg hover:bg-stone-200 transition-colors">X</button>
                                    <button className="bg-stone-100 p-2 rounded-lg hover:bg-stone-200 transition-colors">IG</button>
                                    <button className="bg-stone-100 p-2 rounded-lg hover:bg-stone-200 transition-colors">LI</button>
                                </div>

                                <div className="rounded-xl overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={`Team member ${member.name}`}
                                        className="w-full h-[19rem] object-cover"
                                    />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
                <button
                    onClick={() => scroll(1)}
                    className="absolute right-0 z-10 bg-white border border-stone-200 rounded-full p-2 shadow-md hover:bg-stone-50 transition-colors"
                >
                    ▶
                </button>
            </div>
            </section>
        </div>
    );
}
export default Team;