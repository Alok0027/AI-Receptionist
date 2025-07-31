import sittingrobo from "../assets/sittingrobo.jpeg";
import cuterobo from "../assets/cuterobo.jpeg"
import newatom from "../assets/newatom.png";
import mess from "../assets/mess.png";
import setting from "../assets/setting.png";
import graph from "../assets/graph.png";


const Features = () => {
    return ( 
        <div className="max-w-7xl mx-auto py-16 px-4">
            <h2 className="text-4xl font-medium text-center mb-4">All features in 1 tool</h2>
            <p className="text-center text-gray-600 mb-12">Discover features that simplify workflows & grow your business.</p>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {/* Card 1: Cutting-Edge AI */}
                <div className="md:col-span-3 bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-6">
                    <img src={sittingrobo} alt="AI Robot" className="w-full md:w-1/2 h-64 object-cover rounded-2xl" />
                    <div className="flex flex-col md:w-1/2">
                        <img src={newatom} alt="Atom Icon" className="w-12 h-12 object-contain rounded-lg shadow-xl mb-4" />
                        <h3 className="text-2xl font-semibold mb-2">Cutting-Edge AI</h3>
                        <p className="text-gray-600">
                            Deploy AI solutions that adapt quickly, learn fast, and scale with your business needs.
                        </p>
                    </div>
                </div>

                {/* Card 2: Automated Workflows */}
                <div className="md:col-span-2 bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-center">
                    <img src={setting} alt="Setting Icon" className="w-12 h-12 object-contain rounded-lg shadow-xl mb-4" />
                    <h3 className="text-2xl font-semibold mb-2">Automated Workflows</h3>
                    <p className="text-gray-600">
                        Streamline tasks and boost efficiency with powerful, scalable AI-powered automation tools for growing teams and projects.
                    </p>
                </div>

                {/* Card 3: Insightful Analytics */}
                <div className="md:col-span-2 bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-center">
                    <img src={graph} alt="Graph Icon" className="w-12 h-12 object-contain rounded-lg shadow-xl mb-4" />
                    <h3 className="text-2xl font-semibold mb-2">Insightful Analytics</h3>
                    <p className="text-gray-600">
                        Gain deep, real-time data insights with advanced AI analytics to guide smarter strategies, decisions, and scalable business growth.
                    </p>
                </div>

                {/* Card 4: AI-Powered Support */}
                <div className="md:col-span-3 bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-6">
                    <div className="flex flex-col md:w-1/2">
                        <img src={mess} alt="Message Icon" className="w-12 h-12 object-contain rounded-lg shadow-xl mb-4" />
                        <h3 className="text-2xl font-semibold mb-2">AI-Powered Support</h3>
                        <p className="text-gray-600">
                            Enhance customer experience with AI-driven virtual assistants available for support and engagement.
                        </p>
                    </div>
                    <img src={cuterobo} alt="AI Assistant" className="w-full md:w-1/2 h-64 object-cover rounded-2xl" />
                </div>
            </div>
        </div>
     );
}
 
export default Features;