import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        // Step 1: Basic Information
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        location: '',
        jobTitle: '',
        company: '',
        industry: '',
        experience: '',
        
        // Step 2: KYC & Professional Details
        profession: '',
        licenseNumber: '',
        businessRegistration: '',
        taxId: '',
        expectedCalls: '',
        clientComplexity: '',
        salesCycle: '',
        conversionRate: '',
        averageTicketSize: '',
        
        // Step 3: Service Requirements & Pricing
        selectedServices: [],
        aiComplexity: 'basic',
        supportLevel: 'standard'
    });
    
    const [emailVerified, setEmailVerified] = useState(false);
    const [errors, setErrors] = useState({});
    
    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: '' }));
        }
    };
    
    const validateStep = (step) => {
        const newErrors = {};
        
        if (step === 1) {
            if (!formData.firstName) newErrors.firstName = 'First name is required';
            if (!formData.lastName) newErrors.lastName = 'Last name is required';
            if (!formData.email) newErrors.email = 'Email is required';
            if (!formData.phone) newErrors.phone = 'Phone number is required';
            if (!formData.location) newErrors.location = 'Location is required';
            if (!formData.jobTitle) newErrors.jobTitle = 'Job title is required';
            if (!emailVerified) newErrors.email = 'Please verify your email address';
        }
        
        if (step === 2) {
            if (!formData.profession) newErrors.profession = 'Profession is required';
            if (!formData.licenseNumber) newErrors.licenseNumber = 'License number is required';
            if (!formData.expectedCalls) newErrors.expectedCalls = 'Expected calls is required';
            if (!formData.clientComplexity) newErrors.clientComplexity = 'Client complexity is required';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    
    const nextStep = () => {
        if (validateStep(currentStep)) {
            setCurrentStep(prev => Math.min(prev + 1, 3));
        }
    };
    
    const prevStep = () => {
        setCurrentStep(prev => Math.max(prev - 1, 1));
    };
    
    const calculatePricing = () => {
        let basePrice = 29; // Starter pack
        let additionalCosts = 0;
        
        // High complexity professions require Pro
        const highComplexityProfessions = ['broker', 'insurance', 'real-estate', 'financial-advisor', 'sales-consultant'];
        if (highComplexityProfessions.includes(formData.profession)) {
            basePrice = 99; // Pro pack
            additionalCosts += 70;
        }
        
        // High call volume
        if (parseInt(formData.expectedCalls) > 100) {
            additionalCosts += 30;
        }
        
        // Complex client interactions
        if (formData.clientComplexity === 'high' || formData.clientComplexity === 'very-high') {
            additionalCosts += 40;
        }
        
        // Long sales cycles
        if (formData.salesCycle === 'long' || formData.salesCycle === 'very-long') {
            additionalCosts += 25;
        }
        
        return { basePrice, additionalCosts, total: basePrice + additionalCosts };
    };
    
    const pricing = calculatePricing();
    
    return(
        <div className="min-h-screen bg-stone-50 mt-20">
            <div className="max-w-4xl mx-auto p-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-medium text-black mb-4">Join Kairo</h1>
                    <p className="text-lg text-stone-600">Set up your intelligent automation assistant in 3 simple steps</p>
                </div>
                
                {/* Progress Indicators */}
                <div className="flex justify-between items-center mb-12">
                    <div className="flex items-center flex-1">
                        <div className={`flex-1 h-2 rounded-l-full ${
                            currentStep >= 1 ? 'bg-black' : 'bg-stone-300'
                        }`} />
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-normal ${
                            currentStep >= 1 ? 'bg-black text-white' : 'bg-stone-300 text-stone-600'
                        }`}>1</div>
                    </div>
                    <div className="flex items-center flex-1">
                        <div className={`flex-1 h-2 ${
                            currentStep >= 2 ? 'bg-black' : 'bg-stone-300'
                        }`} />
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-normal ${
                            currentStep >= 2 ? 'bg-black text-white' : 'bg-stone-300 text-stone-600'
                        }`}>2</div>
                    </div>
                    <div className="flex items-center flex-1">
                        <div className={`flex-1 h-2 rounded-r-full ${
                            currentStep >= 3 ? 'bg-black' : 'bg-stone-300'
                        }`} />
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-normal ${
                            currentStep >= 3 ? 'bg-black text-white' : 'bg-stone-300 text-stone-600'
                        }`}>3</div>
                    </div>
                </div>
                
                {/* Step Labels */}
                <div className="flex justify-between mb-8 text-sm text-stone-600">
                    <span className={currentStep === 1 ? 'text-black font-normal' : ''}>Basic Information</span>
                    <span className={currentStep === 2 ? 'text-black font-normal' : ''}>Professional Verification</span>
                    <span className={currentStep === 3 ? 'text-black font-normal' : ''}>Service & Pricing</span>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-8">
                    {/* Step 1: Basic Information */}
                    {currentStep === 1 && (
                        <div className="space-y-6">
                            <div className="text-center mb-8">
                                <h2 className="text-2xl font-medium text-black mb-2">Tell us about yourself</h2>
                                <p className="text-stone-600">We need some basic information to get started</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-black mb-2">First Name *</label>
                                    <input 
                                        type="text" 
                                        value={formData.firstName}
                                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                                        className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black ${
                                            errors.firstName ? 'border-red-500' : 'border-stone-300'
                                        }`}
                                        placeholder="Enter your first name"
                                    />
                                    {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-black mb-2">Last Name *</label>
                                    <input 
                                        type="text" 
                                        value={formData.lastName}
                                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                                        className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black ${
                                            errors.lastName ? 'border-red-500' : 'border-stone-300'
                                        }`}
                                        placeholder="Enter your last name"
                                    />
                                    {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-black mb-2">Email Address *</label>
                                    <div className="flex gap-2">
                                        <input 
                                            type="email" 
                                            value={formData.email}
                                            onChange={(e) => handleInputChange('email', e.target.value)}
                                            className={`flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black ${
                                                errors.email ? 'border-red-500' : 'border-stone-300'
                                            }`}
                                            placeholder="your@email.com"
                                        />
                                        <button 
                                            type="button"
                                            onClick={() => setEmailVerified(true)}
                                            className={`px-4 py-2 rounded-lg text-sm font-medium ${
                                                emailVerified 
                                                    ? 'bg-stone-100 text-stone-700 cursor-not-allowed'
                                                    : 'bg-black text-white hover:bg-stone-800'
                                            }`}
                                            disabled={emailVerified}
                                        >
                                            {emailVerified ? 'Verified ✓' : 'Verify'}
                                        </button>
                                    </div>
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-black mb-2">Phone Number *</label>
                                    <input 
                                        type="tel" 
                                        value={formData.phone}
                                        onChange={(e) => handleInputChange('phone', e.target.value)}
                                        className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black ${
                                            errors.phone ? 'border-red-500' : 'border-stone-300'
                                        }`}
                                        placeholder="+91 9876543210"
                                    />
                                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-black mb-2">Location *</label>
                                    <input 
                                        type="text" 
                                        value={formData.location}
                                        onChange={(e) => handleInputChange('location', e.target.value)}
                                        className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black ${
                                            errors.location ? 'border-red-500' : 'border-stone-300'
                                        }`}
                                        placeholder="City, Country"
                                    />
                                    {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-black mb-2">Job Title / Role *</label>
                                    <input 
                                        type="text" 
                                        value={formData.jobTitle}
                                        onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                                        className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black ${
                                            errors.jobTitle ? 'border-red-500' : 'border-stone-300'
                                        }`}
                                        placeholder="e.g., Sales Manager, Doctor, Broker"
                                    />
                                    {errors.jobTitle && <p className="text-red-500 text-sm mt-1">{errors.jobTitle}</p>}
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-black mb-2">Company/Organization</label>
                                    <input 
                                        type="text" 
                                        value={formData.company}
                                        onChange={(e) => handleInputChange('company', e.target.value)}
                                        className="w-full p-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                        placeholder="Your company name"
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-black mb-2">Industry</label>
                                    <select 
                                        value={formData.industry}
                                        onChange={(e) => handleInputChange('industry', e.target.value)}
                                        className="w-full p-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                    >
                                        <option value="">Select your industry</option>
                                        <option value="healthcare">Healthcare</option>
                                        <option value="finance">Finance & Banking</option>
                                        <option value="real-estate">Real Estate</option>
                                        <option value="insurance">Insurance</option>
                                        <option value="technology">Technology</option>
                                        <option value="retail">Retail</option>
                                        <option value="education">Education</option>
                                        <option value="consulting">Consulting</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-black mb-2">Years of Experience</label>
                                <select 
                                    value={formData.experience}
                                    onChange={(e) => handleInputChange('experience', e.target.value)}
                                    className="w-full p-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                >
                                    <option value="">Select experience level</option>
                                    <option value="0-1">0-1 years</option>
                                    <option value="2-5">2-5 years</option>
                                    <option value="6-10">6-10 years</option>
                                    <option value="11-15">11-15 years</option>
                                    <option value="15+">15+ years</option>
                                </select>
                            </div>
                        </div>
                    )}
                    
                    {/* Step 2: KYC & Professional Details */}
                    {currentStep === 2 && (
                        <div className="space-y-6">
                            <div className="text-center mb-8">
                                <h2 className="text-2xl font-medium text-black mb-2">Professional Verification</h2>
                                <p className="text-stone-600">Help us understand your business requirements</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-black mb-2">Profession Type *</label>
                                    <select 
                                        value={formData.profession}
                                        onChange={(e) => handleInputChange('profession', e.target.value)}
                                        className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black ${
                                            errors.profession ? 'border-red-500' : 'border-stone-300'
                                        }`}
                                    >
                                        <option value="">Select your profession</option>
                                        <option value="doctor">Doctor/Physician</option>
                                        <option value="broker">Broker</option>
                                        <option value="insurance">Insurance Agent</option>
                                        <option value="real-estate">Real Estate Agent</option>
                                        <option value="financial-advisor">Financial Advisor</option>
                                        <option value="sales-consultant">Sales Consultant</option>
                                        <option value="lawyer">Lawyer</option>
                                        <option value="consultant">Business Consultant</option>
                                        <option value="other">Other</option>
                                    </select>
                                    {errors.profession && <p className="text-red-500 text-sm mt-1">{errors.profession}</p>}
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-black mb-2">Professional License Number *</label>
                                    <input 
                                        type="text" 
                                        value={formData.licenseNumber}
                                        onChange={(e) => handleInputChange('licenseNumber', e.target.value)}
                                        className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black ${
                                            errors.licenseNumber ? 'border-red-500' : 'border-stone-300'
                                        }`}
                                        placeholder="Enter your license number"
                                    />
                                    {errors.licenseNumber && <p className="text-red-500 text-sm mt-1">{errors.licenseNumber}</p>}
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-black mb-2">Business Registration Number</label>
                                    <input 
                                        type="text" 
                                        value={formData.businessRegistration}
                                        onChange={(e) => handleInputChange('businessRegistration', e.target.value)}
                                        className="w-full p-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                        placeholder="Business registration/incorporation number"
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-black mb-2">Tax ID/EIN</label>
                                    <input 
                                        type="text" 
                                        value={formData.taxId}
                                        onChange={(e) => handleInputChange('taxId', e.target.value)}
                                        className="w-full p-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                        placeholder="Tax identification number"
                                    />
                                </div>
                            </div>
                            
                            <div className="bg-stone-50 p-6 rounded-lg">
                                <h3 className="text-lg font-normal text-black mb-4">Business Requirements Assessment</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-black mb-2">Expected Monthly Calls *</label>
                                        <select 
                                            value={formData.expectedCalls}
                                            onChange={(e) => handleInputChange('expectedCalls', e.target.value)}
                                            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black ${
                                                errors.expectedCalls ? 'border-red-500' : 'border-stone-300'
                                            }`}
                                        >
                                            <option value="">Select call volume</option>
                                            <option value="0-25">0-25 calls</option>
                                            <option value="26-50">26-50 calls</option>
                                            <option value="51-100">51-100 calls</option>
                                            <option value="101-250">101-250 calls</option>
                                            <option value="251-500">251-500 calls</option>
                                            <option value="500+">500+ calls</option>
                                        </select>
                                        {errors.expectedCalls && <p className="text-red-500 text-sm mt-1">{errors.expectedCalls}</p>}
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-medium text-black mb-2">Client Interaction Complexity *</label>
                                        <select 
                                            value={formData.clientComplexity}
                                            onChange={(e) => handleInputChange('clientComplexity', e.target.value)}
                                            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black ${
                                                errors.clientComplexity ? 'border-red-500' : 'border-stone-300'
                                            }`}
                                        >
                                            <option value="">Select complexity level</option>
                                            <option value="low">Low - Simple appointments/bookings</option>
                                            <option value="medium">Medium - Basic consultation/advice</option>
                                            <option value="high">High - Sales persuasion required</option>
                                            <option value="very-high">Very High - Complex negotiations</option>
                                        </select>
                                        {errors.clientComplexity && <p className="text-red-500 text-sm mt-1">{errors.clientComplexity}</p>}
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-medium text-black mb-2">Typical Sales Cycle Length</label>
                                        <select 
                                            value={formData.salesCycle}
                                            onChange={(e) => handleInputChange('salesCycle', e.target.value)}
                                            className="w-full p-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                        >
                                            <option value="">Select sales cycle</option>
                                            <option value="immediate">Immediate (same call)</option>
                                            <option value="short">Short (1-7 days)</option>
                                            <option value="medium">Medium (1-4 weeks)</option>
                                            <option value="long">Long (1-3 months)</option>
                                            <option value="very-long">Very Long (3+ months)</option>
                                        </select>
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-medium text-black mb-2">Average Deal/Ticket Size</label>
                                        <select 
                                            value={formData.averageTicketSize}
                                            onChange={(e) => handleInputChange('averageTicketSize', e.target.value)}
                                            className="w-full p-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                        >
                                            <option value="">Select ticket size</option>
                                            <option value="under-100">Under $100</option>
                                            <option value="100-500">$100 - $500</option>
                                            <option value="500-2000">$500 - $2,000</option>
                                            <option value="2000-10000">$2,000 - $10,000</option>
                                            <option value="10000+">$10,000+</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                                <div className="flex items-start">
                                    <svg className="w-5 h-5 text-yellow-600 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                    <div>
                                        <h4 className="text-sm font-medium text-yellow-800">Pricing Notice</h4>
                                        <p className="text-sm text-yellow-700 mt-1">
                                            Based on your profession and requirements, additional AI complexity may be required beyond our starter package. Final pricing will be shown in the next step.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    
                    {/* Step 3: Service Requirements & Pricing */}
                    {currentStep === 3 && (
                        <div className="space-y-6">
                            <div className="text-center mb-8">
                                <h2 className="text-2xl font-medium text-black mb-2">Service Configuration & Pricing</h2>
                                <p className="text-stone-600">Review your customized plan based on your requirements</p>
                            </div>
                            
                            {/* Pricing Breakdown */}
                            <div className="bg-stone-50 p-6 rounded-lg">
                                <h3 className="text-lg font-normal text-black mb-4">Your Customized Plan</h3>
                                
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center py-2 border-b border-stone-200">
                                        <span className="text-stone-700">Base Package</span>
                                        <span className="font-normal">${pricing.basePrice}/month</span>
                                    </div>
                                    
                                    {pricing.additionalCosts > 0 && (
                                        <div className="space-y-2">
                                            <div className="text-sm text-stone-600 font-medium">Additional Requirements:</div>
                                            {(['broker', 'insurance', 'real-estate', 'financial-advisor', 'sales-consultant'].includes(formData.profession)) && (
                                                <div className="flex justify-between items-center py-1 text-sm">
                                                    <span className="text-stone-600">• High-complexity profession (Pro AI required)</span>
                                                    <span className="text-stone-700">+$70</span>
                                                </div>
                                            )}
                                            {parseInt(formData.expectedCalls) > 100 && (
                                                <div className="flex justify-between items-center py-1 text-sm">
                                                    <span className="text-stone-600">• High call volume (100+ calls/month)</span>
                                                    <span className="text-stone-700">+$30</span>
                                                </div>
                                            )}
                                            {(formData.clientComplexity === 'high' || formData.clientComplexity === 'very-high') && (
                                                <div className="flex justify-between items-center py-1 text-sm">
                                                    <span className="text-stone-600">• Complex client interactions</span>
                                                    <span className="text-stone-700">+$40</span>
                                                </div>
                                            )}
                                            {(formData.salesCycle === 'long' || formData.salesCycle === 'very-long') && (
                                                <div className="flex justify-between items-center py-1 text-sm">
                                                    <span className="text-stone-600">• Extended sales cycle management</span>
                                                    <span className="text-stone-700">+$25</span>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                    
                                    <div className="flex justify-between items-center py-3 border-t-2 border-black font-medium text-lg">
                                        <span>Total Monthly Cost</span>
                                        <span>${pricing.total}/month</span>
                                    </div>
                                </div>
                                
                                <div className="mt-6 p-4 bg-white rounded border">
                                    <h4 className="font-normal text-black mb-2">What's Included:</h4>
                                    <ul className="text-sm text-stone-700 space-y-1">
                                        <li>• 24/7 AI-powered call handling</li>
                                        <li>• Advanced conversation intelligence</li>
                                        <li>• CRM integration & lead management</li>
                                        <li>• Real-time analytics & reporting</li>
                                        <li>• Custom script training for your business</li>
                                        {pricing.basePrice >= 99 && <li>• Advanced persuasion & negotiation capabilities</li>}
                                        {pricing.basePrice >= 99 && <li>• Priority support & dedicated account manager</li>}
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="bg-stone-50 border border-stone-200 p-4 rounded-lg">
                                <div className="flex items-start">
                                    <svg className="w-5 h-5 text-stone-600 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <div>
                                        <h4 className="text-sm font-medium text-stone-800">Transparent Pricing</h4>
                                        <p className="text-sm text-stone-700 mt-1">
                                            No hidden fees. Cancel anytime. 14-day free trial included. Your pricing is calculated based on your specific business needs and complexity requirements.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    
                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-8 pt-6 border-t border-stone-200">
                        <div>
                            {currentStep > 1 && (
                                <button 
                                    onClick={prevStep}
                                    className="px-6 py-2 border border-stone-300 text-stone-700 rounded-lg hover:bg-stone-50 transition-colors"
                                >
                                    Previous
                                </button>
                            )}
                            {currentStep === 1 && (
                                <Link 
                                    to="/login"
                                    className="px-6 py-2 border border-stone-300 text-stone-700 rounded-lg hover:bg-stone-50 transition-colors inline-block"
                                >
                                    Back to Login
                                </Link>
                            )}
                        </div>
                        
                        <div>
                            {currentStep < 3 ? (
                                <button 
                                    onClick={nextStep}
                                    className="px-6 py-2 bg-black text-white rounded-lg hover:bg-stone-800 transition-colors"
                                >
                                    Continue
                                </button>
                            ) : (
                                <button 
                                    className="px-8 py-3 bg-black text-white rounded-lg hover:bg-stone-800 transition-colors font-normal"
                                >
                                    Start Free Trial - ${pricing.total}/month
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Register;