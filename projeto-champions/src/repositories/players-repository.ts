import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";

const database: PlayerModel[] = [
  {
    id: 1,
    name: "Lionel Messi",
    club: "Paris Saint-Germain",
    nationality: "Argentina",
    position: "Forward",
    statistics: {
      Overall: 93,
      Pace: 85,
      Shooting: 94,
      Passing: 91,
      Dribbling: 95,
      Defending: 38,
      Physical: 65,
    },
  },
  {
    id: 2,
    name: "Cristiano Ronaldo",
    club: "Manchester United",
    nationality: "Portugal",
    position: "Forward",
    statistics: {
      Overall: 92,
      Pace: 89,
      Shooting: 93,
      Passing: 82,
      Dribbling: 88,
      Defending: 35,
      Physical: 78,
    },
  },
  {
    id: 3,
    name: "Robert Lewandowski",
    club: "Bayern Munich",
    nationality: "Poland",
    position: "Forward",
    statistics: {
      Overall: 91,
      Pace: 80,
      Shooting: 92,
      Passing: 78,
      Dribbling: 83,
      Defending: 40,
      Physical: 84,
    },
  },
  {
    id: 4,
    name: "Kevin De Bruyne",
    club: "Manchester City",
    nationality: "Belgium",
    position: "Midfielder",
    statistics: {
      Overall: 91,
      Pace: 76,
      Shooting: 85,
      Passing: 92,
      Dribbling: 87,
      Defending: 62,
      Physical: 79,
    },
  },
  {
    id: 5,
    name: "Kylian Mbappé",
    club: "Paris Saint-Germain",
    nationality: "France",
    position: "Forward",
    statistics: {
      Overall: 90,
      Pace: 96,
      Shooting: 86,
      Passing: 79,
      Dribbling: 91,
      Defending: 39,
      Physical: 76,
    },
  },
  {
    id: 6,
    name: "Lionel Messi",
    club: "Paris Saint-Germain",
    nationality: "Argentina",
    position: "Forward",
    statistics: {
      Overall: 93,
      Pace: 85,
      Shooting: 94,
      Passing: 91,
      Dribbling: 95,
      Defending: 38,
      Physical: 65,
    },
  },
  {
    id: 7,
    name: "Cristiano Ronaldo",
    club: "Manchester United",
    nationality: "Portugal",
    position: "Forward",
    statistics: {
      Overall: 92,
      Pace: 89,
      Shooting: 93,
      Passing: 82,
      Dribbling: 88,
      Defending: 35,
      Physical: 78,
    },
  },
  {
    id: 8,
    name: "Robert Lewandowski",
    club: "Bayern Munich",
    nationality: "Poland",
    position: "Forward",
    statistics: {
      Overall: 91,
      Pace: 80,
      Shooting: 92,
      Passing: 78,
      Dribbling: 83,
      Defending: 40,
      Physical: 84,
    },
  },
  {
    id: 9,
    name: "Erling Haaland",
    club: "Borussia Dortmund",
    nationality: "Norway",
    position: "Forward",
    statistics: {
      Overall: 89,
      Pace: 88,
      Shooting: 90,
      Passing: 75,
      Dribbling: 81,
      Defending: 32,
      Physical: 89,
    },
  },
  {
    id: 10,
    name: "Neymar Jr.",
    club: "Paris Saint-Germain",
    nationality: "Brazil",
    position: "Forward",
    statistics: {
      Overall: 91,
      Pace: 92,
      Shooting: 84,
      Passing: 88,
      Dribbling: 95,
      Defending: 38,
      Physical: 72,
    },
  },
  {
    id: 11,
    name: "Mohamed Salah",
    club: "Liverpool",
    nationality: "Egypt",
    position: "Forward",
    statistics: {
      Overall: 90,
      Pace: 94,
      Shooting: 87,
      Passing: 81,
      Dribbling: 89,
      Defending: 45,
      Physical: 75,
    },
  },
  {
    id: 12,
    name: "Virgil van Dijk",
    club: "Liverpool",
    nationality: "Netherlands",
    position: "Defender",
    statistics: {
      Overall: 89,
      Pace: 77,
      Shooting: 60,
      Passing: 78,
      Dribbling: 70,
      Defending: 90,
      Physical: 92,
    },
  },
  {
    id: 13,
    name: "Sadio Mané",
    club: "Liverpool",
    nationality: "Senegal",
    position: "Forward",
    statistics: {
      Overall: 88,
      Pace: 95,
      Shooting: 85,
      Passing: 78,
      Dribbling: 90,
      Defending: 45,
      Physical: 78,
    },
  },
  {
    id: 14,
    name: "Trent Alexander-Arnold",
    club: "Liverpool",
    nationality: "England",
    position: "Defender",
    statistics: {
      Overall: 87,
      Pace: 84,
      Shooting: 70,
      Passing: 86,
      Dribbling: 82,
      Defending: 85,
      Physical: 77,
    },
  },
  {
    id: 15,
    name: "Alisson Becker",
    club: "Liverpool",
    nationality: "Brazil",
    position: "Goalkeeper",
    statistics: {
      Overall: 89,
      Pace: 84,
      Shooting: 85,
      Passing: 86,
      Dribbling: 48,
      Defending: 90,
      Physical: 77,
    },
  },
  {
    id: 16,
    name: "Frenkie de Jong",
    club: "Barcelona",
    nationality: "Netherlands",
    position: "Midfielder",
    statistics: {
      Overall: 88,
      Pace: 78,
      Shooting: 76,
      Passing: 89,
      Dribbling: 88,
      Defending: 80,
      Physical: 82,
    },
  },
  {
    id: 17,
    name: "Raheem Sterling",
    club: "Manchester City",
    nationality: "England",
    position: "Forward",
    statistics: {
      Overall: 87,
      Pace: 93,
      Shooting: 82,
      Passing: 79,
      Dribbling: 90,
      Defending: 40,
      Physical: 77,
    },
  },
  {
    id: 18,
    name: "Zlatan Ibrahimović",
    club: "AC Milan",
    nationality: "Sweden",
    position: "Forward",
    statistics: {
      Overall: 89,
      Pace: 81,
      Shooting: 92,
      Passing: 85,
      Dribbling: 86,
      Defending: 40,
      Physical: 88,
    },
  },
  {
    id: 19,
    name: "David Beckham",
    club: "Retired",
    nationality: "England",
    position: "Midfielder",
    statistics: {
      Overall: 85,
      Pace: 76,
      Shooting: 82,
      Passing: 90,
      Dribbling: 84,
      Defending: 70,
      Physical: 72,
    },
  },
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  return database;
};

export const findPlayerById = async (
  id: number
): Promise<PlayerModel | undefined> => {
  return database.find((player) => player.id === id);
};

export const insertPlayer = async (player: PlayerModel) => {
  database.push(player);
};

export const deleteOnePlayer = async (id: number) => {
  const index = database.findIndex((p) => p.id === id);

  if (index !== -1) {
    database.splice(index, 1);
    return true;
  }

  return false;
};

export const findAndModifyPlayer = async (
  id: number,
  statistics: StatisticsModel
): Promise<PlayerModel> => {
  //find player
  const playerIndex = database.findIndex((player) => player.id === id);

  if (playerIndex !== -1) {
    database[playerIndex].statistics = statistics;
  }

  return database[playerIndex];
};
