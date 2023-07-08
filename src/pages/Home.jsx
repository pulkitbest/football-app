import LeagueItem from "../components/LeagueItem";
import { LeagueInfo } from "../data/HomeInfo";

function Home() {
  return (
    <>
      <div className="font-extrabold ml-8 heading">League Stats</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-7 mx-4 text-white">
        {LeagueInfo.map((item) => (
          <LeagueItem key={item.leagueId} data={item} />
        ))}
      </div>
    </>
  );
}

export default Home;
