import { Home, LoginOutlined, LogoutRounded, Star } from "@mui/icons-material";
import ExploreIcon from "@mui/icons-material/Explore";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import * as React from "react";
import { Link } from "react-router-dom";
import { pageLink } from "../../../general/constant";
import { useUserManager } from "../../../general/hook";
import Logo from "../../logo/Logo";
import NavItem from "./NavItem";

export default function NavBar() {
  let { isLoggedIn, userInfo, logout } = useUserManager();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const closePopup = (event) => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <div
        style={{
          backgroundColor: "black",
          marginTop: "-8px",
          marginBottom: "-8px",
        }}
      >
        {isLoggedIn && (
          <>
            <Box
              sx={{
                p: 1,
                textAlign: "center",
                fontSize: "18px",
                border: "1px solid white",
                borderRadius: "10px",
              }}
            >
              {userInfo.email}
            </Box>
          </>
        )}
        <MenuItem onClick={closePopup}>
          <NavItem
            activeOnlyWhenExact={true}
            icon={<Home />}
            to="/"
            label="All University"
          />
        </MenuItem>
        <MenuItem onClick={closePopup}>
          <NavItem icon={<Star />} to={pageLink.myList} label="My List" />
        </MenuItem>
        {!isLoggedIn && (
          <>
            <MenuItem onClick={closePopup}>
              <NavItem
                icon={<LoginOutlined />}
                to={pageLink.login}
                label="Login"
              />
            </MenuItem>
            <MenuItem onClick={closePopup}>
              <NavItem
                icon={<ExploreIcon />}
                to={pageLink.register}
                label="Register"
              />
            </MenuItem>
          </>
        )}
        {isLoggedIn && (
          <>
            <MenuItem
              onClick={closePopup}
              style={{ alignItems: "center", justifyContent: "center" }}
            >
              <Button fullWidth variant="outlined" onClick={() => logout()}>
                Logout <LogoutRounded />
              </Button>
            </MenuItem>
          </>
        )}
      </div>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="background">
        <Toolbar>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Link to={pageLink.index}>
              <Logo />
              {/* <div
                style={{
                  height: 60,
                  width: 70,
                  backgroundSize: "cover",
                  backgroundImage: "url(/logo.png)",
                }}
              ></div> */}
            </Link>
          </Typography>
          <Box
            sx={{
              display: { mobile: "none", tablet: "none", desktop: "flex" },
            }}
          >
            <NavItem
              activeOnlyWhenExact={true}
              icon={<Home />}
              to="/"
              label="All University"
            />
            <NavItem icon={<Star />} to={pageLink.myList} label="My list" />
            {!isLoggedIn && (
              <>
                <NavItem
                  icon={<LoginOutlined />}
                  to={pageLink.login}
                  label="Login"
                />
                <NavItem
                  icon={<ExploreIcon />}
                  to={pageLink.register}
                  label="Register"
                />
              </>
            )}
            {/* <NavItem to={pageLink.gift} label="gift" /> */}
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          {/* <ConnectWalletButton /> */}

          {isLoggedIn && (
            <Box
              sx={{
                display: { mobile: "none", tablet: "none", desktop: "flex" },
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ paddingRight: "5px" }}>{userInfo.email}</div>
              <Button onClick={() => logout()} variant="outlined">
                Logout
              </Button>
            </Box>
          )}
          <Box
            sx={{
              display: { mobile: "flex", tablet: "flex", desktop: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {/* {renderMenu} */}
    </Box>
  );
}
