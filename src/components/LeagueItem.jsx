import { useNavigate } from "react-router-dom";

function LeagueItem({ data }) {
  const { leagueId, leagueLogo, leagueName, leagueCountry, logoBg } = data;

  const navigate = useNavigate();

  return (
    <div
      className="leagueCard"
      style={{ cursor: "pointer" }}
      onClick={() => navigate(`/league/${leagueId}`)}
    >
      <div className="leagueCardPhoto" style={{ backgroundColor: logoBg }}>
        <img src={leagueLogo} alt={leagueId} />
      </div>
      <div className="leagueCardContent">
        <div className="leagueCardContentText">
          <h3>{leagueName}</h3>
          <h6>{leagueCountry}</h6>
        </div>
      </div>
    </div>
  );
}

export default LeagueItem;
