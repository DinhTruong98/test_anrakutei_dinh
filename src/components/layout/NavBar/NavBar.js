import { Home, Star } from "@mui/icons-material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ExploreIcon from "@mui/icons-material/Explore";
import MenuIcon from "@mui/icons-material/Menu";
import StoreSharpIcon from "@mui/icons-material/StoreSharp";
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
import Logo from "../../logo/Logo";
import NavItem from "./NavItem";

export default function NavBar() {
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

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

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
      // style={{ backgroundColor: "black" }}
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
        <MenuItem onClick={closePopup}>
          <NavItem
            activeOnlyWhenExact={true}
            icon={<Home />}
            to="/"
            label="All University"
          />
        </MenuItem>
        <MenuItem onClick={closePopup}>
          <NavItem
            icon={<Star />}
            to={pageLink.myList}
            label="My List"
          />
        </MenuItem>
        <MenuItem onClick={closePopup}>
          <NavItem icon={<ExploreIcon />} to={pageLink.login} label="Login" />
        </MenuItem>
        <MenuItem onClick={closePopup}>
          <NavItem
            icon={<ExploreIcon />}
            to={pageLink.register}
            label="Register"
          />
        </MenuItem>
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
            <NavItem
              icon={<Star />}
              to={pageLink.myList}
              label="My list"
            />
            <NavItem icon={<ExploreIcon />} to={pageLink.login} label="Login" />
            <NavItem
              icon={<ExploreIcon />}
              to={pageLink.register}
              label="Register"
            />
            {/* <NavItem to={pageLink.gift} label="gift" /> */}
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          {/* <ConnectWalletButton /> */}

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
