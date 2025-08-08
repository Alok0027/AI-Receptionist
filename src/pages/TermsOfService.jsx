import React from 'react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-stone-50 mt-10">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-medium text-stone-900 mb-4">Terms of Service</h1>
          <p className="text-stone-600">
            Last updated: January 1, 2025
          </p>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-sm border border-stone-200">
          <div className="prose prose-stone max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-normal text-stone-900 mb-4">Agreement to Terms</h2>
              <p className="text-stone-600 leading-relaxed">
                By accessing and using YourReceptionAI services, you agree to be bound by these Terms of Service 
                and all applicable laws and regulations. If you do not agree with any of these terms, you are 
                prohibited from using our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-normal text-stone-900 mb-4">Service Description</h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                YourReceptionAI provides AI-powered receptionist and customer service automation solutions, including:
              </p>
              <ul className="list-disc list-inside text-stone-600 space-y-2">
                <li>Automated call handling and routing</li>
                <li>AI-generated call transcripts and summaries</li>
                <li>Customer interaction management tools</li>
                <li>Integration with business systems and workflows</li>
                <li>Analytics and reporting features</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-normal text-stone-900 mb-4">User Responsibilities</h2>
              <p className="text-stone-600 leading-relaxed mb-4">As a user of our services, you agree to:</p>
              <ul className="list-disc list-inside text-stone-600 space-y-2">
                <li>Provide accurate and complete account information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Use the service in compliance with applicable laws</li>
                <li>Not use the service for illegal or unauthorized purposes</li>
                <li>Respect intellectual property rights</li>
                <li>Not attempt to reverse engineer or hack our systems</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-normal text-stone-900 mb-4">Payment Terms</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-normal text-stone-900 mb-2">Billing</h3>
                  <p className="text-stone-600 leading-relaxed">
                    Subscription fees are billed in advance on a monthly or annual basis. All fees are non-refundable 
                    except as required by law or as specifically stated in our refund policy.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-normal text-stone-900 mb-2">Price Changes</h3>
                  <p className="text-stone-600 leading-relaxed">
                    We reserve the right to modify pricing with 30 days' notice. Continued use of the service 
                    after price changes constitutes acceptance of the new pricing.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-normal text-stone-900 mb-4">Service Availability</h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                While we strive to maintain 99.9% uptime, we do not guarantee uninterrupted service availability. 
                We may temporarily suspend service for:
              </p>
              <ul className="list-disc list-inside text-stone-600 space-y-2">
                <li>Scheduled maintenance and updates</li>
                <li>Emergency repairs or security issues</li>
                <li>Compliance with legal requirements</li>
                <li>Prevention of abuse or unauthorized access</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-normal text-stone-900 mb-4">Intellectual Property</h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                All content, features, and functionality of YourReceptionAI are owned by us and protected by 
                copyright, trademark, and other intellectual property laws. You may not:
              </p>
              <ul className="list-disc list-inside text-stone-600 space-y-2">
                <li>Copy, modify, or distribute our software or content</li>
                <li>Use our trademarks without written permission</li>
                <li>Create derivative works based on our services</li>
                <li>Attempt to extract or reverse engineer our algorithms</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-normal text-stone-900 mb-4">Limitation of Liability</h2>
              <p className="text-stone-600 leading-relaxed">
                To the maximum extent permitted by law, YourReceptionAI shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages, including but not limited to loss of 
                profits, data, or business opportunities, arising from your use of our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-normal text-stone-900 mb-4">Termination</h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                Either party may terminate this agreement at any time:
              </p>
              <ul className="list-disc list-inside text-stone-600 space-y-2">
                <li>You may cancel your subscription through your account settings</li>
                <li>We may terminate accounts for violation of these terms</li>
                <li>We may discontinue the service with 30 days' notice</li>
                <li>Upon termination, your access to the service will cease immediately</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-normal text-stone-900 mb-4">Changes to Terms</h2>
              <p className="text-stone-600 leading-relaxed">
                We reserve the right to modify these terms at any time. We will notify users of significant 
                changes via email or through our platform. Continued use of the service after changes 
                constitutes acceptance of the modified terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-normal text-stone-900 mb-4">Contact Information</h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-stone-50 p-4 rounded-lg">
                <p className="text-stone-700 mb-2"><strong>Email:</strong> legal@yourreceptionai.com</p>
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

export default TermsOfService;
