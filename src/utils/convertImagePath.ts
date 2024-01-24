import { ImagePathType } from '../types';

export const convertImgPath = (data:string) => {
  const convertedURL = JSON.parse(data);
  const imagePath = convertedURL as ImagePathType;
  return imagePath.image_intro;
};
