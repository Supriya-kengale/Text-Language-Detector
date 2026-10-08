import React, { useState } from 'react';
import { detectLanguage } from '../utils/languageDetection';
import { Globe2 } from 'lucide-react';

const LanguageDetector: React.FC = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState<{ name: string; code: string } | null>(null);

  const handleDetect = () => {
    const detected = detectLanguage(text);
    setResult(detected);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 space-y-6">
      <div className="flex items-center gap-3 mb-8">
        <Globe2 className="w-8 h-8 text-blue-600" />
        <h1 className="text-3xl font-bold text-gray-800">Language Detector</h1>
      </div>

      <div className="space-y-4">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text to detect language..."
          className="w-full h-40 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        />

        <button
          onClick={handleDetect}
          className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Detect Language
        </button>

        {result && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Detected Language:</h2>
            <p className="text-blue-600 text-xl font-medium">{result.name}</p>
          </div>
        )}

        {text && !result && (
          <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200">
            <p className="text-red-600">Could not detect the language. Please try with a longer text.</p>
          </div>
        )}
        <div className="text-sm text-gray-500 mt-4">
          <p>Tips:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>For best results, provide at least 2-3 words</li>
            <li>Complete sentences will give higher accuracy</li>
            <li>The detector supports 19 major languages</li>
            <li>Longer text typically yields more accurate results</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LanguageDetector;