import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of AI-Powered Customer Service",
      excerpt: "Explore how artificial intelligence is revolutionizing the way businesses handle customer interactions and support.",
      author: "Sarah Johnson",
      date: "January 15, 2025",
      readTime: "5 min read",
      category: "AI Technology"
    },
    {
      title: "10 Ways AI Receptionists Improve Business Efficiency",
      excerpt: "Discover the key benefits of implementing AI receptionist solutions in your business operations.",
      author: "Michael Chen",
      date: "January 10, 2025",
      readTime: "7 min read",
      category: "Business Tips"
    },
    {
      title: "Setting Up Your First AI Receptionist: A Complete Guide",
      excerpt: "Step-by-step instructions for getting started with YourReceptionAI and optimizing your setup.",
      author: "Emily Rodriguez",
      date: "January 5, 2025",
      readTime: "10 min read",
      category: "Getting Started"
    },
    {
      title: "Customer Success Story: How TechCorp Reduced Call Wait Times by 80%",
      excerpt: "Learn how one company transformed their customer service with AI-powered phone automation.",
      author: "David Park",
      date: "December 28, 2024",
      readTime: "6 min read",
      category: "Case Studies"
    },
    {
      title: "Understanding Natural Language Processing in Customer Service",
      excerpt: "A deep dive into how NLP technology enables more human-like conversations with AI assistants.",
      author: "Dr. Lisa Wang",
      date: "December 20, 2024",
      readTime: "8 min read",
      category: "Technology"
    },
    {
      title: "Best Practices for Training Your AI Receptionist",
      excerpt: "Tips and strategies for optimizing your AI receptionist's knowledge base and response quality.",
      author: "James Wilson",
      date: "December 15, 2024",
      readTime: "9 min read",
      category: "Best Practices"
    }
  ];

  const categories = ["All", "AI Technology", "Business Tips", "Getting Started", "Case Studies", "Technology", "Best Practices"];

  return (
    <div className="min-h-screen bg-stone-50 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-medium text-stone-900 mb-4">Blog</h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Insights, tips, and updates from the world of AI-powered customer service
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-lg border border-stone-200 text-stone-600 hover:bg-stone-900 hover:text-white transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="bg-white rounded-lg p-8 shadow-sm border border-stone-200 mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-stone-900 text-white px-3 py-1 rounded-full text-sm font-medium">Featured</span>
            <span className="text-stone-500 text-sm">{blogPosts[0].category}</span>
          </div>
          <h2 className="text-2xl font-medium text-stone-900 mb-3">{blogPosts[0].title}</h2>
          <p className="text-stone-600 mb-4 text-lg">{blogPosts[0].excerpt}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm text-stone-500">
              <span>By {blogPosts[0].author}</span>
              <span>{blogPosts[0].date}</span>
              <span>{blogPosts[0].readTime}</span>
            </div>
            <button className="bg-stone-900 text-white px-6 py-2 rounded-lg hover:bg-stone-800 transition-colors">
              Read More
            </button>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <article key={index} className="bg-white rounded-lg shadow-sm border border-stone-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-stone-100 text-stone-700 px-2 py-1 rounded text-xs font-medium">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-lg font-normal text-stone-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-stone-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-stone-500 mb-4">
                  <span>By {post.author}</span>
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-stone-500">{post.date}</span>
                  <button className="text-stone-900 hover:text-stone-700 text-sm font-medium">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white rounded-lg p-8 shadow-sm border border-stone-200 mt-16 text-center">
          <h2 className="text-2xl font-normal text-stone-900 mb-4">Stay Updated</h2>
          <p className="text-stone-600 mb-6 max-w-2xl mx-auto">
            Get the latest insights on AI technology, customer service trends, and product updates delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500"
            />
            <button className="bg-stone-900 text-white px-6 py-2 rounded-lg hover:bg-stone-800 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
