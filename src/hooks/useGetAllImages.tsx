import { useEffect, useState } from 'react';
import { getAllImagesService } from '../api/services/imagesService';

type Image = {
  data: string;
  name: string;
};

function useGetAllImages(folderName: string) {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    const getAllImagesAsync = async () => {
      if (folderName) {
        const images = await getAllImagesService({
          projectName: folderName,
          signal: controller.signal,
        });
        if (images?.data?.length) {
          setImages(images.data);
        }
      }
    };

    getAllImagesAsync();

    return () => {
      if (!controller.signal.aborted) {
        controller.abort();
      }
    };
  }, [folderName]);

  return images;
}

export default useGetAllImages;
