import axios from "axios";
import qs from "query-string";

export const getPlayers = async (key, params) => {
  const { data } = await axios.get("http://localhost:3001/players", {
    params,
    paramsSerializer: (params) => {
      return qs.stringify(params, { skipNull: true, skipEmptyString: true });
    },
  });
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
