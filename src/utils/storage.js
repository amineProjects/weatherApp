const storagePrefix = "weather_app_";

const storage = {
  getItem: (id) => {
    return JSON.parse(window.localStorage.getItem(`${storagePrefix}${id}`));
  },
  setItem: (id, data) => {
    window.localStorage.setItem(`${storagePrefix}${id}`, JSON.stringify(data));
  },
  removeItem: (id) => {
    window.localStorage.removeItem(`${storagePrefix}${id}`);
  },
};

export default storage;
