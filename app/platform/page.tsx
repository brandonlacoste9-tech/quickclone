'use client';

import { useState } from 'react';

const templates = [
  { id: 'stripe', name: 'Stripe', category: 'Payments', image: '/templates/stripe.png', description: 'Financial infrastructure landing page' },
  { id: 'notion', name: 'Notion', category: 'Productivity', image: '/templates/notion.png', description: 'Connected workspace platform' },
  { id: 'linear', name: 'Linear', category: 'Project Management', image: '/templates/linear.png', description: 'Issue tracking for modern teams' },
  { id: 'vercel', name: 'Vercel', category: 'Developer Tools', image: '/templates/vercel.png', description: 'Platform for frontend developers' },
];

export default function PlatformPage() {
  const [activeTab, setActiveTab] = useState<'prompt' | 'templates'>('prompt');
  const [prompt, setPrompt] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simulate AI generation
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsGenerating(false);
    alert('Clone generated! Check your dashboard.');
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Header */}
      <nav className="border-b border-gray-800 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">Q</span>
            </div>
            <span className="text-2xl font-bold text-white">QuickClone</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white">My Projects</button>
            <button className="text-gray-300 hover:text-white">Documentation</button>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full font-medium hover:from-purple-700 hover:to-blue-700">Upgrade Pro</button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-white mb-4">
            Clone Any Website in
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Seconds</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            AI-powered platform to instantly recreate any landing page design as production-ready React code
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('prompt')}
            className={`px-8 py-3 rounded-full font-medium transition ${
              activeTab === 'prompt'
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            AI Prompt
          </button>
          <button
            onClick={() => setActiveTab('templates')}
            className={`px-8 py-3 rounded-full font-medium transition ${
              activeTab === 'templates'
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            Template Library
          </button>
        </div>

        {/* AI Prompt Tab */}
        {activeTab === 'prompt' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4">Describe Your Clone</h2>
              <p className="text-gray-300 mb-6">
                Enter a URL or describe the website you want to clone
              </p>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Example: Clone stripe.com's landing page with a purple theme...\n\nOr paste a URL: https://stripe.com"
                className="w-full h-40 bg-gray-900 text-white border border-gray-600 rounded-lg p-4 focus:outline-none focus:border-purple-500 resize-none"
              />
              <div className="mt-6 flex items-center justify-between">
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-2 text-gray-300">
                    <input type="checkbox" className="rounded" />
                    <span>Include animations</span>
                  </label>
                  <label className="flex items-center space-x-2 text-gray-300">
                    <input type="checkbox" className="rounded" defaultChecked />
                    <span>Responsive design</span>
                  </label>
                  <label className="flex items-center space-x-2 text-gray-300">
                    <input type="checkbox" className="rounded" defaultChecked />
                    <span>TypeScript</span>
                  </label>
                </div>
                <button
                  onClick={handleGenerate}
                  disabled={!prompt || isGenerating}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-medium hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                >
                  {isGenerating ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Generating...</span>
                    </>
                  ) : (
                    <span>Generate Clone</span>
                  )}
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Instant Generation</h3>
                <p className="text-gray-400">AI analyzes and recreates designs in under 30 seconds</p>
              </div>
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Production Ready</h3>
                <p className="text-gray-400">Clean Next.js + Tailwind code ready to deploy</p>
              </div>
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <div className="w-12 h-12 bg-pink-600/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Export Code</h3>
                <p className="text-gray-400">Download complete project as ZIP file</p>
              </div>
            </div>
          </div>
        )}

        {/* Template Library Tab */}
        {activeTab === 'templates' && (
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Popular Templates</h2>
              <p className="text-gray-300">Start with pre-built clones of popular websites</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {templates.map((template) => (
                <div
                  key={template.id}
                  className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border cursor-pointer transition ${
                    selectedTemplate === template.id
                      ? 'border-purple-500 ring-2 ring-purple-500/50'
                      : 'border-gray-700 hover:border-gray-600'
                  }`}
                  onClick={() => setSelectedTemplate(template.id)}
                >
                  <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg mb-4 flex items-center justify-center border border-gray-700">
                    <span className="text-4xl font-bold text-white/30">{template.name.charAt(0)}</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{template.name}</h3>
                    <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">
                      {template.category}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-4">{template.description}</p>
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-purple-600 text-white py-2 rounded-lg font-medium hover:bg-purple-700">
                      Use Template
                    </button>
                    <button className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600">
                      Preview
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
