export const delay = (callback, delay = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(callback());
    }, delay);
  });
};
