import React, { useState } from 'react';

const ApiDocs = () => {
  const [activeSection, setActiveSection] = useState('getting-started');

  const sections = [
    { id: 'getting-started', title: 'Getting Started' },
    { id: 'authentication', title: 'Authentication' },
    { id: 'endpoints', title: 'API Endpoints' },
    { id: 'webhooks', title: 'Webhooks' },
    { id: 'examples', title: 'Code Examples' },
    { id: 'errors', title: 'Error Handling' }
  ];

  const endpoints = [
    {
      method: 'POST',
      path: '/api/v1/calls',
      description: 'Initiate a new call',
      params: ['phone_number', 'message', 'voice_id']
    },
    {
      method: 'GET',
      path: '/api/v1/calls/{id}',
      description: 'Get call details',
      params: ['id']
    },
    {
      method: 'GET',
      path: '/api/v1/calls',
      description: 'List all calls',
      params: ['limit', 'offset', 'status']
    },
    {
      method: 'POST',
      path: '/api/v1/knowledge',
      description: 'Update knowledge base',
      params: ['content', 'category', 'tags']
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-medium text-stone-900 mb-4">API Documentation</h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Integrate YourReceptionAI into your applications with our comprehensive REST API
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-stone-200 sticky top-6">
              <h3 className="font-normal text-stone-900 mb-4">Documentation</h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      activeSection === section.id
                        ? 'bg-stone-900 text-white'
                        : 'text-stone-600 hover:bg-stone-100'
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-stone-200">
              {activeSection === 'getting-started' && (
                <div>
                  <h2 className="text-2xl font-normal text-stone-900 mb-6">Getting Started</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-normal text-stone-900 mb-3">Base URL</h3>
                      <div className="bg-stone-100 p-4 rounded-lg">
                        <code className="text-stone-800">https://api.yourreceptionai.com/v1</code>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-normal text-stone-900 mb-3">Quick Start</h3>
                      <p className="text-stone-600 mb-4">
                        Get started with our API in just a few steps:
                      </p>
                      <ol className="list-decimal list-inside space-y-2 text-stone-600">
                        <li>Sign up for an API key in your dashboard</li>
                        <li>Make your first API call using the authentication header</li>
                        <li>Explore our endpoints and start building</li>
                      </ol>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'authentication' && (
                <div>
                  <h2 className="text-2xl font-normal text-stone-900 mb-6">Authentication</h2>
                  <div className="space-y-6">
                    <div>
                      <p className="text-stone-600 mb-4">
                        All API requests require authentication using an API key. Include your API key in the Authorization header:
                      </p>
                      <div className="bg-stone-100 p-4 rounded-lg">
                        <code className="text-stone-800">Authorization: Bearer YOUR_API_KEY</code>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-normal text-stone-900 mb-3">Getting Your API Key</h3>
                      <p className="text-stone-600">
                        You can find your API key in your dashboard under Settings → API Keys. 
                        Keep your API key secure and never expose it in client-side code.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'endpoints' && (
                <div>
                  <h2 className="text-2xl font-normal text-stone-900 mb-6">API Endpoints</h2>
                  <div className="space-y-6">
                    {endpoints.map((endpoint, index) => (
                      <div key={index} className="border border-stone-200 rounded-lg p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            endpoint.method === 'GET' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                          }`}>
                            {endpoint.method}
                          </span>
                          <code className="text-stone-800 font-mono">{endpoint.path}</code>
                        </div>
                        <p className="text-stone-600 mb-3">{endpoint.description}</p>
                        <div>
                          <h4 className="font-medium text-stone-900 mb-2">Parameters:</h4>
                          <div className="flex flex-wrap gap-2">
                            {endpoint.params.map((param, paramIndex) => (
                              <span key={paramIndex} className="bg-stone-100 px-2 py-1 rounded text-xs text-stone-700">
                                {param}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeSection === 'webhooks' && (
                <div>
                  <h2 className="text-2xl font-normal text-stone-900 mb-6">Webhooks</h2>
                  <div className="space-y-6">
                    <p className="text-stone-600">
                      Webhooks allow you to receive real-time notifications when events occur in your YourReceptionAI account.
                    </p>
                    <div>
                      <h3 className="text-lg font-normal text-stone-900 mb-3">Available Events</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-stone-400 rounded-full"></span>
                          <code className="text-stone-800">call.started</code> - When a call begins
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-stone-400 rounded-full"></span>
                          <code className="text-stone-800">call.ended</code> - When a call ends
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-stone-400 rounded-full"></span>
                          <code className="text-stone-800">transcript.ready</code> - When transcript is available
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'examples' && (
                <div>
                  <h2 className="text-2xl font-normal text-stone-900 mb-6">Code Examples</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-normal text-stone-900 mb-3">JavaScript (Node.js)</h3>
                      <div className="bg-stone-100 p-4 rounded-lg overflow-x-auto">
                        <pre className="text-sm text-stone-800">
{`const response = await fetch('https://api.yourreceptionai.com/v1/calls', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    phone_number: '+1234567890',
    message: 'Hello, this is a test call',
    voice_id: 'default'
  })
});

const data = await response.json();
console.log(data);`}
                        </pre>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-normal text-stone-900 mb-3">Python</h3>
                      <div className="bg-stone-100 p-4 rounded-lg overflow-x-auto">
                        <pre className="text-sm text-stone-800">
{`import requests

url = "https://api.yourreceptionai.com/v1/calls"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
data = {
    "phone_number": "+1234567890",
    "message": "Hello, this is a test call",
    "voice_id": "default"
}

response = requests.post(url, headers=headers, json=data)
print(response.json())`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'errors' && (
                <div>
                  <h2 className="text-2xl font-normal text-stone-900 mb-6">Error Handling</h2>
                  <div className="space-y-6">
                    <p className="text-stone-600">
                      Our API uses conventional HTTP response codes to indicate success or failure of requests.
                    </p>
                    <div>
                      <h3 className="text-lg font-normal text-stone-900 mb-3">HTTP Status Codes</h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">200</span>
                          <span className="text-stone-600">Success</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-medium">400</span>
                          <span className="text-stone-600">Bad Request - Invalid parameters</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">401</span>
                          <span className="text-stone-600">Unauthorized - Invalid API key</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">429</span>
                          <span className="text-stone-600">Rate Limited - Too many requests</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">500</span>
                          <span className="text-stone-600">Server Error - Something went wrong</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiDocs;
