import axios from "axios";
import qs from "query-string";

export const getGames = async (key, params) => {
  const { data } = await axios.get("http://192.168.0.4:3001/games", {
    params,
    paramsSerializer: (params) => {
      return qs.stringify(params, { skipNull: true, skipEmptyString: true });
    },
  });

  // const { data } = await axios("http://192.168.0.4:3001/games");
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
