import { Link } from "react-router-dom";
import applelogo from "../assets/applelogo.svg";
import blackstar from "../assets/blackstar.svg";
import whitestar from "../assets/whitestar.svg";
import googlelogo from "../assets/google.svg";
import team2 from "../assets/team2.jpeg"


const Login = () => {
    return(
        <div className="min-h-screen bg-stone-50">            

            <div className="flex min-h-screen">
                {/* Left Side - Login Form */}
                <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md w-full space-y-8">
                        {/* Welcome Section */}
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-black mb-2">Welcome back</h2>
                            <p className="text-stone-600">Sign in to your account to continue automating your workflows</p>
                        </div>

                        {/* Social Login */}
                        <div className="space-y-3">
                            <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                                <img src={googlelogo} alt="Google Logo" className="w-5 h-5 mr-3" />
                                Continue with Google
                            </button>
                            <button className="w-full flex items-center justify-center px-4 py-3 border border-stone-300 rounded-lg shadow-sm bg-stone-50 text-sm font-medium text-black hover:bg-stone-100 transition-colors">
                                <img src={applelogo} alt="Apple Logo" className="w-5 h-5 mr-3" />
                                Continue with Apple
                            </button>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-stone-300" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-stone-50 text-stone-500">Or continue with email</span>
                            </div>
                        </div>

                        {/* Login Form */}
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-black mb-1">
                                    Email address
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none relative block w-full px-3 py-3 border border-stone-300 placeholder-stone-500 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-black focus:z-10 sm:text-sm"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-black mb-1">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none relative block w-full px-3 py-3 border border-stone-300 placeholder-stone-500 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-black focus:z-10 sm:text-sm"
                                    placeholder="Enter your password"
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-black">
                                        Remember me
                                    </label>
                                </div>
                                <div className="text-sm">
                                    <a href="#" className="font-medium text-black hover:text-stone-600">
                                        Forgot your password?
                                    </a>
                                </div>
                            </div>

                            <div>
                                <Link to="/dashboard" className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-black hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-all duration-200">
                                    Sign in to your account
                                </Link>
                                <div className="text-center mt-3">
                                    <p className="text-sm text-black">
                                        Don’t have an account?{" "}
                                        <Link to="/register" className="font-medium text-black hover:underline">
                                            Sign up here
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </form>

                        {/* Security Badges */}
                        <div className="mt-8">
                            <div className="flex items-center justify-center space-x-6 text-sm text-stone-500">
                                <div className="flex items-center">
                                    <svg className="w-4 h-4 mr-1 text-black" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                    </svg>
                                    SSL Secured
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-4 h-4 mr-1 text-black" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                    </svg>
                                    GDPR Compliant
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-4 h-4 mr-1 text-black" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    SOC 2 Certified
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                {/* Right Side - Content */}
                <div className="hidden lg:flex lg:flex-1 bg-stone-50 relative overflow-hidden">
                    <div className="absolute inset-0"></div>
                    <div className="relative z-10 flex flex-col justify-center px-12 py-12 text-black">
                        {/* Aristotle Model Section */}
                        <div className="mb-12 text-center">
                            <div className="mb-8 flex justify-center">
                                <div className="w-64 h-64 bg-opacity-10 rounded-full flex items-center justify-center backdrop-blur-sm">
                                    <model-viewer
                                        src="/models/modelkom.glb"
                                        alt="Aristotle 3D Model"
                                        auto-rotate
                                        style={{width: '200px', height: '200px'}}
                                        class="rounded-full"
                                    ></model-viewer>
                                </div>
                            </div>
                            <h3 className="text-3xl font-medium mb-6 text-black">Ancient Wisdom Meets Modern AI</h3>
                            <p className="text-base text-stone-600 leading-relaxed max-w-md mx-auto">
                                You can't get Aristotle's brilliant mind to guide your business in the 21st century...
                                <br /><br />
                                <span className="font-normal text-black">But you can get yourself an Agentic AI.</span>
                            </p>
                        </div>

                        {/* Testimonial */}
                        <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm text-white">
                            <div className="flex items-center mb-4">
                                <div className="flex text-yellow-300">
                                    {[...Array(5)].map((_, i) => (
                                        <img key={i} src={blackstar} alt="Star" className="w-4 h-4" />
                                    ))}
                                </div>
                            </div>
                            <p className="text-sm mb-4 italic text-black">
                                "Agentic AI is a game-changer! We integrated it into our operations and immediately noticed better customer engagement and team productivity. Highly recommend!"
                            </p>
                            
                               
                                <div className="flex flex-row gap-4 left-2">
                                    <div><img src={team2} alt="img" className="w-10 h-10 rounded-full" /></div>
                                    <div>
                                    <div className="text-sm font-medium text-black">Sarah Johnson</div>
                                    <div className="text-xs text-black">Marketing Director, TechCorp</div></div>
                                </div>
                            
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white bg-opacity-5 rounded-full -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white bg-opacity-5 rounded-full -ml-24 -mb-24"></div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-black border-t border-stone-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col sm:flex-row justify-between items-center">
                        <div className="flex items-center space-x-6 text-sm text-stone-400 mb-4 sm:mb-0">
                            <a href="#" className="hover:text-white text-stone-400">Privacy Policy</a>
                            <a href="#" className="hover:text-white text-stone-400">Terms of Service</a>
                            <a href="#" className="hover:text-white text-stone-400">Help Center</a>
                        </div>
                        <div className="text-sm text-stone-400">
                            © 2024 AutomateAI. All rights reserved.
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
export default Login;