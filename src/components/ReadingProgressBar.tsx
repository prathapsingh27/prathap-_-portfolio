import React, { useState, useEffect } from 'react';

export const ReadingProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollY / scrollHeight) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    updateScrollProgress();

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div
      role="progressbar"
      aria-label="Reading progress"
      aria-valuenow={Math.round(scrollProgress)}
      aria-valuemin={0}
      aria-valuemax={100}
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-slate-900/30 backdrop-blur-xs pointer-events-none"
    >
      <div
        className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-cyan-200 shadow-[0_0_10px_rgba(34,211,238,0.85),0_0_4px_rgba(37,99,235,0.6)] transition-[width] duration-150 ease-out relative"
        style={{ width: `${scrollProgress}%` }}
      >
        {/* Glowing Head Particle */}
        {scrollProgress > 0 && (
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#22D3EE] blur-[0.5px]" />
        )}
      </div>
    </div>
  );
};
