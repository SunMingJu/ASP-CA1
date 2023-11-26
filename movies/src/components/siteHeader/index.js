import React, { useState, lazy, Suspense } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { logout, auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
const Spinner = lazy(() => import("../spinner"));

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const SiteHeader = ({ history }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [user, error, isLoading, isError] = useAuthState(auth);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  
  const navigate = useNavigate();

  const menuOptions = [
    { label: "Home", path: "/" },
    { label: "Favorites", path: "/movies/favorites" },
    { label: "Upcoming", path: "/movies/upcoming" },
    { label: "Now Playing", path: "/movies/now_playing" },
    { label: "Popular", path: "/movies/popular" },
    { label: "TV", path: "/tv/top_rated" },
    { label: "People", path: "/person" },
    { label: "Log in", path: "/login" },
  ];

  const moviesOptions  = [
    { label: "Favorites", path: "/movies/favorites" },
    { label: "Upcoming", path: "/movies/upcoming" },
    { label: "Now Playing", path: "/movies/now_playing" },
    { label: "Popular", path: "/movies/popular" },
    { label: "TV", path: "/tv/top_rated" },
  ];


  const handleMenuSelect = (pageURL) => {
    if (pageURL === "/login"){
      logout()
    }
    navigate(pageURL, { replace: true });
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  if (isLoading) {
    return <Suspense fallback={<h1>Loading Componment</h1>}>{<Spinner />}</Suspense>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      <AppBar position="fixed" color="secondary">
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            TMDB Client
          </Typography>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            All you ever wanted to know about Movies!
          </Typography>
            {isMobile ? (
              <>
                <IconButton
                  aria-label="menu"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={() => setAnchorEl(null)}
                >
                  {menuOptions.map((opt) => (
                    <MenuItem
                      key={opt.label}
                      onClick={() => handleMenuSelect(opt.path)}
                    >
                      {opt.label}
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              <>
                <div>
                  <Button 
                    key="Home"
                    color="inherit" onClick={() => handleMenuSelect("/")}
                    >
                      Home
                  </Button>
                  <Button
                    aria-label="menu-movie"
                    aria-controls="movies-menu"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  > Movies
                  </Button>
                  <Menu
                    id="movies-menu"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={open}
                    onClose={() => setAnchorEl(null)}
                  >
                  {moviesOptions.map((opt) => (
                    <MenuItem
                      key={opt.label}
                      onClick={() => handleMenuSelect(opt.path)}
                    >
                      {opt.label}
                    </MenuItem>
                  ))}
                  </Menu>
                  <Button 
                    key="People"
                    color="inherit" onClick={() => handleMenuSelect("/person")}
                    >
                      People
                  </Button>
                  { (user)? 
                      <>
                        Welcome! {user.email} 
                        <Button 
                        key="Log out"
                        color="inherit" onClick={() => handleMenuSelect("/login")}
                        >
                          Log out
                        </Button>
                      </>
                      :
                      <Button 
                      key="Log in"
                      color="inherit" onClick={() => handleMenuSelect("/login")}
                      >
                        Log in
                      </Button>
                   }
                </div>
              </>
            )}
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default SiteHeader;