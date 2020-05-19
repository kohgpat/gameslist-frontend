import axios from "axios";

export const getPlayers = async () => {
  const { data } = await axios.get("http://localhost:3001/players");
  return data;
};

export const getTopPlayers = async () => {
  const { data } = await axios.get("http://localhost:3001/players/top");
  return data;
};

export const getPlayer = async (id) => {
  const { data } = await axios.get("http://localhost:3001/players/" + id);
  return data;
};

export const createPlayer = async (player) => {
  const { data } = await axios.post("http://localhost:3001/players", player);
  return data;
};
