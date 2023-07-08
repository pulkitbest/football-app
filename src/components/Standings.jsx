import { useEffect, useState } from "react";

// Dummy data imports
import {
  standingsData39,
  standingsData140,
  standingsData61,
  standingsData78,
  standingsData135,
} from "../data/dummy/StandingsData";

function Standings({ leagueId, seasonYear }) {
  const [standings, setStandings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStandings = async () => {
      // const res = await fetch(
      //   `https://${process.env.REACT_APP_RAPIDAPI_HOST}/standings?league=${leagueId}&season=${seasonYear}`,
      //   {
      //     method: "GET",
      //     headers: {
      //       "x-rapidapi-host": process.env.REACT_APP_RAPIDAPI_HOST,
      //       "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY,
      //     },
      //   }
      // );
      // const data = await res.json();

      // const standingsCopy = [...data.response[0].league.standings];
      // setStandings(standingsCopy);
      // setLoading(false);

      // To comment
      let data;
      if (leagueId === 39) data = standingsData39;
      else if (leagueId === 135) data = standingsData135;
      else if (leagueId === 61) data = standingsData61;
      else if (leagueId === 78) data = standingsData78;
      else if (leagueId === 140) data = standingsData140;
      else data = standingsData39;
      setTimeout(() => {
        const standingsCopy = [...data.response[0].league.standings];
        setStandings(standingsCopy);
        setLoading(false);
      }, 500);
    };

    fetchStandings();
  }, [leagueId, seasonYear]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="tableDiv">
      {standings.map((standing, index) => (
        <table className="tableElement" key={index}>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Club</th>
              <th>P</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>F/A</th>
              <th>Points</th>
              <th>Form</th>
            </tr>
          </thead>
          <tbody>
            {standing.map((val, index) => (
              <tr key={index}>
                <td>{val.rank}</td>
                <td>{val.team.name}</td>
                <td>{val.all.played}</td>
                <td>{val.all.win}</td>
                <td>{val.all.draw}</td>
                <td>{val.all.lose}</td>
                <td>
                  {val.all.goals.for} / {val.all.goals.against}
                </td>
                <td>{val.points}</td>
                <td>{val.form}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ))}
    </div>
  );
}

export default Standings;
