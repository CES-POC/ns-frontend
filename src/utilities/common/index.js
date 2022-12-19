export const setItem = (key, value) => {
  try {
    localStorage.removeItem(key)
    if (value) {
      localStorage.setItem(key, value)
    }
  } catch (error) {
    // console.log('>>>>: src/helpers/Utils.js : setCurrentUser -> error', error)
  }
}

export const removeItem = (key) => {
  localStorage.removeItem(key)
}
export const getItem = (key) => localStorage.getItem(key)

export const getImageDimensions = (imageUrl) => {
  return new Promise((resolve, reject) => {
    let dimensions = {};
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      dimensions.height = img.height;
      dimensions.width = img.width;
      resolve(dimensions);
    };
    img.onerror = (err) => {
      console.log("img error");
      console.error(err);
    };
  });
};