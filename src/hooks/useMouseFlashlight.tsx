import React, { useCallback, useEffect } from 'react';

function useMouseFlashlight(containerRef: React.RefObject<HTMLDivElement>) {
  const mouseMoveEvent = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent> | MouseEvent) => {
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
    },
    [containerRef]
  );

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
  }, [containerRef, mouseMoveEvent]);
}

export default useMouseFlashlight;
