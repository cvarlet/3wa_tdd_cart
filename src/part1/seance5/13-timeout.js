async function wakeUp(cb) {
  await new Promise((resolve) => {
    setTimeout(() => {
      cb();
      resolve();
    }, 5000);
  });
}

module.exports = { wakeUp };
