
import React from "react";
import { useNavigate } from "react-router-dom";
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
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions
} from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Sample house images (replace with yours)
import house1 from  "../assets/house1.jpg";
import house2 from "../assets/house2.jpg";
import house3 from "../assets/house3.jpg";
import house4 from "../assets/house4.jpg";
import Footer from "../components/Footer";

const DashboardPage = () => {
  const navigate = useNavigate();

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  // Simulated logged-in user
  const username = "JohnDoe";

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    handleCloseUserMenu();
    navigate("/"); // Redirect to homepage
  };

  const houses = [
    { image: house1, price: "$250,000" },
    { image: house2, price: "$320,000" },
    { image: house3, price: "$410,000" },
    { image: house4, price: "$500,000" }
  ];

  return (
    <>
      {/* NAVBAR */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>

          <Tooltip title="Profile menu">
            <IconButton onClick={handleOpenUserMenu}>
              <Avatar>{username.charAt(0)}</Avatar>
            </IconButton>
          </Tooltip>

          <Menu
            anchorEl={anchorElUser}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem disabled>{username}</MenuItem>
            <MenuItem onClick={() => navigate("/register")}>
              Register
            </MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {/* DASHBOARD SWIPER */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop
      >
        {[house1, house2, house3].map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Dashboard Slide ${index + 1}`}
              style={{ width: "100%", height: "400px", objectFit: "cover" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* HOUSE CARDS SECTION */}
      <Box sx={{ padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          Available Properties
        </Typography>

        <Grid container spacing={14}>
          {houses.map((house, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={house.image}
                  alt="House"
                />
                <CardContent>
                  <Typography variant="h6">
                    {house.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={() => alert("Purchase feature coming soon")}
                  >
                    Buy Now
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer/>
    </>
  );
};

export default DashboardPage;