import { delay } from "../../utils/delay";
import { players } from "../../constants";

let id = 1;

const generateGames = () => {
  const games = [];

  for (let i = 0; i < 10; i++) {
    const game = {
      players,
      id: id++,
      winner: 1,
    };

    games.push(game);
  }

  return games;
};

const games = generateGames();

export const getGames = async () => {
  const data = await delay(() => games, 300);
  return data;
};
