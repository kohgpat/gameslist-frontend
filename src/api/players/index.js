import axios from "axios";
import qs from "query-string";
import { getApiUrl } from "../utils";

const API_URL = getApiUrl();

export const getPlayers = async (key, params) => {
  const { data } = await axios.get(`${API_URL}/players`, {
    params,
    paramsSerializer: (params) => {
      return qs.stringify(params, { skipNull: true, skipEmptyString: true });
    },
  });
  return data;
};

export const getTopPlayers = async (key, params) => {
  const { data } = await axios.get(`${API_URL}/players/top`, {
    params,
    paramsSerializer: (params) => {
      return qs.stringify(params, { skipNull: true, skipEmptyString: true });
    },
  });
  return data;
};

export const getPlayer = async (key, id) => {
  const { data } = await axios.get(`${API_URL}/players/` + id);
  return data;
};

export const createPlayer = async (player) => {
  const { data } = await axios.post(`${API_URL}/players`, player);
  return data;
};
