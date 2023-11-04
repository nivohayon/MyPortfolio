import React, { useCallback, useEffect } from 'react';

const container = document.body;

function useMouseFlashlight() {
  const mouseMoveEvent = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent> | MouseEvent) => {
      if (window.innerWidth >= 1024) {
        const pos = document.body.getBoundingClientRect();
        document.body.style.setProperty('--x', (e.clientX - pos.x).toString());
        document.body.style.setProperty(
          '--y',
          (e.clientY - pos.y - window.scrollY).toString()
        );
      }
    },
    []
  );

  useEffect(() => {
    container.addEventListener('mousemove', mouseMoveEvent);

    return () => {
      container.removeEventListener('mousemove', mouseMoveEvent);
    };
  }, [mouseMoveEvent]);
}

export default useMouseFlashlight;
