import { apiInstance } from '../instance';

type GetAllImagesUrlsParams = {
  projectName: string;
  signal?: AbortSignal;
};
export const getAllImagesService = async ({
  projectName,
  signal,
}: GetAllImagesUrlsParams) => {
  try {
    return await apiInstance.get(`images/${projectName}`, { signal });
  } catch (error) {
    console.error(error);
  }
};
