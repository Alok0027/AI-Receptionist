import { useState } from "react";
import result1 from "../assets/result1.jpeg";
import result2 from "../assets/result2.jpeg";
import result3 from "../assets/result3.jpeg";

const Result = () => {
    const [selectedProject, setSelectedProject] = useState("project1");

    return (
        <section className="max-w-7xl mx-auto px-4 py-16">
            <h1 className="font-medium items-center text-center text-3xl">
                Proven Impact & Results
            </h1>
            <p className="text-center text-gray-600 mt-4 mb-8">
                Explore Projects that reflect our AI expertise & real world impact
            </p>

            {/* Project Buttons */}
            

            {/* Project Display */}
            <div className="bg-stone-50 p-6 rounded-xl h-[35rem]">
                <div className="flex justify-around gap-4 mb-6">
                <button onClick={() => setSelectedProject("project1")} className="px-40 py-3 bg-white text-black rounded-lg font-extralight text-sm">
                    Project 1
                </button>
                <button onClick={() => setSelectedProject("project2")} className="px-40 py-3 bg-white text-black rounded-lg font-extralight text-sm">
                    Project 2
                </button>
                <button onClick={() => setSelectedProject("project3")} className="px-40 py-3 bg-white text-black rounded-lg font-extralight text-sm">
                    Project 3
                </button>
            </div>
                {selectedProject === "project1" && (
                    <div className="flex flex-row items-center justify-center gap-4">
                        <div>
                            <img src={result1} alt="r1" className="w-[45rem] h-[28rem] object-cover rounded-xl mb-4" />
                        </div>
                        
                        <div>
                            <h2 className="text-xl font-semibold mb-2">MedixCare — AI Triage Assistant for Healthcare</h2>
                            <p>We built a custom AI triage assistant that evaluates symptoms and routes patients to the appropriate care level.</p>
                        </div>
                    </div>
                    
                )}

                {selectedProject === "project2" && (
                    <div className="flex flex-row items-center gap-4">
                        <div>
                            <img src={result2} alt="r2" className="w-[35rem] h-[28rem] object-cover rounded-xl mb-4" />
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-2">Project 2: Fraud Detection</h2>
                            <p>AI model that detects anomalies in transaction data to reduce fraud.</p>
                        </div>
                    </div>
                )}

                {selectedProject === "project3" && (
                    <div className="flex flex-row items-center gap-4">
                        <div>
                            <img src={result3} alt="r3" className="w-[35rem] h-[28rem] object-cover rounded-xl mb-4 " />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Project 3: Medical Image Analysis</h2>
                            <p>Detects diseases in MRI scans using deep learning (CNNs).</p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
export default Result;