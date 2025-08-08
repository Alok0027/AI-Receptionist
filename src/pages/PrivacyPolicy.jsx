import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-stone-50 mt-10">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-medium text-stone-900 mb-4">Privacy Policy</h1>
          <p className="text-stone-600">
            Last updated: January 1, 2025
          </p>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-sm border border-stone-200">
          <div className="prose prose-stone max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-normal text-stone-900 mb-4">Introduction</h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                YourReceptionAI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
                explains how we collect, use, disclose, and safeguard your information when you use our AI-powered 
                receptionist services and related platforms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-normal text-stone-900 mb-4">Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-normal text-stone-900 mb-2">Personal Information</h3>
                  <ul className="list-disc list-inside text-stone-600 space-y-1">
                    <li>Name, email address, and contact information</li>
                    <li>Company information and business details</li>
                    <li>Account credentials and authentication data</li>
                    <li>Payment and billing information</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-normal text-stone-900 mb-2">Call Data</h3>
                  <ul className="list-disc list-inside text-stone-600 space-y-1">
                    <li>Call recordings and transcripts</li>
                    <li>Phone numbers and caller information</li>
                    <li>Call duration, timing, and metadata</li>
                    <li>AI interaction logs and responses</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-normal text-stone-900 mb-2">Usage Information</h3>
                  <ul className="list-disc list-inside text-stone-600 space-y-1">
                    <li>Platform usage statistics and analytics</li>
                    <li>Feature usage and preferences</li>
                    <li>Device and browser information</li>
                    <li>IP addresses and location data</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-normal text-stone-900 mb-4">How We Use Your Information</h2>
              <ul className="list-disc list-inside text-stone-600 space-y-2">
                <li>Provide and maintain our AI receptionist services</li>
                <li>Process calls and generate transcripts</li>
                <li>Improve our AI models and service quality</li>
                <li>Send service updates and important notifications</li>
                <li>Provide customer support and technical assistance</li>
                <li>Analyze usage patterns to enhance user experience</li>
                <li>Comply with legal obligations and prevent fraud</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-normal text-stone-900 mb-4">Information Sharing</h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your 
                information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-stone-600 space-y-2">
                <li>With your explicit consent</li>
                <li>To comply with legal requirements or court orders</li>
                <li>With trusted service providers who assist in our operations</li>
                <li>In connection with a business transfer or acquisition</li>
                <li>To protect our rights, property, or safety</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-normal text-stone-900 mb-4">Data Security</h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                We implement industry-standard security measures to protect your information:
              </p>
              <ul className="list-disc list-inside text-stone-600 space-y-2">
                <li>End-to-end encryption for all call data</li>
                <li>Secure data storage with regular backups</li>
                <li>Access controls and authentication protocols</li>
                <li>Regular security audits and monitoring</li>
                <li>Compliance with SOC 2 and GDPR standards</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-normal text-stone-900 mb-4">Your Rights</h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-stone-600 space-y-2">
                <li>Access and review your personal data</li>
                <li>Request corrections to inaccurate information</li>
                <li>Delete your account and associated data</li>
                <li>Export your data in a portable format</li>
                <li>Opt-out of marketing communications</li>
                <li>Restrict or object to certain data processing</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-normal text-stone-900 mb-4">Data Retention</h2>
              <p className="text-stone-600 leading-relaxed">
                We retain your information only as long as necessary to provide our services and comply with 
                legal obligations. Call recordings and transcripts are typically retained for 12 months unless 
                you request earlier deletion or extend the retention period.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-normal text-stone-900 mb-4">Contact Us</h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-stone-50 p-4 rounded-lg">
                <p className="text-stone-700 mb-2"><strong>Email:</strong> privacy@yourreceptionai.com</p>
                <p className="text-stone-700 mb-2"><strong>Address:</strong> 123 AI Street, Tech City, TC 12345</p>
                <p className="text-stone-700"><strong>Phone:</strong> 1-800-AI-HELP</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
