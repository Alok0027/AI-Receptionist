import simple1 from "../assets/simple1.jpeg";
import simpl2 from "../assets/simpl2.jpeg";
import simpel3 from "../assets/simpel3.jpeg";


const Simple = () => {
    return (
        <section className="bg-gray-50 py-20">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto px-4 text-center mb-16">
                <h2 className="text-4xl font-medium mb-4">Simple & Scalable</h2>
                <p className="text-gray-600">A transparent process of collaboration and feedback</p>
            </div>

            {/* Steps Container */}
            <div className="max-w-6xl mx-auto px-4 space-y-20">
                <div className="grid grid-cols-2 gap-6">
                    {/* Left Large Card (Step 01 - Workflow Assessment) */}
                    <div className="bg-white rounded-2xl p-8 shadow-md h-[70rem] flex flex-col">
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M3 3h18v2H3V3zm0 4h18v2H3V7zm0 4h18v2H3v-2zm0 4h18v2H3v-2zm0 4h18v2H3v-2z"/>
                                    </svg>
                                </div>
                                
                            </div>
                            <h3 className="text-xl font-semibold mt-3">Workflow Assessment</h3>
                            <p className="text-gray-600 mb-8 border-b border-gray-200 pb-6">
                                We begin by examining your existing workflows to identify where AI can deliver the greatest impact.
                            </p>
                            <div className="flex items-center gap-4 mt-6">
                                <span className="text-6xl font-light text-gray-400">01</span>
                                <div className="flex space-x-2">
                                    <div className="w-2 h-2 bg-black rounded-full"></div>
                                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                                </div>
                            </div>
                            <div className="bottom-0">
                                <img src={simple1} alt="Workflow Assessment" className="w-full h-[50rem] object-cover rounded-xl" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        {/* Top Right Card (Step 02 - Deploy with Confidence) */}
                        <div className="bg-white rounded-2xl p-8 shadow-md h-[34.5rem] flex flex-col">
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold">Deploy with Confidence</h3>
                                </div>
                                <p className="text-gray-600">
                                    Our team develops custom AI systems built around your goals, ensuring safe and reliable deployment.
                                </p>
                                <div className="flex items-center gap-4 mt-6">
                                    <span className="text-6xl font-light text-gray-400">02</span>
                                    <div className="flex space-x-2">
                                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                                        <div className="w-2 h-2 bg-black rounded-full"></div>
                                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <img src={simpl2} alt="Deploy with Confidence" className="w-full h-64 object-cover rounded-xl" />
                                </div>
                            </div>
                        </div>

                        {/* Bottom Right Card (Step 03 - Ongoing Support) */}
                        <div className="bg-white rounded-2xl p-8 shadow-md h-[34rem] flex flex-col">
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold">Ongoing Support & Optimization</h3>
                                </div>
                                <p className="text-gray-600">
                                    After deployment, we provide support and refine your AI systems to keep them performing at their best.
                                </p>
                                <div className="flex items-center gap-4 mt-6">
                                    <span className="text-6xl font-light text-gray-400">03</span>
                                    <div className="flex space-x-2">
                                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                                        <div className="w-2 h-2 bg-black rounded-full"></div>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <img src={simpel3} alt="Ongoing Support" className="w-full h-64 object-cover rounded-xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Simple;