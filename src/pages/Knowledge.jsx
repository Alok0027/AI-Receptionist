import React, { useState } from 'react';
import { FiUpload, FiPlus, FiSend, FiEdit, FiTrash2 } from 'react-icons/fi';

const Knowledge = () => {
  const [faqs, setFaqs] = useState([
    { id: 1, question: 'What are your business hours?', answer: 'We are open from 9 AM to 6 PM, Monday to Friday.' },
    { id: 2, question: 'What services do you offer?', answer: 'We offer a range of services including consultation, installation, and maintenance.' },
    { id: 3, question: 'How can I book an appointment?', answer: 'You can book an appointment through our website or by calling our customer service.' },
  ]);

  const [newFaq, setNewFaq] = useState({ question: '', answer: '' });
  const [editingFaq, setEditingFaq] = useState(null);
  const [testQuery, setTestQuery] = useState('');
  const [testResponse, setTestResponse] = useState('');

  const handleAddFaq = (e) => {
    e.preventDefault();
    if (editingFaq) {
      setFaqs(faqs.map(faq => (faq.id === editingFaq.id ? { ...newFaq, id: faq.id } : faq)));
      setEditingFaq(null);
    } else {
      setFaqs([...faqs, { ...newFaq, id: Date.now() }]);
    }
    setNewFaq({ question: '', answer: '' });
  };

  const handleEditFaq = (faq) => {
    setEditingFaq(faq);
    setNewFaq(faq);
  };

  const handleDeleteFaq = (id) => {
    setFaqs(faqs.filter(faq => faq.id !== id));
  };

  const handleTestQuery = (e) => {
    e.preventDefault();
    // Mock AI response logic
    const query = testQuery.toLowerCase();
    const matchedFaq = faqs.find(faq => faq.question.toLowerCase().includes(query));
    if (matchedFaq) {
      setTestResponse(matchedFaq.answer);
    } else {
      setTestResponse("I'm sorry, I don't have an answer for that. You can train me by adding a new FAQ.");
    }
    setTestQuery('');
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Knowledge Base Management</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-8">
          {/* File Upload Section */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Train AI from a Source</h2>
            <p className="text-gray-600 mb-4">Upload documents (.pdf, .docx, .txt) or website URLs to train the AI.</p>
            <div className="flex items-center space-x-4">
              <input
                type="file"
                id="file-upload"
                className="hidden"
              />
              <label htmlFor="file-upload" className="flex items-center px-4 py-2 bg-gray-500 text-white rounded-lg cursor-pointer hover:bg-gray-600 transition-colors">
                <FiUpload className="mr-2" />
                Upload Document
              </label>
              <span className="text-gray-500">or</span>
              <input
                type="text"
                placeholder="Enter website URL"
                className="flex-grow p-2 border rounded-lg focus:ring-2 focus:ring-gray-400"
              />
            </div>
            <button className="mt-4 w-full px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-black transition-colors">
              Start Training
            </button>
          </div>

          {/* AI Response Testing Section */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Test AI Responses (Simulation)</h2>
            <form onSubmit={handleTestQuery} className="space-y-4">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={testQuery}
                  onChange={(e) => setTestQuery(e.target.value)}
                  placeholder="Ask a question..."
                  className="flex-grow p-2 border rounded-lg focus:ring-2 focus:ring-gray-400"
                />
                <button type="submit" className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors flex items-center">
                  <FiSend className="mr-2" /> Send
                </button>
              </div>
            </form>
            {testResponse && (
              <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="font-semibold text-blue-800">AI Response:</p>
                <p className="text-gray-700">{testResponse}</p>
              </div>
            )}
          </div>
        </div>

        {/* Right Column */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Manage FAQs</h2>
          
          {/* Add/Edit FAQ Form */}
          <form onSubmit={handleAddFaq} className="space-y-4 mb-6">
            <input
              type="text"
              placeholder="Question"
              value={newFaq.question}
              onChange={(e) => setNewFaq({ ...newFaq, question: e.target.value })}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              required
            />
            <textarea
              placeholder="Answer"
              value={newFaq.answer}
              onChange={(e) => setNewFaq({ ...newFaq, answer: e.target.value })}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              rows="3"
              required
            ></textarea>
            <button type="submit" className="w-full px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors flex items-center justify-center">
              <FiPlus className="mr-2" /> {editingFaq ? 'Update FAQ' : 'Add FAQ'}
            </button>
          </form>

          {/* FAQ List */}
          <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
            {faqs.map(faq => (
              <div key={faq.id} className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="font-semibold text-gray-800">{faq.question}</p>
                <p className="text-gray-600 mt-1">{faq.answer}</p>
                <div className="flex items-center justify-end space-x-2 mt-2">
                  <button onClick={() => handleEditFaq(faq)} className="text-gray-500 hover:text-gray-700">
                    <FiEdit size={16} />
                  </button>
                  <button onClick={() => handleDeleteFaq(faq.id)} className="text-gray-500 hover:text-gray-700">
                    <FiTrash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Knowledge;