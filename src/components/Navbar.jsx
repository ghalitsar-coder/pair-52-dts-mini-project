import React, { useEffect, useState } from "react";
import { Logo } from "../assets/images";
import { Search, CardGiftcard, Notifications } from "@mui/icons-material";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { authLogout } from "../redux/userRedux";
import { FETCH_BY_SEARCH } from "../api/apiCalls";

const PaperProps = {
  elevation: 0,
  sx: {
    overflow: "visible",
    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
    mt: 1.5,
    "& .MuiAvatar-root": {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
    },
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      bgcolor: "background.paper",
      transform: "translateY(-50%) rotate(45deg)",
      zIndex: 0,
    },
  },
};

const Navbar = () => {
  const { authData: user } = useSelector(
    (state) => state.persistedReducer.user
  );
  const [startSearch, setStartSearch] = useState(false);
  const [movieTitle, setMovieTitle] = useState("");
  const navigate = useNavigate();
  const listItems = ["Home", "About", "Feature", "Something", "Service"];
  const rightListItems = [
    user?.displayName,
    <CardGiftcard />,
    <Notifications />,
  ];

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSearch = () => {
    navigate("/movies/search?searchQuery=" + movieTitle);
  };
  const dispatch = useDispatch();
  const location = useLocation();
  const handleLogout = (e) => {
    e.preventDefault();
    setAnchorEl(null);
    signOut(auth)
      .then(() => {
        dispatch(authLogout());
        navigate("/auth");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // useEffect(() => {
  //   const {}
  // }, []);
  return (
    <nav className="p-4 md:py-5 md:px-16 bg-blackMovie flex items-center justify-between">
      <div className="flex-1 flex items-center gap-x-2 justify-between">
        <div className="flex-1">
          <div className="w-10 h-10 ">
            <Link to="/">
              <img
                src={Logo}
                alt="movie logo"
                className="h-full w-full object-cover"
              />
            </Link>
          </div>
        </div>
        <ul className="gap-x-3 hidden md:flex text-sm flex-1">
          {listItems.map((item) => (
            <li key={item} className="text-whiteSmoke cursor-pointer">
              <Link to={`/${item === "Home" ? "" : item}`}>{item}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-1 flex justify-end ">
        {user !== null ? (
          <>
            <ul className="md:flex items-center hidden  text-whiteSmoke text-sm gap-x-5">
              <div
                className={`flex items-center rounded-md shadow-md ${
                  startSearch && "border border-midGray"
                } p-1 `}
              >
                {startSearch && (
                  <input
                    type="text"
                    className="p-1 rounded-md shadow-md  focus:outline-none bg-transparent"
                    value={movieTitle}
                    name="movieTitle"
                    onChange={(e) => setMovieTitle(e.target.value)}
                  />
                )}
                <li
                  onClick={() => {
                    if (movieTitle.length === 0) {
                      return setStartSearch((prev) => !prev);
                    } else {
                      return handleSearch();
                    }
                  }}
                >
                  <Search className="cursor-pointer" />
                </li>
              </div>

              {rightListItems.map((item, idx) => (
                <li
                  key={idx}
                  className={`text-sm ${
                    startSearch ? "hidden" : "block"
                  } transition`}
                >
                  {item}
                </li>
              ))}
              <Avatar
                onClick={handleClick}
                variant="rounded"
                src={user.photoURL}
                sx={{ width: 24, height: 24, cursor: "pointer" }}
              />
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                PaperProps={PaperProps}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </ul>
            <div
              className={`md:hidden flex items-center rounded-md shadow-md border border-midGray
              p-1 `}
            >
              <input
                type="text"
                className="p-1 rounded-md shadow-md  focus:outline-none bg-transparent "
                value={movieTitle}
                name="movieTitle"
                onChange={(e) => setMovieTitle(e.target.value)}
              />
              <span
                className="text-redMovie "
                onClick={() => {
                  if (movieTitle.length === 0) {
                    return setStartSearch((prev) => !prev);
                  } else {
                    return handleSearch();
                  }
                }}
              >
                <Search />
              </span>
            </div>
          </>
        ) : (
          location.pathname !== "/auth" && (
            <>
              <button
                className="px-4 py-2 rounded-md shadow-md text-white bg-redMovie font-semibold hover:bg-black hover:text-redMovie transition"
                onClick={() => navigate("/auth")}
              >
                Login
              </button>
            </>
          )
        )}
      </div>
    </nav>
  );
};

export default Navbar;
