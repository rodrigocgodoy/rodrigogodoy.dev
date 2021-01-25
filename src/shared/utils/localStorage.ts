export const getKeyLocalStorage = (key: string) => {
  if (window) {
    return window.localStorage[key];
  }
  return;
};

export const setKeyLocalStorage = (key: string, value: string) => {
  if (window) {
    return window.localStorage[key] = value;
  }
  return;
};

export const removeKeyLocalStorage = (key: string) => {
  if (window) {
    return window.localStorage.removeItem(key);
  }
  return;
};

export const getLocalStorage = () => {
  if (window) {
    return window.localStorage;
  }
  return;
};