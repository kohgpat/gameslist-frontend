import axios from "axios";
import qs from "query-string";
import { getApiUrl } from "../utils";

const API_URL = getApiUrl();

export const getGames = async (key, params) => {
  const { data } = await axios.get(`${API_URL}/games`, {
    params,
    paramsSerializer: (params) => {
      return qs.stringify(params, { skipNull: true, skipEmptyString: true });
    },
  });

  return data;
};

export const getGame = async (key, id) => {
  const { data } = await axios(`${API_URL}/games/` + id);
  return data;
};

export const createGame = async (game) => {
  const { data } = await axios.post(`${API_URL}/games`, game);
  return data;
};
