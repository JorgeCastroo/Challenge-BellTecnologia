import axios from "axios";

const api = axios.create({
  baseURL: "https://randomuser.me/api/?results=100",
});

export const useApi = () => ({
  getUser: async () => {
    const user = await api.get("");
    return user.data;
  },
});
