import testimonialimg from "../assets/testimonialimg.jpeg";
import comma from "../assets/comma.svg";
import blackstar from "../assets/blackstar.svg";
import whitestar from "../assets/whitestar.svg";
import t1 from "../assets/t1.jpeg";
import t2 from "../assets/t2.jpeg";
import t3 from "../assets/t3.jpeg";

const Testomonial = () => {
    return(
        <section className="bg-stone-50 py-16">
            <div className="max-w-7xl mx-auto px-4">
                {/* Main Testimonial */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-stone-100 h-1/2 flex flex-col justify-center">
                        <p className="text-xl md:text-2xl font-normal text-stone-800 leading-relaxed">
                            Their <span className="text-stone-500">AI-driven</span> approach helped us reach the right audience and <span className="text-stone-500">grow faster</span> with smarter insights—streamlining our strategy, improving engagement, and <span className="text-stone-500">delivering results</span> we couldn’t achieve before.
                        </p>
                        <img src={comma} alt="quote" className="w-12 h-12 mt-6" />
                    </div>
                    <div className="h-1/2">
                        <img src={testimonialimg} alt="Testimonial" className="w-full h-full object-cover rounded-3xl" />
                    </div>
                </div>

                {/* Three Smaller Testimonials */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-[-4rem]">
                    {/* Testimonial 1 */}
                    <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-stone-100 flex flex-col justify-between">
                        <div>
                            <div className="flex mb-4">
                                {[...Array(4)].map((_, i) => <img key={i} src={blackstar} alt="star" className="w-5 h-5" />)}
                                <img src={whitestar} alt="empty star" className="w-5 h-5" />
                            </div>
                            <p className="text-stone-700 mb-6">
                                We needed intelligent automation — and they nailed it. Every step was collaborative, transparent, and focused on delivering the best outcome for us.
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <img src={t2} className="w-12 h-12 rounded-lg object-cover" />
                            <div>
                                <p className="font-normal">Brendan</p>
                                <p className="text-sm text-stone-500">Marketing Director at StratIQ</p>
                            </div>
                        </div>
                    </div>
                    {/* Testimonial 2 */}
                    <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-stone-100 flex flex-col justify-between">
                        <div>
                            <div className="flex mb-4">
                                {[...Array(4)].map((_, i) => <img key={i} src={blackstar} alt="star" className="w-5 h-5" />)}
                                <img src={whitestar} alt="empty star" className="w-5 h-5" />
                            </div>
                            <p className="text-stone-700 mb-6">
                                Their team helped us identify key opportunities for AI, then built tools that boosted both our speed and accuracy. We’re already seeing results.
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <img src={t1} className="w-12 h-12 rounded-lg object-cover" />
                            <div>
                                <p className="font-normal">Lena M</p>
                                <p className="text-sm text-stone-500">Manager at NovaTech</p>
                            </div>
                        </div>
                    </div>
                    {/* Testimonial 3 */}
                    <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-stone-100 flex flex-col justify-between">
                        <div>
                            <div className="flex mb-4">
                                {[...Array(3)].map((_, i) => <img key={i} src={blackstar} alt="star" className="w-5 h-5" />)}
                                {[...Array(2)].map((_, i) => <img key={i} src={whitestar} alt="empty star" className="w-5 h-5" />)}
                            </div>
                            <p className="text-stone-700 mb-6">
                                From ideation to final delivery, they were incredibly proactive and sharp. Our new AI-powered assistant reduced manual work and improved user satisfaction.
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <img src={t3} className="w-12 h-12 rounded-lg object-cover" />
                            <div>
                                <p className="font-normal">Eli R</p>
                                <p className="text-sm text-stone-500">COO at GridFrame</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-20">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-medium text-stone-800">100+</h2>
                        <p className="text-stone-500 mt-2">Projects Completed</p>
                    </div>
                    <div>
                        <h2 className="text-4xl md:text-5xl font-medium text-stone-800">95%</h2>
                        <p className="text-stone-500 mt-2">Client Satisfaction</p>
                    </div>
                    <div>
                        <h2 className="text-4xl md:text-5xl font-medium text-stone-800">10+</h2>
                        <p className="text-stone-500 mt-2">Years of Experience</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Testomonial;