import tick from "../assets/tick.svg";

const Pricing = () => {
    return(
        <div className="min-h-screen bg-stone-50">
            <section id="pricing" className="max-w-7xl mx-auto py-16 px-6">
                <div className="text-center text-4xl font-normal text-stone-900 mb-4">
                    Simple Price For All
                </div>
                <div className="text-center text-stone-600 mt-4 mb-8 text-lg">
                    Flexible pricing plans that fit your budget & scale with needs.
                </div>
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="p-6 border border-stone-200 rounded-lg shadow-sm hover:shadow-md transition duration-300 h-[25rem] flex flex-col justify-between bg-white">
                        <div>
                            <h3 className="text-lg font-normal mb-2 text-stone-900">Starter</h3>
                            <p className="text-stone-900 mb-4 text-4xl text-medium">$800<span className="text-base font-light text-stone-600">/month</span></p>
                            <p className="text-base font-light mt-4 text-stone-600">Ideal for businesses ready to explore AI and intelligent automation</p>
                        </div>
                        <button 
        className="
            mt-4
            w-full
            bg-gray-50
            text-black
            text-xl font-normal
            rounded-2xl
            flex items-center justify-center gap-4
            transition-all duration-150
            hover:transform hover:translate-y-[-1px]
            active:transform active:translate-y-[1px]
            border border-gray-200
            py-3
        "
        style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
            boxShadow: `
                0 -40px 0 0 rgba(255, 255, 255, 1) inset,
                0 -80px 120px rgba(255, 255, 255, 1) inset,
                0 -60px 100px rgba(255, 255, 255, 0.8) inset,
                0 4px 8px rgba(0, 0, 0, 0.1),
                0 1px 2px rgba(0, 0, 0, 0.06)
            `
        }}
    >
        <span className="text-base">Get Started</span>
    </button>
                        <div className="flex flex-col justify-between h-[10rem]">
                            <div className="flex items-center gap-2 mt-6">
                                <img src={tick} alt="tickimg" className="w-5 h-5" />
                                <span>Basic AI Tools</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src={tick} alt="tickimg" className="w-5 h-5" />
                                <span>Limited Automation Features</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src={tick} alt="tickimg" className="w-5 h-5" />
                                <span>Real-Time Reporting</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src={tick} alt="tickimg" className="w-5 h-5" />
                                <span>Basic Chatbot Integration</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 border rounded-lg shadow hover:shadow-md transition duration-300 h-[28rem] flex flex-col justify-between">
    <div>
        <h3 className="text-lg font-normal mb-2">Pro</h3>
        <p className="text-black mb-4 text-4xl text-medium">$1700<span className="text-base font-light">/month</span></p>
        <p className="text-base font-light mt-4">Built for companies that want to gain an edge with AI-powered automation</p>
    </div>
    <button 
        className="
            mt-4
            w-full
            bg-gray-50
            text-black
            text-xl font-normal
            rounded-2xl
            flex items-center justify-center gap-4
            transition-all duration-150
            hover:transform hover:translate-y-[-1px]
            active:transform active:translate-y-[1px]
            border border-gray-200
            py-3
        "
        style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
            boxShadow: `
                0 -40px 0 0 rgba(255, 255, 255, 1) inset,
                0 -80px 120px rgba(255, 255, 255, 1) inset,
                0 -60px 100px rgba(255, 255, 255, 0.8) inset,
                0 4px 8px rgba(0, 0, 0, 0.1),
                0 1px 2px rgba(0, 0, 0, 0.06)
            `
        }}
    >
        <span className="text-base">Get Started</span>
    </button>
    <div className="flex flex-col flex-1 justify-between gap-3 mt-6">
        <div className="flex items-center gap-2">
            <img src={tick} alt="tickimg" className="w-5 h-5" />
            <span>Advanced AI Tools</span>
        </div>
        <div className="flex items-center gap-2">
            <img src={tick} alt="tickimg" className="w-5 h-5" />
            <span>Customizable Workflows</span>
        </div>
        <div className="flex items-center gap-2">
            <img src={tick} alt="tickimg" className="w-5 h-5" />
            <span>AI-Powered Analytics</span>
        </div>
        <div className="flex items-center gap-2">
            <img src={tick} alt="tickimg" className="w-5 h-5" />
            <span>Premium Chatbot Features</span>
        </div>
        <div className="flex items-center gap-2">
            <img src={tick} alt="tickimg" className="w-5 h-5" />
            <span>Cross-Platform Integrations</span>
        </div>
    </div>
</div>
                    <div className="p-6 border rounded-lg shadow hover:shadow-md transition duration-300 h-[32rem] flex flex-col justify-between">
                        <div>
                            <h3 className="text-lg font-normal mb-2">Enterprise</h3>
                            <p className="text-black mb-4 text-4xl text-medium">$4700<span className="text-base font-light">/month</span></p>
                            <p className="text-base font-light mt-4">For businesses aiming to harness AI and automation to lead their industry</p>
                        </div>
                        <button 
        className="
            mt-4
            w-full
            bg-gray-50
            text-black
            text-xl font-normal
            rounded-2xl
            flex items-center justify-center gap-4
            transition-all duration-150
            hover:transform hover:translate-y-[-1px]
            active:transform active:translate-y-[1px]
            border border-gray-200
            py-3
        "
        style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
            boxShadow: `
                0 -40px 0 0 rgba(255, 255, 255, 1) inset,
                0 -80px 120px rgba(255, 255, 255, 1) inset,
                0 -60px 100px rgba(255, 255, 255, 0.8) inset,
                0 4px 8px rgba(0, 0, 0, 0.1),
                0 1px 2px rgba(0, 0, 0, 0.06)
            `
        }}
    >
        <span className="text-base">Get Started</span>
    </button>
    <div className="flex flex-col flex-1 justify-between gap-2 mt-6">
        <div className="flex items-center gap-2">
            <img src={tick} alt="tickimg" className="w-5 h-5" />
            <span>Fully Customized AI Solutions</span>
        </div>
        <div className="flex items-center gap-2">
            <img src={tick} alt="tickimg" className="w-5 h-5" />
            <span>Unlimited Integrations</span>
        </div>
        <div className="flex items-center gap-2">
            <img src={tick} alt="tickimg" className="w-5 h-5" />
            <span>Advanced Reporting & Insights</span>
        </div>
        <div className="flex items-center gap-2">
            <img src={tick} alt="tickimg" className="w-5 h-5" />
            <span>Scalable AI Solutions</span>
        </div>
        <div className="flex items-center gap-2">
            <img src={tick} alt="tickimg" className="w-5 h-5" />
            <span>Team Collaboration Features</span>
        </div>
        <div className="flex items-center gap-2">
            <img src={tick} alt="tickimg" className="w-5 h-5" />
            <span>Priority Feature Access</span>
        </div>
    </div>
</div>
                </div>
            </div>
            </section>
        </div>
    );
}
export default Pricing;