'use client';

import React, { useState, useRef, useEffect } from 'react';

interface YesNoGameProps {
  imageSrc: string;
  imageAlt: string;
  audioFiles: string[];
}

const YesNoGame: React.FC<YesNoGameProps> = ({ imageSrc, imageAlt, audioFiles }) => {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [showFireworks, setShowFireworks] = useState(false);
  const [currentAudioIndex, setCurrentAudioIndex] = useState(0);
  const [shuffledAudioFiles, setShuffledAudioFiles] = useState<string[]>([]);
  const [moveIndex, setMoveIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Shuffle audio files on component mount
  useEffect(() => {
    const shuffled = [...audioFiles].sort(() => Math.random() - 0.5);
    setShuffledAudioFiles(shuffled);
  }, [audioFiles]);

  // Define 2 specific moves for the No button
  const getPredefinedMoves = () => {
    const viewportWidth = window.innerWidth;
    const buttonWidth = 200;
    const borderPixels = 48; // 0.5 inch border
    
    return [
      // Move 1: Top left area
      { x: borderPixels + 100, y: borderPixels + 100 },
      // Move 2: Top right area  
      { x: viewportWidth - buttonWidth - borderPixels - 100, y: borderPixels + 100 }
    ];
  };

  const handleNoClick = () => {
    const moves = getPredefinedMoves();
    const currentMove = moves[moveIndex];
    
    // Move the button to the current predefined position
    setNoButtonPosition(currentMove);
    
    // Move to next position in the sequence
    setMoveIndex((prev) => (prev + 1) % 2);
    
    // Play audio
    if (shuffledAudioFiles.length > 0 && audioRef.current) {
      audioRef.current.src = shuffledAudioFiles[currentAudioIndex];
      audioRef.current.play().catch(console.error);
      
      // Move to next audio (cycle through)
      setCurrentAudioIndex((prev) => (prev + 1) % shuffledAudioFiles.length);
    }
  };

  const handleYesClick = () => {
    // Reset button position and move index
    setNoButtonPosition({ x: 0, y: 0 });
    setMoveIndex(0);
    
    // Play yey.m4a audio for Yes button
    if (audioRef.current) {
      audioRef.current.src = "/yey.m4a";
      audioRef.current.play().catch(console.error);
    }
    
    // Show fireworks for Yes button
    setShowFireworks(true);
    setTimeout(() => setShowFireworks(false), 2000);
  };

  return (
    <div 
      ref={containerRef}
      className="min-h-screen w-full bg-gradient-to-br from-pink-100 to-purple-100 flex flex-col items-center justify-center p-4 relative overflow-hidden"
    >
      {/* Image */}
      <div className="w-full max-w-2xl flex items-center justify-center mb-8">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="max-w-full max-h-80 object-contain rounded-lg shadow-lg"
        />
      </div>

      {/* Question Text */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">
          Movie or Play ML? 💕
        </h2>
      </div>

      {/* Buttons Container */}
      <div className="relative w-full flex items-center justify-center gap-8">
        {/* Yes Button */}
        <button
          onClick={handleYesClick}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-6 px-12 rounded-full text-2xl shadow-lg transform hover:scale-105 transition-all duration-200 z-10"
        >
          Yes! 💖
        </button>

        {/* No Button - Moves around */}
        <button
          onClick={handleNoClick}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-6 px-12 rounded-full text-2xl shadow-lg transform hover:scale-105 z-20"
          style={{
            position: noButtonPosition.x === 0 && noButtonPosition.y === 0 ? 'static' : 'absolute',
            left: noButtonPosition.x === 0 && noButtonPosition.y === 0 ? 'auto' : noButtonPosition.x,
            top: noButtonPosition.x === 0 && noButtonPosition.y === 0 ? 'auto' : noButtonPosition.y,
            transform: noButtonPosition.x === 0 && noButtonPosition.y === 0 ? 'none' : 'translate(-50%, -50%)',
            visibility: 'visible',
            opacity: 1,
            display: 'block',
            transition: 'none'
          }}
        >
          No 😢
        </button>
      </div>

      {/* Fireworks Animation */}
      {showFireworks && (
        <div className="absolute inset-0 pointer-events-none z-20">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-yellow-400 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: '1.5s'
              }}
            />
          ))}
          {[...Array(15)].map((_, i) => (
            <div
              key={`sparkle-${i}`}
              className="absolute text-3xl animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 1}s`
              }}
            >
              ✨
            </div>
          ))}
        </div>
      )}

      {/* Audio Element */}
      <audio ref={audioRef} preload="auto" />
    </div>
  );
};

export default YesNoGame;
