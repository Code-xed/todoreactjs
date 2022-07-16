import React from 'react';

function LangCard({src, content}) {
  return (
    <div className="flex-inline shadow-lg shadow-yellow-800 from-sky-400 bg-gradient-to-r">
      {/* Icon */}
      <div className="shrink-0">
        <img className="ml-4 w-24 h-24" src={src} alt={content} />
      </div>
      
      {/* Description */}
      <div className={content}>
        <p>{content}</p>
      </div>
    </div>
    );
}

export default LangCard;