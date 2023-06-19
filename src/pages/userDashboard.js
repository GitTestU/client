import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
//import ForumIcon from '@material-ui/icons/Forum';

import Logout from "../component/dashboard/Logout";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStateManage, useStateUser } from "../store/store";
import Card from "../component/Card";
//import { RefreshToken } from "../requests/postRequests";
import MenuBar from "./menubar";
import Contact from "../component/Contact";

const AppBar = styled(
  MuiAppBar,
  {}
)(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: "#f5f5f5",
  position: "fixed",
  top: "0",
}));

function DashboardContent() {
  const setLoggedIn = useStateManage((state) => state.setLoggedIn);

  const [alertDialog, setAlertDialog] = useState();

  const navigate = useNavigate();

  /*   useEffect(() => {
    let token = localStorage.getItem("token");
    let tokenExpire = localStorage.getItem("expires");
    let refreshToken = localStorage.getItem("refreshToken");
    let refreshTokenExpires = l ocalStorage.getItem("refreshTokenExpires");

    tokenExpire = new Date(tokenExpire);
    refreshTokenExpires = new Date(refreshTokenExpires);

    let now = new Date();

    if (tokenExpire.getTime() < now.getTime() && token) {
      if (refreshTokenExpires.getTime() > now.getTime()) {
        const newTokenCreds = RefreshToken(refreshToken)
          .then((data) => {
            console.log(typeof data.access_token);
            localStorage.setItem("token", data.access_token);
            localStorage.setItem("expires", data.token_expires);
            localStorage.setItem("refreshToken", data.refresh_token);
          })
          .catch((err) => {
            console.error("err", err);
          });
      } else {
        localStorage.clear();
        setLoggedIn(false);
        navigate("/");
      }
    }
  }, []); */

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CssBaseline />
        <AppBar position="absolute">
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <Typography
              component="h1"
              variant="h6"
              color="#D9D9D9"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              User Dashboard
            </Typography>
            <IconButton color="inherit">
              <Logout />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>

      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",

          top: "10%",
          left: "10%",
          // transform: "translate(-50%, -50%)",
        }}
      >
        <MenuBar />
        <Card />
        <Contact />
      </Box>
    </>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
