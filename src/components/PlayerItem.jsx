function PlayerItem({ player }) {
  return (
    <div className="playerCardContainer">
      <div className="playerCardImage self-start mt-3">
        <img src={player.player_face_url} alt="" />
        <button className="btn btn-xs mt-2">
          <a href={player.player_url} target="_blank" rel="noreferrer">
            More
          </a>
        </button>
      </div>
      <div
        className="mt-3"
        style={{
          fontSize: "0.75rem",
          fontWeight: "700",
          boxSizing: "border-box",
          display: "block",
        }}
      >
        <div style={{ fontSize: "0.9rem" }}>
          {player.short_name} ({player.overall})
        </div>
        <div className="flex flex-1 align-items-center gap-1">
          <img
            src={
              player.club_logo_url !== ""
                ? player.club_logo_url
                : "https://wallpaperaccess.com/full/1227835.jpg"
            }
            alt=""
            style={{
              height: "18px",
              width: "18px",
              padding: "2px",
              borderRadius: "2px",
            }}
          />
          <div>
            {player.club_name !== "" ? player.club_name : "No current club"}
          </div>
        </div>
        <div className="flex flex-1 align-items-center gap-1">
          <img
            src={
              player.nation_logo_url !== ""
                ? player.nation_logo_url
                : "https://wallpaperaccess.com/full/1227835.jpg"
            }
            alt=""
            style={{
              height: "18px",
              width: "18px",
              padding: "2px",
              borderRadius: "2px",
            }}
          />
          <div>
            {player.nationality_name !== ""
              ? player.nationality_name
              : "No nationality available"}
          </div>
        </div>
        <div
          className="flex flex-1 align-items-center gap-4 mt-1"
          style={{ color: "#008080" }}
        >
          <div>{player.preferred_foot}</div>
          <div>Age: {player.age}</div>
          <div>H: {player.height_cm}cm</div>
        </div>
      </div>
      <div className="justify-self-end mr-2"></div>
    </div>
  );
}

export default PlayerItem;
