function ClubItem({ name, code, country }) {
  return (
    <div className="clubCard">
      <div className="clubCardTeam">
        {name}
        {code !== "" && ` (${code})`}
      </div>
      <div className="clubCardDetails">{country}</div>
    </div>
  );
}

export default ClubItem;
