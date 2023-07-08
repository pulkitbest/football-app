import { useEffect, useState } from "react";

// Dummy data imports
import {
  topScorersData39,
  topScorersData135,
  topScorersData140,
  topScorersData61,
  topScorersData78,
} from "../data/dummy/TopScorersData";

function TopScorers({ leagueId, seasonYear }) {
  const [topScorers, setTopScorers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopScorers = async () => {
      // const res = await fetch(
      //   `https://${process.env.REACT_APP_RAPIDAPI_HOST}/players/topscorers?league=${leagueId}&season=${seasonYear}`,
      //   {
      //     method: "GET",
      //     headers: {
      //       "x-rapidapi-host": process.env.REACT_APP_RAPIDAPI_HOST,
      //       "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY,
      //     },
      //   }
      // );
      // const data = await res.json();

      // const topScorersCopy = [...data.response];
      // setTopScorers(topScorersCopy);
      // setLoading(false);

      // To comment
      let data;
      if (leagueId === 39) data = topScorersData39;
      else if (leagueId === 135) data = topScorersData135;
      else if (leagueId === 61) data = topScorersData61;
      else if (leagueId === 78) data = topScorersData78;
      else if (leagueId === 140) data = topScorersData140;
      else data = topScorersData39;
      setTimeout(() => {
        const topScorersCopy = [...data.response];
        setTopScorers(topScorersCopy);
        setLoading(false);
      }, 500);
    };

    fetchTopScorers();
  }, [leagueId, seasonYear]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="tableDiv">
      <table className="tableElement">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Club</th>
            <th>Goals</th>
          </tr>
        </thead>
        <tbody>
          {topScorers.map((val, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{val.player.name}</td>
              <td>{val.statistics[0].team.name}</td>
              <td>
                {val.statistics[0].goals.total}(
                {val.statistics[0].penalty.scored})
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TopScorers;
