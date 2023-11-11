export const removeFileExtension = (x: string) => {
  return x.replace(/\.[^/.]+$/, '');
};
