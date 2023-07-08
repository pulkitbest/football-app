import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Standings from "../components/Standings.jsx";
import TopScorers from "../components/TopScorers.jsx";
import TopAssists from "../components/TopAssists.jsx";

// Dummy data imports
import {
  leagueData39,
  leagueData140,
  leagueData135,
  leagueData61,
  leagueData78,
} from "../data/dummy/LeagueData.js";

function League() {
  const [loading, setLoading] = useState(true);
  const [leagueInfo, setLeagueInfo] = useState({
    id: "",
    logo: "",
    name: "",
    country: "",
    countryFlag: "",
    seasons: [],
  });
  const [season, setSeason] = useState(null);
  const [category, setCategory] = useState(0);

  const params = useParams();

  useEffect(() => {
    const fetchSeasons = async () => {
      // const res = await fetch(
      //   `https://${process.env.REACT_APP_RAPIDAPI_HOST}/leagues?id=${params.leagueId}`,
      //   {
      //     method: "GET",
      //     headers: {
      //       "x-rapidapi-host": process.env.REACT_APP_RAPIDAPI_HOST,
      //       "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY,
      //     },
      //   }
      // );

      // const data = await res.json();
      // const leagueInfoCopy = {
      //   id: data.response[0].league.id,
      //   logo: data.response[0].league.logo,
      //   name: data.response[0].league.name,
      //   country: data.response[0].country.name,
      //   countryFlag: data.response[0].country.flag,
      //   seasons: data.response[0].seasons,
      // };
      // setLeagueInfo((prevState) => ({
      //   ...prevState,
      //   ...leagueInfoCopy,
      // }));
      // setLoading(false);

      // To comment
      let data;
      if (params.leagueId === "39") data = leagueData39;
      else if (params.leagueId === "135") data = leagueData135;
      else if (params.leagueId === "61") data = leagueData61;
      else if (params.leagueId === "78") data = leagueData78;
      else if (params.leagueId === "140") data = leagueData140;
      else data = leagueData39;

      setTimeout(() => {
        const leagueInfoCopy = {
          id: data.response[0].league.id,
          logo: data.response[0].league.logo,
          name: data.response[0].league.name,
          country: data.response[0].country.name,
          countryFlag: data.response[0].country.flag,
          seasons: data.response[0].seasons,
        };
        setLeagueInfo((prevState) => ({
          ...prevState,
          ...leagueInfoCopy,
        }));
        setLoading(false);
      }, 500);
    };

    fetchSeasons();
  }, [params.leagueId]);

  const onSeasonButton = (year) => setSeason(year);
  const onCategoryButton = (id) => setCategory(id);

  const btn1 = "btn btn-xs btn-outline";
  const btn1Active = btn1 + "btn-active";
  const btn2 = "btn btn-sm btn-outline";
  const btn2Active = btn2 + "btn-active";

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-start">Loading...</div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-start gap-2">
      <div className="logo">
        <img src={leagueInfo.logo} alt="logo" />
      </div>
      <div className="heading">{leagueInfo.name}</div>
      <div className="smallHeading">{leagueInfo.country}</div>
      <div className="para">Choose a season</div>
      <div className="btn-group mx-5">
        {leagueInfo.seasons.map((item) => (
          <button
            key={item.year}
            className={season === item.year ? btn1Active : btn1}
            onClick={() => onSeasonButton(item.year)}
          >
            {item.year}
          </button>
        ))}
      </div>
      {season && (
        <div className="btn-group mx-5">
          <button
            className={category === 1 ? btn2Active : btn2}
            onClick={() => onCategoryButton(1)}
          >
            Table
          </button>
          <button
            className={category === 2 ? btn2Active : btn2}
            onClick={() => onCategoryButton(2)}
          >
            Goals
          </button>
          <button
            className={category === 3 ? btn2Active : btn2}
            onClick={() => onCategoryButton(3)}
          >
            Assists
          </button>
        </div>
      )}
      <div className="para">dummy data will be displayed (2020-21)</div>
      {season && category === 1 && (
        <Standings leagueId={leagueInfo.id} seasonYear={season} />
      )}
      {season && category === 2 && (
        <TopScorers leagueId={leagueInfo.id} seasonYear={season} />
      )}
      {season && category === 3 && (
        <TopAssists leagueId={leagueInfo.id} seasonYear={season} />
      )}
    </div>
  );
}

export default League;
