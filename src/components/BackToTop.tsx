'use client';

import { ChevronUp } from 'lucide-react';

export default function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 flex items-center justify-center w-12 h-12 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition-colors z-50"
      aria-label="Back to top"
    >
      <ChevronUp size={24} />
    </button>
  );
}