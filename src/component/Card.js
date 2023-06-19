import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { getUsers } from "../request/getRequest";
import { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import CarRentalIcon from "@mui/icons-material/CarRental";
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Album() {
  const [allImage, setAllImage] = useState([]);
  const [user, setUser] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    getImage();
    getUser();
  }, []);

  function getUser() {
    fetch("http://localhost:3000/getUser", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  }

  function getImage() {
    fetch("http://localhost:3000/get-image", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setAllImage(data.data);
      });
    console.log(allImage);
  }

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {allImage.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <div className="card-wrapper">
                  <Card class="card">
                    <div class="card__content">
                      <img
                        style={{ borderRadius: "16px 16px 0 0" }}
                        src={card.myFile}
                        width={180}
                      />
                      <CarRentalIcon />
                      <Button
                        style={{ borderRadius: "0 0 16px 16px" }}
                        variant="contained"
                        onClick={handleOpenModal}
                      >
                        Araç Hakkında Detaylı Bilgi
                      </Button>
                    </div>
                  </Card>
                </div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Modal
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        open={modalOpen}
        onClose={handleCloseModal}
      >
        <Box
          sx={{
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography>asdasd</Typography>
        </Box>
      </Modal>
    </ThemeProvider>
  );
}
