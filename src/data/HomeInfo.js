import premierLeagueIcon from "../assets/premierLeagueIcon.png";
import serieAIcon from "../assets/serieAIcon.png";
import ligue1Icon from "../assets/ligue1Icon.png";
import laligaIcon from "../assets/laligaIcon.png";
import bundesligaIcon from "../assets/bundesligaIcon.png";
import uclIcon from "../assets/uclIcon.png";
import uelIcon from "../assets/uelIcon.png";

export const LeagueInfo = [
  {
    leagueId: 39,
    leagueName: "Premier League",
    leagueCountry: "England",
    leagueLogo: premierLeagueIcon,
    logoBg: "#fff",
  },
  {
    leagueId: 140,
    leagueName: "Laliga Santander",
    leagueCountry: "Spain",
    leagueLogo: laligaIcon,
    logoBg: "#fff",
  },
  {
    leagueId: 61,
    leagueName: "Ligue 1 Uber Eats",
    leagueCountry: "France",
    leagueLogo: ligue1Icon,
    logoBg: "#12233f",
  },
  {
    leagueId: 135,
    leagueName: "Serie A",
    leagueCountry: "Italy",
    leagueLogo: serieAIcon,
    logoBg: "#fff",
  },
  {
    leagueId: 78,
    leagueName: "Bundesliga",
    leagueCountry: "Germany",
    leagueLogo: bundesligaIcon,
    logoBg: "#d20515",
  },
];

export const EuropeLeagueInfo = [
  {
    leagueId: 2,
    leagueLogo: uclIcon,
    leagueCountry: "World",
    leagueName: "UEFA Champions league",
    logoBg: "#fff",
  },
  {
    leagueId: 3,
    leagueLogo: uelIcon,
    leagueCountry: "World",
    leagueName: "UEFA Europa league",
    logoBg: "#fff",
  },
];
