import React from 'react';

export default function Preloader() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black z-50">
      <div className="animate-spin rounded-full border-t-4 border-pink-400 border-solid h-12 w-12"></div>
    </div>
  );
}
