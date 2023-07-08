import { useEffect, useState } from "react";

// Dummy data imports
import {
  topAssistsData39,
  topAssistsData140,
  topAssistsData135,
  topAssistsData61,
  topAssistsData78,
} from "../data/dummy/TopAssistsData";

function TopAssists({ leagueId, seasonYear }) {
  const [topAssists, setTopAssists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopAssists = async () => {
      // const res = await fetch(
      //   `https://${process.env.REACT_APP_RAPIDAPI_HOST}/players/topassists?league=${leagueId}&season=${seasonYear}`,
      //   {
      //     method: "GET",
      //     headers: {
      //       "x-rapidapi-host": process.env.REACT_APP_RAPIDAPI_HOST,
      //       "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY,
      //     },
      //   }
      // );
      // const data = await res.json();

      // const topAssistsCopy = [...data.response];
      // setTopAssists(topAssistsCopy);
      // setLoading(false);

      // To comment
      let data;
      if (leagueId === 39) data = topAssistsData39;
      else if (leagueId === 135) data = topAssistsData135;
      else if (leagueId === 61) data = topAssistsData61;
      else if (leagueId === 78) data = topAssistsData78;
      else if (leagueId === 140) data = topAssistsData140;
      else data = topAssistsData39;
      setTimeout(() => {
        const topAssistsCopy = [...data.response];
        setTopAssists(topAssistsCopy);
        setLoading(false);
      }, 500);
    };

    fetchTopAssists();
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
            <th>Assists</th>
          </tr>
        </thead>
        <tbody>
          {topAssists.map((val, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{val.player.name}</td>
              <td>{val.statistics[0].team.name}</td>
              <td>{val.statistics[0].goals.assists}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TopAssists;
