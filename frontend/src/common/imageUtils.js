const PLACEHOLDER_IMAGE = "/placeholder.svg";

const checkImage = (url) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
};

export const getValidImage = async (images = []) => {
  for (const url of images) {
    if (await checkImage(url)) {
      return url;
    }
  }

  return PLACEHOLDER_IMAGE;
};
