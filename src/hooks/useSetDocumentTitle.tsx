import { useEffect } from 'react';

function useSetDocumentTitle(title: string) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

export default useSetDocumentTitle;
