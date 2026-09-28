import React, { useEffect, useState } from 'react';
import { FiUpload, FiPlus, FiSend, FiEdit, FiTrash2 } from 'react-icons/fi';
import { knowledgeApi } from '../lib/api';

const Knowledge = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [newFaq, setNewFaq] = useState({ question: '', answer: '' });
  const [editingFaq, setEditingFaq] = useState(null);
  const [saving, setSaving] = useState(false);
  const [testQuery, setTestQuery] = useState('');
  const [testResponse, setTestResponse] = useState('');

  const loadFaqs = async () => {
    setLoading(true);
    setError('');
    try {
      const { entries } = await knowledgeApi.list();
      setFaqs(entries);
    } catch (err) {
      setError(err.message || 'Unable to load knowledge base');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFaqs();
  }, []);

  const handleAddFaq = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      if (editingFaq) {
        const { entry } = await knowledgeApi.update(editingFaq.id, newFaq);
        setFaqs((prev) => prev.map((f) => (f.id === entry.id ? entry : f)));
        setEditingFaq(null);
      } else {
        const { entry } = await knowledgeApi.create(newFaq);
        setFaqs((prev) => [entry, ...prev]);
      }
      setNewFaq({ question: '', answer: '' });
    } catch (err) {
      alert(err.message || 'Unable to save FAQ');
    } finally {
      setSaving(false);
    }
  };

  const handleEditFaq = (faq) => {
    setEditingFaq(faq);
    setNewFaq({ question: faq.question, answer: faq.answer });
  };

  const handleDeleteFaq = async (id) => {
    try {
      await knowledgeApi.remove(id);
      setFaqs((prev) => prev.filter((faq) => faq.id !== id));
    } catch (err) {
      alert(err.message || 'Unable to delete FAQ');
    }
  };

  const handleTestQuery = (e) => {
    e.preventDefault();
    // Simple keyword match against your saved FAQs. This is a stand-in for the
    // real RAG lookup the live voice pipeline will do once it's connected.
    const query = testQuery.toLowerCase();
    const matchedFaq = faqs.find((faq) => faq.question.toLowerCase().includes(query));
    setTestResponse(
      matchedFaq
        ? matchedFaq.answer
        : "I'm sorry, I don't have an answer for that. You can train me by adding a new FAQ."
    );
    setTestQuery('');
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg min-h-screen">
      <h1 className="text-3xl font-medium text-gray-800 mb-8">Knowledge Base Management</h1>

      {error && (
        <div className="mb-6 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">{error}</div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-8">
          {/* File Upload Section */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-normal text-gray-700 mb-4">Train AI from a Source</h2>
            <p className="text-gray-600 mb-4">Upload documents (.pdf, .docx, .txt) or website URLs to train the AI.</p>
            <p className="text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4">
              Document/URL ingestion isn't wired up yet — for now, add FAQs directly on the right. This panel will
              feed the RAG knowledge base once the voice pipeline is connected.
            </p>
            <div className="flex items-center space-x-4 opacity-50 pointer-events-none">
              <label className="flex items-center px-4 py-2 bg-gray-500 text-white rounded-lg cursor-pointer">
                <FiUpload className="mr-2" />
                Upload Document
              </label>
              <span className="text-gray-500">or</span>
              <input
                type="text"
                placeholder="Enter website URL"
                className="flex-grow p-2 border rounded-lg"
                disabled
              />
            </div>
          </div>

          {/* AI Response Testing Section */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-normal text-gray-700 mb-4">Test AI Responses (Simulation)</h2>
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
                <p className="font-normal text-blue-800">AI Response:</p>
                <p className="text-gray-700">{testResponse}</p>
              </div>
            )}
          </div>
        </div>

        {/* Right Column */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-normal text-gray-700 mb-4">Manage FAQs</h2>

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
            <button
              type="submit"
              disabled={saving}
              className="w-full px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors flex items-center justify-center disabled:opacity-60"
            >
              <FiPlus className="mr-2" /> {saving ? 'Saving...' : editingFaq ? 'Update FAQ' : 'Add FAQ'}
            </button>
            {editingFaq && (
              <button
                type="button"
                onClick={() => { setEditingFaq(null); setNewFaq({ question: '', answer: '' }); }}
                className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Cancel edit
              </button>
            )}
          </form>

          {/* FAQ List */}
          {loading ? (
            <p className="text-gray-500 text-sm">Loading FAQs...</p>
          ) : faqs.length === 0 ? (
            <p className="text-gray-500 text-sm">No FAQs yet — add your first one above.</p>
          ) : (
            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
              {faqs.map((faq) => (
                <div key={faq.id} className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="font-normal text-gray-800">{faq.question}</p>
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Knowledge;
