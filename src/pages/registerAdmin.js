import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CarRentalRoundedIcon from "@mui/icons-material/CarRentalRounded";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import {PostSingUpAdmin} from "../request/postRequest";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
  const [adminInfo, setAdminInfo] = useState({
    companyName: "",
    email: "",
    phoneNumber: "",
    serviceArea: "",
    userName: "",
    password: "",
    Address: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      companyName: adminInfo.companyName,
      email: adminInfo.email,
      phoneNumber: adminInfo.phoneNumber,
      serviceArea : adminInfo.serviceArea,
      userName: adminInfo.userName,
      password: adminInfo.password,
      Address : adminInfo.Address
    };
    try {
      const response = await PostSingUpAdmin(data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <CarRentalRoundedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create Rent Account
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="off"
                  name="companyName"
                  required
                  fullWidth
                  id="companyName"
                  label="Company Name"
                  autoFocus
                  onChange={(e) =>
                    setAdminInfo({ ...adminInfo, companyName: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="off"
                  name="email"
                  required
                  fullWidth
                  id="email"
                  label="E-mail Address"
                  autoFocus
                  onChange={(e) =>
                    setAdminInfo({ ...adminInfo, email: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="off"
                  name="phoneNumber"
                  required
                  fullWidth
                  id="phoneNumber"
                  label="Phone Number"
                  autoFocus
                  onChange={(e) =>
                    setAdminInfo({ ...adminInfo, phoneNumber: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="serviceArea"
                  label="Service Area"
                  name="serviceArea"
                  autoComplete="off"
                  onChange={(e) =>
                    setAdminInfo({ ...adminInfo, serviceArea: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="off"
                  name="userName"
                  required
                  fullWidth
                  id="userName"
                  label="User Name"
                  autoFocus
                  onChange={(e) =>
                    setAdminInfo({ ...adminInfo, userName: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) =>
                    setAdminInfo({ ...adminInfo, password: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="address"
                  label="Address"
                  name="address"
                  autoComplete="off"
                  onChange={(e) =>
                    setAdminInfo({ ...adminInfo, Address: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
