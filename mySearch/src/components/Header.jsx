import React, { useCallback, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { MusicProvider } from "../context/MusicContext";
import { useNavigate } from "react-router-dom";
import SearchPortal from "./SearchPortal";
import { use } from "react";

const myDebounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

const Header = () => {
  const {
    searchValue,
    setSearchValue,
    showSearchPortal,
    setShowSeachPortal,
    user,
    setUser,
  } = useContext(MusicProvider);
  // console.log(user.username);

  const navigate = useNavigate();

  const handleDebounce = useCallback(
    myDebounce((value) => {
      setSearchValue(value);
    }, 1000),
    [setSearchValue]
  );

  useEffect(() => {
    if (searchValue) {
      setShowSeachPortal(true);
    } else if (searchValue.length === 0) {
      setShowSeachPortal(false);
    }
  }, [searchValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("name");
    sessionStorage.setItem("loginStatus", JSON.stringify(false));
    setUser({username:null,loginStatus:false})
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          MusicApp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <form className="d-flex" onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              id="search-bar"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => handleDebounce(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
            {showSearchPortal && <SearchPortal />}
          </form>
        </div>
        {user.loginStatus ? (
          <div style={{ marginLeft: "10px" }}>
            {user.username}{" "}
            <button className="btn btn-secondary" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div style={{ marginLeft: "10px" }}>
            <Link to="/login">Login</Link> | <Link to="/signup">SignUp</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
