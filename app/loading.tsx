import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-dark">
      <div className="relative flex flex-col items-center">
        {/* Glow behind loader */}
        <div className="absolute inset-0 bg-primary-500/20 blur-[50px] rounded-full" />
        
        {/* Spinner */}
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 border-t-2 border-primary-500 rounded-full animate-spin [animation-duration:1s]" />
          <div className="absolute inset-2 border-r-2 border-accent-500 rounded-full animate-spin [animation-duration:1.5s] [animation-direction:reverse]" />
          <div className="absolute inset-4 border-b-2 border-white rounded-full animate-spin [animation-duration:2s]" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white font-display font-bold text-xl tracking-widest">RJ</span>
          </div>
        </div>
        
        <p className="mt-8 text-primary-400 font-medium tracking-[0.2em] animate-pulse">
          LOADING
        </p>
      </div>
    </div>
  );
};

export default Loading;
