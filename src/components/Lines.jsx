import { motion } from 'framer-motion';
import AlokK from "../assets/AlokK.jpeg";

const Lines = () => {
  return (
    <section className="bg-stone-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Elegant header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-stone-900 mb-6">
              Crafted with Purpose
            </h2>
            <div className="w-24 h-px bg-stone-300 mx-auto"></div>
          </motion.div>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left side - Quote */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <blockquote className="text-2xl md:text-3xl font-light text-stone-700 leading-relaxed">
              "We believe in the power of thoughtful design and intelligent solutions that genuinely serve people."
            </blockquote>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img
                  className="h-14 w-14 rounded-full object-cover ring-2 ring-stone-200"
                  src={AlokK}
                  alt="Alok, Founder"
                />
              </div>
              <div>
                <p className="font-medium text-stone-900">Alok</p>
                <p className="text-stone-600 text-sm">Founder & Designer</p>
              </div>
            </div>
          </motion.div>

          {/* Right side - Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <div className="border-l-2 border-stone-200 pl-6">
                <h3 className="text-lg font-medium text-stone-900 mb-2">Precision</h3>
                <p className="text-stone-600 leading-relaxed">
                  Every detail matters. We craft experiences that feel natural and effortless.
                </p>
              </div>
              
              <div className="border-l-2 border-stone-200 pl-6">
                <h3 className="text-lg font-medium text-stone-900 mb-2">Intelligence</h3>
                <p className="text-stone-600 leading-relaxed">
                  Technology should adapt to you, not the other way around.
                </p>
              </div>
              
              <div className="border-l-2 border-stone-200 pl-6">
                <h3 className="text-lg font-medium text-stone-900 mb-2">Trust</h3>
                <p className="text-stone-600 leading-relaxed">
                  Building lasting relationships through reliable, secure solutions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom section - Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-32 pt-16 border-t border-stone-200"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-3xl font-light text-stone-900 mb-2">10,000+</div>
              <div className="text-stone-600">Conversations handled</div>
            </div>
            <div>
              <div className="text-3xl font-light text-stone-900 mb-2">99.9%</div>
              <div className="text-stone-600">Uptime reliability</div>
            </div>
            <div>
              <div className="text-3xl font-light text-stone-900 mb-2">24/7</div>
              <div className="text-stone-600">Always available</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Lines;