import { useEffect, useRef, useState } from 'react';

function useDetectScrollPosition(
  scrollRef: React.RefObject<HTMLDivElement>,
  refs: React.RefObject<HTMLDivElement>[]
) {
  const [currentRefIndexPosition, setCurrentRefIndexPosition] = useState(0);
  const isListenerOn = useRef<boolean>(false);

  function isElementInViewport(el: HTMLDivElement | null) {
    if (!el) {
      return false;
    }
    const rect = el.getBoundingClientRect();

    return rect.top >= 0;
  }

  useEffect(() => {
    const scrollRefCurrent = scrollRef.current;
    const listener = () => {
      const indexesStatus = Array(4).fill(false);
      for (let i = 0; i < refs.length; i++) {
        const ref = refs[i];
        const isInView = isElementInViewport(ref.current);
        indexesStatus[i] = isInView;
      }

      const firstTrueIndex = indexesStatus.findIndex((x) => x);

      if (
        indexesStatus.some((x) => x) &&
        currentRefIndexPosition !== firstTrueIndex
      ) {
        setCurrentRefIndexPosition(firstTrueIndex);
      }

      if (
        indexesStatus.every((x) => !x) &&
        currentRefIndexPosition !== refs.length - 1
      ) {
        return setCurrentRefIndexPosition(refs.length - 1);
      }
    };
    if (!isListenerOn.current && scrollRefCurrent) {
      isListenerOn.current = true;
      scrollRefCurrent.addEventListener('scroll', listener);
    }

    return () => {
      if (scrollRefCurrent) {
        isListenerOn.current = false;
        scrollRefCurrent.removeEventListener('scroll', listener);
      }
    };
  }, [currentRefIndexPosition, refs, scrollRef]);

  return currentRefIndexPosition;
}

export default useDetectScrollPosition;
