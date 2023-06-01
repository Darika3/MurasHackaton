import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/image/logo.svg";
import searchIcon from "../../assets/image/searchIcon.png";
import favoriteIcon from "../../assets/image/favoritesIcon.svg";
import shopIcon from "../../assets/image/shopIcon.svg";
import profileIcon from "../../assets/image/profileIcon.svg";
import logIcon from "../../assets/image/logicon.png";
import burgerMenu from "../../assets/image/burgerMenu.png";
import "../Navbar/Navbar.css";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import HomeIcon from "@mui/icons-material/Home";
import TerrainIcon from "@mui/icons-material/Terrain";
import MailIcon from "@mui/icons-material/Mail";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { useAuth } from "../../context/AuthContextProvider";

const pages = [
  { name: "Home", link: "/", id: 1 },
  { name: "Our Culture", link: "/culture", id: 2 },
  { name: "Products", link: "/products", id: 3 },
  { name: "Tours", link: "/tours", id: 4 },
  { name: "Admin", link: "/admin", id: 5 },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const { handleLogout, currentUser, checkAuth, user } = useAuth();

  useEffect(() => {
    if (localStorage.getItem("tokens")) {
    }
  }, []);

  const handleMouseOpen = () => {
    setOpenModal(true);
  };
  const handleMouseClose = () => {
    setOpenModal(false);
  };

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const anchor = "right";
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 210 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          { title: "Home", link: "/" },
          { title: "Our Culture", link: "/culture" },
          { title: "Products", link: "/products" },
          { title: "Tours", link: "/products" },
          { title: "Admin", link: "/admin" },
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon></ListItemIcon>
              <ListItemText
                primary={text.title}
                onClick={() => navigate(`${text.link}`)}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List sx={{ width: "90%", display: "flex" }}>
        <ListItem sx={{ display: "flex", justifyContent: "space-around" }}>
          <BookmarkBorderIcon />
          <AddShoppingCartIcon onClick={() => navigate("/cart")} />
          <PersonIcon />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <div className="nav-container">
        <div className="item-logo">
          <img onClick={() => navigate("/main")} src={logo} />
        </div>
        <div className="item-menu">
          {pages.map((item) => (
            <h5 onClick={() => navigate(`${item.link}`)} key={item.id}>
              {item.name}
            </h5>
          ))}
        </div>
        <div className="item-search">
          <img src={searchIcon} alt="searchIcon" />
          <input type="text" />
        </div>
        <div className="item-icons">
          <img src={favoriteIcon} alt="favoriteIcon" />
          <img
            onClick={() => navigate("/cart")}
            src={shopIcon}
            alt="shopIcon"
          />
          {currentUser ? (
            <img
              onMouseMove={handleMouseOpen}
              onClick={handleMouseClose}
              src={logIcon}
              alt="favoriteIcon"
            />
          ) : (
            <img
              onMouseMove={handleMouseOpen}
              onClick={handleMouseClose}
              src={profileIcon}
              alt="favoriteIcon"
            />
          )}
        </div>
      </div>
      {openModal && (
        <div className="modal-profile">
          <p onClick={() => navigate("/register")}>Register</p>
          <p onClick={() => navigate("/login")}>Login</p>
          <p onClick={handleLogout}>Logout</p>
          <hr></hr>
          {currentUser ? currentUser : null}
        </div>
      )}
      <div>
        <React.Fragment key={anchor}>
          <img
            onClick={toggleDrawer(anchor, true)}
            id="burger"
            src={burgerMenu}
            alt="burgerMenu"
          />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      </div>
    </div>
  );
};

export default Navbar;
