import React, { useRef, useEffect } from 'react';
import t1 from '../assets/t1.jpeg';
import t2 from '../assets/t2.jpeg';
import t3 from '../assets/t3.jpeg';
import clock from "../assets/clock.svg";
import { Star, TrendingUp, Zap, Settings, DollarSign, BarChart2 } from 'lucide-react';

const benefits = [
  { text: 'Scalable Solutions', icon: <TrendingUp size={18} /> },
  { text: 'Personalized Experiences', icon: <Zap size={18} /> },
  { text: 'Cost Effective', icon: <DollarSign size={18} /> },
  { text: 'Real-Time Insights', icon: <BarChart2 size={18} /> },
  { text: 'Automation', icon: <Settings size={18} /> },
];

const Why = () => {
  const clockRef = useRef(null);

  useEffect(() => {
    const svgObject = clockRef.current;
    if (!svgObject) return;

    const loadHandler = () => {
      const svgDoc = svgObject.contentDocument;
      if (!svgDoc) return;

      const clockHand = svgDoc.getElementById('minute-hand');
      if (!clockHand) return;

      let angle = 0;
      let animationFrameId;

      const animateClock = () => {
        angle = (angle + 1) % 360;
        clockHand.style.transform = `rotate(${angle}deg)`;
        animationFrameId = requestAnimationFrame(animateClock);
      };

      animateClock();

      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    };

    svgObject.addEventListener('load', loadHandler);

    return () => {
      svgObject.removeEventListener('load', loadHandler);
    };
  }, []);

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-block bg-gray-100 rounded-full px-4 py-2">
            <Star className="inline-block mr-2" size={16} />
            <span className="text-sm font-lg text-gray-600">BENEFITS</span>
          </div>
          <h2 className="mt-4 text-4xl font-medium text-gray-900 sm:text-5xl">
            Why Choose Us
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Partner with an AI agency delivering smart solutions.
          </p>
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-gray-50 rounded-3xl p-8 shadow-lg">
            <div className="h-48 mb-6 flex items-center justify-center">
              <object
                ref={clockRef}
                data={clock}
                type="image/svg+xml"
                alt="Real-Time Analytics"
                className="h-full w-full object-cover rounded-2xl"
              />
            </div>
            <h3 className="text-2xl font-medium text-gray-900">Real-Time Analytics</h3>
            <p className="mt-4 text-gray-500">
              Stay ahead with accurate, real-time performance tracking.
            </p>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 shadow-lg">
            <div className="h-48 mb-6 flex items-center justify-center">
              <img src={t2} alt="AI-Driven Growth" className="h-full w-full object-cover rounded-2xl" />
            </div>
            <h3 className="text-2xl font-medium text-gray-900">AI-Driven Growth</h3>
            <p className="mt-4 text-gray-500">
              Make smarter moves with accurate, real-time business insights.
            </p>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 shadow-lg">
            <div className="h-48 mb-6 flex items-center justify-center">
              <img src={t3} alt="Sync in real time" className="h-full w-full object-cover rounded-2xl" />
            </div>
            <h3 className="text-2xl font-medium text-gray-900">Sync in real time</h3>
            <p className="mt-4 text-gray-500">
              connect with your team instantly to track progress and updates
            </p>
          </div>
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-100 rounded-full px-6 py-3 flex items-center gap-2">
              {benefit.icon}
              <span className="font-medium">{benefit.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;