import FixtureItem from "../components/FixtureItem";
import { useState, useEffect } from "react";

function Fixtures() {
  const [fixtures, setFixtures] = useState(null);
  const [displayedFixtures, setDisplayedFixtures] = useState(null);
  const [currentCount, setCurrentCount] = useState(0);
  const [season, setSeason] = useState(null);
  const [league, setLeague] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFixtures = async () => {
      setLoading(true);
      const response = await fetch(
        `https://raw.githubusercontent.com/openfootball/football.json/master/${season}-${
          (season % 100) + 1
        }/${league}.1.json`
      );
      const data = await response.json();
      setFixtures(data);
      setDisplayedFixtures({
        rounds: [data.rounds[0]],
      });
      setCurrentCount(1);
      setLoading(false);
    };

    if (season && league) {
      fetchFixtures();
    }
  }, [season, league]);

  const onSeasonButton = (year) => setSeason(year);
  const onLeagueButton = (code) => setLeague(code);
  const onLoadMoreButton = () => {
    setDisplayedFixtures((prevState) => ({
      rounds: [...prevState.rounds, fixtures.rounds[currentCount]],
    }));
    setCurrentCount((prevState) => prevState + 1);
  };

  const btn1 = "btn btn-xs btn-outline";
  const btn1Active = btn1 + "btn-active";
  const seasons = [2014, 2015, 2016, 2017];
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
    <div className="grid grid-cols-2 gap-1 justify-items-center mx-5">
      <div className="heading col-span-2 underline">Fixtures</div>
      <div className="smallHeading col-span-2">Choose a league</div>
      <div className="col-span-2">
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
      <div className="smallHeading col-span-2">Choose a season</div>
      <div className="col-span-2">
        {seasons.map((value, index) => (
          <button
            key={index}
            onClick={() => onSeasonButton(value)}
            className={season === value ? btn1Active : btn1}
          >
            {value}
          </button>
        ))}
      </div>

      {loading && <div className="col-span-2 mt-5">Loading...</div>}

      {!loading && season && league && fixtures && (
        <div className="para col-span-2 mt-5 mb-5">{fixtures.name}</div>
      )}
      {!loading && season && league && displayedFixtures && (
        <>
          {displayedFixtures.rounds.map((round) =>
            round.matches.map((match, index) => (
              <div
                key={index}
                className={
                  index % 2 === 0 ? "justify-self-end" : "justify-self-start"
                }
              >
                <FixtureItem
                  date={match.date}
                  matchday={round.name}
                  team1={match.team1}
                  team2={match.team2}
                  score1={match.score.ft[0]}
                  score2={match.score.ft[1]}
                />
              </div>
            ))
          )}
        </>
      )}
      {!loading &&
        season &&
        league &&
        displayedFixtures &&
        currentCount < fixtures.rounds.length && (
          <div className="col-span-2">
            <button className={btn1} onClick={onLoadMoreButton}>
              Load more...
            </button>
          </div>
        )}
    </div>
  );
}

export default Fixtures;
