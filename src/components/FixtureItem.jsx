function FixtureItem({ date, matchday, team1, team2, score1, score2 }) {
  return (
    <div className="fixtureCard grid grid-cols-3 justify-items-stretch">
      <div className="fixtureCardDetails justify-self-start">{matchday}</div>
      <div className="fixtureCardDetails col-start-3 justify-self-end">
        {date}
      </div>
      <div className="fixtureCardTeam justify-self-start col-span-2">
        {team1}
      </div>
      <div className="fixtureCardScore justify-self-end">{score1}</div>
      <div className="fixtureCardTeam justify-self-start col-span-2">
        {team2}
      </div>
      <div className="fixtureCardScore justify-self-end">{score2}</div>
    </div>
  );
}

export default FixtureItem;
