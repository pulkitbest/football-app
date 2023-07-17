import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { playersInfo } from "../data/PlayersInfo";
import PlayerItem from "../components/PlayerItem";

function Players() {
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [noMatch, setNoMatch] = useState(false);

  const onChange = (e) => {
    setSearchText(e.target.value);
  };

  const onSubmit = async (e) => {
    setLoading(true);
    let results = [];
    playersInfo.map((player) => {
      if (
        player.long_name?.toUpperCase().includes(searchText.toUpperCase()) ||
        player.short_name?.toUpperCase().includes(searchText.toUpperCase())
      ) {
        results.push(player);
      }
      return null;
    });
    setSearchText("");
    if (results.length === 0) {
      setNoMatch(true);
    } else {
      setNoMatch(false);
    }
    setSearchResults(results);
    setLoading(false);
  };

  const onClear = () => {
    setSearchResults([]);
    setSearchText("");
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-items-center mx-5">
      <div className="heading col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-3 xl:col-span-4 underline">
        Search Player
      </div>
      <div className="searchWrapper col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-3 xl:col-span-4 mt-6">
        <input
          type="text"
          className="searchInput"
          placeholder="Player Name..."
          spellCheck="false"
          value={searchText}
          onChange={onChange}
          required
        />
        <button type="submit" className="searchButton" onClick={onSubmit}>
          <FaSearch size="28px" />
        </button>
      </div>

      {loading && (
        <div className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-3 xl:col-span-4 para mt-6">
          Loading..
        </div>
      )}

      {!loading && searchResults.length !== 0 && (
        <div className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-3 xl:col-span-4">
          <button className="btn btn-sm" onClick={onClear}>
            Clear
          </button>
        </div>
      )}

      {noMatch && !loading && (
        <div className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-3 xl:col-span-4 para">
          No matching players found
        </div>
      )}

      {!loading && searchResults.length !== 0 && (
        <div className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-3 xl:col-span-4 para">
          Results (Be specific for accurate results)
        </div>
      )}

      {!loading && searchResults.length !== 0 && (
        <>
          {searchResults.map((player) => (
            <PlayerItem key={player.sofifa_id} player={player} />
          ))}
        </>
      )}
    </div>
  );
}

export default Players;
