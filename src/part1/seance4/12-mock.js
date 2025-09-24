const { getData } = require("./api");

function fetchData() {
  const data = getData();
  return data;
}

module.exports = { fetchData };
