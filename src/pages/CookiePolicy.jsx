import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-medium text-stone-900 mb-4">Cookie Policy</h1>
          <p className="text-stone-600">
            Last updated: January 1, 2025
          </p>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-sm border border-stone-200">
          <div className="prose prose-stone max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-normal text-stone-900 mb-4">What Are Cookies?</h2>
              <p className="text-stone-600 leading-relaxed">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and 
                analyzing how you use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-normal text-stone-900 mb-4">Types of Cookies We Use</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-normal text-stone-900 mb-2">Essential Cookies</h3>
                  <p className="text-stone-600 leading-relaxed mb-2">
                    These cookies are necessary for the website to function properly and cannot be disabled.
                  </p>
                  <ul className="list-disc list-inside text-stone-600 space-y-1">
                    <li>Authentication and security cookies</li>
                    <li>Session management cookies</li>
                    <li>Load balancing cookies</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-normal text-stone-900 mb-2">Performance Cookies</h3>
                  <p className="text-stone-600 leading-relaxed mb-2">
                    These cookies help us understand how visitors interact with our website.
                  </p>
                  <ul className="list-disc list-inside text-stone-600 space-y-1">
                    <li>Google Analytics cookies</li>
                    <li>Page load time measurement</li>
                    <li>Error tracking and reporting</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-normal text-stone-900 mb-2">Functional Cookies</h3>
                  <p className="text-stone-600 leading-relaxed mb-2">
                    These cookies enable enhanced functionality and personalization.
                  </p>
                  <ul className="list-disc list-inside text-stone-600 space-y-1">
                    <li>Language and region preferences</li>
                    <li>Theme and display settings</li>
                    <li>Form data retention</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-normal text-stone-900 mb-2">Marketing Cookies</h3>
                  <p className="text-stone-600 leading-relaxed mb-2">
                    These cookies are used to deliver relevant advertisements and track campaign effectiveness.
                  </p>
                  <ul className="list-disc list-inside text-stone-600 space-y-1">
                    <li>Advertising platform cookies</li>
                    <li>Social media integration cookies</li>
                    <li>Conversion tracking cookies</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-normal text-stone-900 mb-4">Third-Party Cookies</h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                We may use third-party services that set their own cookies. These include:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-stone-50 p-4 rounded-lg">
                  <h4 className="font-normal text-stone-900 mb-2">Google Analytics</h4>
                  <p className="text-stone-600 text-sm">Used to analyze website traffic and user behavior</p>
                </div>
                <div className="bg-stone-50 p-4 rounded-lg">
                  <h4 className="font-normal text-stone-900 mb-2">Intercom</h4>
                  <p className="text-stone-600 text-sm">Powers our customer support chat widget</p>
                </div>
                <div className="bg-stone-50 p-4 rounded-lg">
                  <h4 className="font-normal text-stone-900 mb-2">Stripe</h4>
                  <p className="text-stone-600 text-sm">Processes payments and billing information</p>
                </div>
                <div className="bg-stone-50 p-4 rounded-lg">
                  <h4 className="font-normal text-stone-900 mb-2">Hotjar</h4>
                  <p className="text-stone-600 text-sm">Provides user experience analytics and feedback</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-normal text-stone-900 mb-4">Managing Your Cookie Preferences</h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                You have several options for managing cookies:
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-normal text-stone-900 mb-2">Browser Settings</h3>
                  <p className="text-stone-600 leading-relaxed">
                    Most web browsers allow you to control cookies through their settings. You can typically 
                    block all cookies, accept only first-party cookies, or delete existing cookies.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-normal text-stone-900 mb-2">Cookie Consent Manager</h3>
                  <p className="text-stone-600 leading-relaxed">
                    When you first visit our website, you'll see a cookie consent banner that allows you to 
                    choose which types of cookies to accept.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-normal text-stone-900 mb-2">Opt-Out Links</h3>
                  <p className="text-stone-600 leading-relaxed mb-2">
                    You can opt out of specific third-party cookies:
                  </p>
                  <ul className="list-disc list-inside text-stone-600 space-y-1">
                    <li><a href="#" className="text-stone-900 hover:underline">Google Analytics Opt-out</a></li>
                    <li><a href="#" className="text-stone-900 hover:underline">Facebook Pixel Opt-out</a></li>
                    <li><a href="#" className="text-stone-900 hover:underline">LinkedIn Insight Tag Opt-out</a></li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-normal text-stone-900 mb-4">Cookie Retention</h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                Different cookies have different retention periods:
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-stone-200">
                  <span className="text-stone-700 font-medium">Session Cookies</span>
                  <span className="text-stone-600">Until browser is closed</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-stone-200">
                  <span className="text-stone-700 font-medium">Authentication Cookies</span>
                  <span className="text-stone-600">30 days</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-stone-200">
                  <span className="text-stone-700 font-medium">Analytics Cookies</span>
                  <span className="text-stone-600">2 years</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-stone-200">
                  <span className="text-stone-700 font-medium">Marketing Cookies</span>
                  <span className="text-stone-600">1 year</span>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-normal text-stone-900 mb-4">Updates to This Policy</h2>
              <p className="text-stone-600 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices or 
                applicable laws. We will notify you of any material changes by posting the updated policy 
                on our website with a new "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-normal text-stone-900 mb-4">Contact Us</h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                If you have questions about our use of cookies, please contact us:
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

export default CookiePolicy;
