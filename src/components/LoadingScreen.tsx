import React, { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 200);
          return 100;
        }
        return prev + Math.random() * 10;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-50 bg-white flex items-center justify-center transition-opacity duration-200 ${
      progress === 100 ? 'opacity-0' : 'opacity-100'
    }`}>
      <div className="text-center space-y-4">
        {/* Simple Logo */}
        <div className="w-12 h-12 mx-auto bg-amber-500 rounded-xl flex items-center justify-center">
          <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
        </div>

        {/* Simple Text */}
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-gray-900">
            Loading
          </h2>
          <p className="text-xs text-gray-500">
            {Math.round(progress)}%
          </p>
        </div>

        {/* Simple Progress Bar */}
        <div className="w-32 mx-auto">
          <div className="w-full bg-gray-200 rounded-full h-1">
            <div 
              className="h-full bg-amber-500 rounded-full transition-all duration-150"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
