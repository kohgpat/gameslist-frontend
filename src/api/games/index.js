import axios from "axios";

export const getGames = async () => {
  const { data } = await axios("http://192.168.0.4:3001/games");
  return data;
};

export const getGame = async (id) => {
  const { data } = await axios("http://192.168.0.4:3001/games/" + id);
  return data;
};

export const createGame = async (game) => {
  const { data } = await axios.post("http://192.168.0.4:3001/games", game);
  return data;
};
