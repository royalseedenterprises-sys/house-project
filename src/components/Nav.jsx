import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Avatar,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemText,
  useMediaQuery
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Blog", path: "/blog" }
  ];

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {/* Logo */}
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            ROYALSEED REAL ESTATE
          </Typography>

          {/* Desktop Menu */}
          {!isMobile &&
            navLinks.map((item) => (
              <Button
                key={item.title}
                color="inherit"
                component={Link}
                to={item.path}
              >
                {item.title}
              </Button>
            ))}

          {/* Mobile Hamburger */}
          {isMobile && (
            <IconButton
              color="inherit"
              edge="end"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* Profile Avatar */}
          <Tooltip title="Profile menu">
            <IconButton onClick={handleOpenUserMenu} sx={{ ml: 2 }}>
              <Avatar alt="User" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>

          <Menu
            anchorEl={anchorElUser}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem component={Link} to="/login" onClick={handleCloseUserMenu}>
              Login
            </MenuItem>
            <MenuItem
              component={Link}
              to="/register"
              onClick={handleCloseUserMenu}
            >
              Register
            </MenuItem>
            <MenuItem component={Link} to="/" onClick={handleCloseUserMenu}>
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
      >
        <Box sx={{ width: 250 }} onClick={handleDrawerToggle}>
          <List>
            {navLinks.map((item) => (
              <ListItem
                button
                key={item.title}
                component={Link}
                to={item.path}
              >
                <ListItemText primary={item.title} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;