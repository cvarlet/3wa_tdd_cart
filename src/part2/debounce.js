function debounce(cb, delay) {
  let timerId;

  return function debounced(...args) {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(() => {
      cb.apply(this, args);
    }, delay);
  };
}

module.exports = { debounce };
