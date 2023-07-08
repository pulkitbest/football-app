import { useState, useEffect } from "react";
import ClubItem from "../components/ClubItem";

function Clubs() {
  const [clubList, setClubList] = useState(null);
  const [league, setLeague] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchClubList = async () => {
      setLoading(true);
      const response = await fetch(
        `https://raw.githubusercontent.com/openfootball/football.json/master/2020-21/${league}.1.clubs.json`
      );
      const data = await response.json();
      setClubList(data);
      setLoading(false);
    };

    if (league) {
      fetchClubList();
    }
  }, [league]);

  const onLeagueButton = (code) => setLeague(code);

  const btn1 = "btn btn-xs btn-outline";
  const btn1Active = btn1 + "btn-active";
  const leagues = [
    {
      lg: "EPL",
      code: "en",
    },
    {
      lg: "Ligue 1",
      code: "fr",
    },
    {
      lg: "Laliga",
      code: "es",
    },
    {
      lg: "Serie A",
      code: "it",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-1 justify-items-center mx-5">
      <div className="heading col-span-3 underline">Clubs List</div>
      <div className="para col-span-3">Latest clubs list will be displayed</div>
      <div className="smallHeading col-span-3">Choose a league</div>
      <div className="col-span-3">
        {leagues.map((value, index) => (
          <button
            key={index}
            onClick={() => onLeagueButton(value.code)}
            className={league === value.code ? btn1Active : btn1}
          >
            {value.lg}
          </button>
        ))}
      </div>

      {loading && <div className="col-span-3 mt-5">Loading...</div>}

      {!loading && league && clubList && (
        <div className="para col-span-3 mt-5 mb-5">{clubList.name}</div>
      )}

      {!loading && league && clubList && (
        <>
          {clubList.clubs.map((club, index) => (
            <div
              key={index}
              className={
                index % 3 === 0
                  ? "justify-self-end"
                  : index % 3 === 2
                  ? "justify-self-start"
                  : "justify-self-center"
              }
            >
              <ClubItem
                name={club.name}
                code={club.code}
                country={club.country}
              />
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default Clubs;
