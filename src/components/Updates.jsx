import React, { useState } from 'react';
import updateimg from '../assets/updateimg.jpeg';
import updateimg2 from '../assets/updateimg2.jpeg';
import team1 from '../assets/team1.jpeg';
import simpl2 from '../assets/simpl2.jpeg';
import simpel3 from '../assets/simpel3.jpeg';

const updates = [
  {
    category: 'Changelog',
    date: 'Nov 28, 2024',
    title: 'Introducing OrbAI 1.0.7',
    description: 'OrbAI 1.0.7 brings seamless new integrations, live data updates, and essential fixes to enhance your overall experience. Here\'s what\'s new:',
    image: updateimg,
    authorImage: team1,
  },
  {
    category: 'Announcement',
    date: 'Nov 28, 2023',
    title: 'Introducing OrbAI 1.0.6',
    description: 'OrbAI 1.0.6 introduces powerful new analytics tools and improved accessibility upgrades to refine your workflows. Here\'s what\'s new:',
    image: updateimg2,
    authorImage: team1,
  },
  {
    category: 'Changelog',
    date: 'Nov 28, 2022',
    title: 'Introducing OrbAI 1.0.5',
    description: 'OrbAI 1.0.5 introduces enhanced integrations and optimizations to improve performance and your overall experience. Here\'s what\'s new:',
    image: simpl2,
    authorImage: team1,
  },
  {
    category: 'Announcement',
    date: 'Nov 28, 2021',
    title: 'Introducing OrbAI 1.0.4',
    description: 'We\'re excited to share OrbAI 1.0.4, bringing improved stability and new features to enhance your workflows. Here\'s what\'s new:',
    image: simpel3,
    authorImage: team1,
  },
];

const Updates = () => {
  const [activeFilter, setActiveFilter] = useState('All Posts');

  const filteredUpdates = updates.filter(update => {
    if (activeFilter === 'All Posts') {
      return true;
    }
    return update.category === activeFilter;
  });

  return (
    <div className="bg-white py-20 mt-5">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-gray-600 tracking-wide uppercase">Our Services</h2>
          <p className="mt-2 text-3xl font-medium text-gray-900 tracking-tight sm:text-4xl">
            Fresh Takes & Updates
          </p>
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500 font-base">
            AI agency that delivers smart solutions built to perform
          </p>
        </div>
        <div className="mt-10 flex justify-center">
          <div className="flex rounded-full bg-gray-200 p-1">
            <button
              onClick={() => setActiveFilter('All Posts')}
              className={`${
                activeFilter === 'All Posts' ? 'bg-white text-gray-800 shadow-md' : 'text-gray-500'
              } py-2 px-4 rounded-full`}
            >
              All Posts
            </button>
            <button
              onClick={() => setActiveFilter('Announcement')}
              className={`${
                activeFilter === 'Announcement' ? 'bg-white text-gray-800 shadow-md' : 'text-gray-500'
              } py-2 px-4 rounded-full`}
            >
              Announcements
            </button>
            <button
              onClick={() => setActiveFilter('Changelog')}
              className={`${
                activeFilter === 'Changelog' ? 'bg-white text-gray-800 shadow-md' : 'text-gray-500'
              } py-2 px-4 rounded-full`}
            >
              Changelog
            </button>
          </div>
        </div>
        <div className="mt-12 max-w-2xl mx-auto grid gap-8 lg:grid-cols-1 lg:max-w-none">
          {filteredUpdates.map((update, index) => (
            <div key={index} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover p-5 rounded-4xl" src={update.image} alt="" />
              </div>
              <div className="flex-1 bg-white p-4 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <a href="#">
                        <span className="sr-only">Author</span>
                        <img className="h-10 w-10 rounded-full" src={update.authorImage} alt="" />
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        <a href="#" className="hover:underline">
                          {update.category}
                        </a>
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={update.date}>{update.date}</time>
                      </div>
                    </div>
                  </div>
                  <a href="#" className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{update.title}</p>
                    <p className="mt-3 text-base text-gray-500">{update.description}</p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Updates;