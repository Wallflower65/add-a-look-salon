import React from 'react';

export default function FooterStats() {
  const valueProps = [
    { emoji: '😊', label: 'Friendly Service' },
    { emoji: '🏆', label: 'Quality Work' },
    { emoji: '✨', label: 'Clean & Hygienic' },
    { emoji: '💖', label: 'Your Satisfaction First' }
  ];

  return (
    <footer className="bg-slate-900 text-white py-12 mt-24">
      <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {valueProps.map((prop, idx) => (
          <div key={idx}>
            <p className="text-2xl">{prop.emoji}</p>
            <p className="text-sm font-semibold mt-2 text-slate-300">{prop.label}</p>
          </div>
        ))}
      </div>
    </footer>
  );
}