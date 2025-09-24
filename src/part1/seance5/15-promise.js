const api = {
  getUser: async (id) => {
    console.log("api");
    return { id, name: "Alice" };
  },
};

async function fetchUser(api, id) {
  const user = await api.getUser(id);
  return user;
}

module.exports = { fetchUser };
