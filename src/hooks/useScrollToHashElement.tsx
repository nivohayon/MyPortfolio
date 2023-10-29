import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useScrollToHashElement() {
  const { hash } = useLocation();

  useEffect(() => {
    const listener = () => {
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView();
        }
      }
    };

    window.addEventListener('load', listener);

    return () => {
      window.removeEventListener('load', listener);
    };
  }, [hash]);
}

export default useScrollToHashElement;
