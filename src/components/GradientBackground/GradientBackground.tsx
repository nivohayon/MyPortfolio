import React, { useEffect, useRef } from 'react';
import './GradientBackground.css';

function GradientBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  function mouseMoveEvent(
    e: React.MouseEvent<HTMLDivElement, MouseEvent> | MouseEvent
  ) {
    if (containerRef.current && window.innerWidth >= 1024) {
      const pos = containerRef?.current?.getBoundingClientRect();
      containerRef.current.style.setProperty(
        '--x',
        (e.clientX - pos.x).toString()
      );
      containerRef.current.style.setProperty(
        '--y',
        (e.clientY - pos.y).toString()
      );
    }
  }

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', mouseMoveEvent);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', mouseMoveEvent);
      }
    };
  }, [containerRef]);

  return (
    <div
      ref={containerRef}
      className="gradient_background"
      onMouseMove={mouseMoveEvent}
    />
  );
}

export default GradientBackground;
