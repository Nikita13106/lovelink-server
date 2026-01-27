let store = {};
let ttl = {};

module.exports = {
  get(key) {
    if (ttl[key] && Date.now() > ttl[key]) {
      delete store[key];
      delete ttl[key];
      return null;
    }
    return store[key];
  },
  set(key, value, seconds = 30) {
    store[key] = value;
    ttl[key] = Date.now() + seconds * 1000;
  },
};
