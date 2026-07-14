import React, { useEffect, useState } from 'react';

const BackgroundEffects = () => {
  const [bubbles, setBubbles] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Generate bubbles once
    const newBubbles = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // vw
      y: Math.random() * 120 - 10, // vh (slightly outside screen boundaries)
      size: Math.random() * 80 + 20, // 20px to 100px
      depth: Math.random() * 0.8 + 0.2, // 0.2 to 1.0 (for parallax)
      opacity: Math.random() * 0.9 + 0.5,
      animDelay: Math.random() * 5,
      animDuration: Math.random() * 10 + 10, // 10s to 20s
      type: i % 3,
    }));
    setBubbles(newBubbles);

    let animationFrameId;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 2; // -1 to 1
      targetY = (e.clientY / window.innerHeight - 0.5) * 2; // -1 to 1
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const updateMousePos = () => {
      // Smooth interpolation for mouse movement
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;
      setMousePos({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(updateMousePos);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    updateMousePos(); // start animation loop

    // set initial scroll
    handleScroll();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="absolute"
          style={{
            left: `${b.x}vw`,
            top: `${b.y}vh`,
            transform: `translate(${mousePos.x * 60 * b.depth}px, ${
              mousePos.y * 60 * b.depth - scrollY * b.depth * 0.3
            }px)`,
          }}
        >
          <div
            className={`rounded-full bubble-float-${b.type}`}
            style={{
              width: `${b.size}px`,
              height: `${b.size}px`,
              background: 'radial-gradient(circle at 30% 30%, rgba(96, 165, 250, 0.15), rgba(59, 130, 246, 0.05) 70%, transparent)',
              boxShadow: 'inset 0 0 15px rgba(255,255,255,0.05)',
              opacity: b.opacity,
              animationDuration: `${b.animDuration}s`,
              animationDelay: `-${b.animDelay}s`,
              filter: `blur(${b.depth < 0.5 ? 3 : 0}px)`,
            }}
          />
        </div>
      ))}
      {/* Background radial gradient that follows the mouse */}
      <div 
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x * 50 + 50}% ${mousePos.y * 50 + 50}%, rgba(59, 130, 246, 0.05), transparent 80%)`,
        }}
      />
    </div>
  );
};

export default BackgroundEffects;
