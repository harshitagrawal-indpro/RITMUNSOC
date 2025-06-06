
import { useEffect, useRef } from 'react';

export function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random size between 2-6px
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random horizontal position
      particle.style.left = Math.random() * 100 + '%';
      
      // Random animation duration
      particle.style.animationDuration = (Math.random() * 10 + 5) + 's';
      
      container.appendChild(particle);
      
      // Remove particle after animation
      setTimeout(() => {
        if (container.contains(particle)) {
          container.removeChild(particle);
        }
      }, 15000);
    };

    // Create particles at intervals
    const interval = setInterval(createParticle, 300);

    return () => {
      clearInterval(interval);
      // Clean up existing particles
      const particles = container.querySelectorAll('.particle');
      particles.forEach(particle => {
        if (container.contains(particle)) {
          container.removeChild(particle);
        }
      });
    };
  }, []);

  return <div ref={containerRef} className="particles" />;
}
