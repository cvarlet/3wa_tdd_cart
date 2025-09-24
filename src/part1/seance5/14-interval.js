async function waitForBus(cb) {
  setInterval(cb, 10 * 1000 * 60);
}

module.exports = { waitForBus };
