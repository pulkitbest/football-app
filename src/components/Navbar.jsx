import { Link, useLocation } from "react-router-dom";
import appIcon from "../assets/appIcon.png";
import fixtureIcon from "../assets/fixtureIcon.png";
import clubIcon from "../assets/clubIcon.png";
import playersIcon from "../assets/playersIcon.png";
import homeIcon from "../assets/homeIcon.png";

function Header() {
  const location = useLocation();

  const pathMatchRoute = (route) => {
    return route === location.pathname;
  };

  const btn = "btn btn-ghost btn-sm rounded-btn shrink";
  const btnActive = "btn btn-active btn-sm rounded-btn shrink";

  return (
    <div className="navbar mb-2 shadow-lg drop-shadow-xl bg-neutral text-neutral-content">
      <div className="flex-none mr-1">
        {/* Enable sidebar opening for the app Icon */}
        <Link to="/">
        <img
          src={appIcon}
          alt="appIcon"
          height="28px"
          width="28px"
          className="flex-none"
        />
        </Link>
      </div>
      <div className="flex-auto px-1 mr-1 justify-end">
        <div className="flex">
          <Link to="/" className={pathMatchRoute("/") ? btnActive : btn}>
            <img src={homeIcon} alt="" className="h-4 w-4" />
            Home
          </Link>
          <Link
            to="/fixtures"
            className={pathMatchRoute("/fixtures") ? btnActive : btn}
          >
            <img src={fixtureIcon} alt="" className="h-4 w-4" />
            Fixtures
          </Link>
          <Link
            to="/clubs"
            className={pathMatchRoute("/clubs") ? btnActive : btn}
          >
            <img src={clubIcon} alt="" className="h-4 w-4" />
            Clubs
          </Link>
          <Link
            to="/players"
            className={pathMatchRoute("/players") ? btnActive : btn}
          >
            <img src={playersIcon} alt="" className="h-4 w-4" />
            Players
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
