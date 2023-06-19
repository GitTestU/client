import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { PostLogin } from "../request/postRequest";
import { useState, useEffect } from "react";
import { useStateManage } from "../store/store";
import { Navigate, useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CarRentalIcon from "@mui/icons-material/CarRental";
import Modal from "@mui/material/Modal";
import RegisterAdmin from "../pages/registerAdmin";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import LoginAdmin from "./loginAdmin";
import imageUrl5 from "../component/carImage/background5.png";
import { withStyles } from "@mui/material";
import { styled } from "@mui/system";
import { Player } from "@lottiefiles/react-lottie-player";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

const style = {
  display: "flex",
  alignItems: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 900,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

const CustomTextField = styled(TextField)({
  "& label": {
    color: "white", // Yazı rengini burada kırmızı (red) olarak belirtiyoruz
  },
});

export default function SignInSide() {
  const setLoggedIn = useStateManage((state) => state.setLoggedIn);
  const [alertDialog, setAlertDialog] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openAdmin, setOpenAdmin] = React.useState(false);
  const handleOpenAdmin = () => setOpenAdmin(true);
  const handleCloseAdmin = () => setOpenAdmin(false);
  const navigate = useNavigate();
  const [state, setState] = useState({
    userName: "",
    password: "",
  });

  /* const [backgroundImage, setBackgroundImage] = useState("");
  const [importedImages, setImportedImages] = useState([]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * 9) + 1;
    const imageUrl = eval(`imageUrl${randomIndex}`); // Rastgele URL seçimi

    setBackgroundImage(imageUrl);

    const importedImagesArray = [imageUrl1, imageUrl2, imageUrl3, imageUrl4, imageUrl5, imageUrl6, imageUrl7, imageUrl8, imageUrl9];
    setImportedImages(importedImagesArray[randomIndex]);
  }, []); */

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      setLoggedIn(true);
      navigate("/");
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      userName: state.userName,
      password: state.password,
    };
    try {
      const response = await PostLogin(data);
      console.log(response);
      if (response.token) {
        localStorage.setItem("token", response.token);
        setLoggedIn(true);
        navigate("/");
      } else {
        setAlertDialog(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${imageUrl5})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box style={{ display: "flex", marginTop: "70%", gap: "30px" }}>
            <Button
              type="submit"
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "300px",
                height: "60px",
                boxShadow: 20,
                borderRadius: "20px 20px",
              }}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleOpen}
            >
              <StorefrontIcon />
              <Typography>OPEN RENT ACCOUNT</Typography>
              <CarRentalIcon />
            </Button>
            <Button
              type="submit"
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "300px",
                height: "60px",
                boxShadow: 20,
                borderRadius: "20px 20px",
              }}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleOpenAdmin}
            >
              <AdminPanelSettingsIcon />
              <Typography>Admin Login</Typography>
              <CarRentalIcon />
            </Button>
            <Modal
              open={openAdmin}
              onClose={handleCloseAdmin}
              autoComplete="off"
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <LoginAdmin />
              </Box>
            </Modal>

            <Modal
              open={open}
              onClose={handleClose}
              autoComplete="off"
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <RegisterAdmin />
              </Box>
            </Modal>
          </Box>
        </Grid>
        <Grid
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(to top, #1c1c2e, #087fce)",
          }}
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Player
              src="https://assets6.lottiefiles.com/private_files/lf30_skwgamub.json"
              style={{width:"75%"}}
              loop
              autoplay
            />
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            {alertDialog && (
              <Alert severity="error">Username or password wrong</Alert>
            )}
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <CustomTextField
                style={{ color: "red" }}
                margin="normal"
                required
                fullWidth
                id="username"
                label="User Name"
                name="userName"
                autoComplete="userName"
                autoFocus
                InputProps={{
                  style: { color: "white" }, // Yazı rengini burada kırmızı (red) olarak belirtiyoruz
                }}
                onChange={(e) =>
                  setState({ ...state, userName: e.target.value })
                }
              />
              <CustomTextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                InputProps={{
                  style: { color: "white" }, // Yazı rengini burada kırmızı (red) olarak belirtiyoruz
                }}
                onChange={(e) =>
                  setState({ ...state, password: e.target.value })
                }
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Typography>
                    <Link
                      href="forgot-password"
                      variant="body2"
                      style={{ color: "white" }}
                    >
                      {`Forgot password? `}
                    </Link>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography>
                    <Link
                      href="register"
                      variant="body2"
                      style={{ color: "white" }}
                    >
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
