import React from "react";
import { Box, Typography } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { TextField } from "@material-ui/core";
import { Grid } from "@mui/material";
import {
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  CardHeader,
  Avatar,
  IconButton,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import _default from "./images/default.jpg";
import { FormControl } from "@mui/material";
import { useState } from "react";
import { useStateManage } from "../../store/store";
import avatar from "./images/default.jpg";
import { PostCar } from "../../request/postRequest";

import axios from "axios";

const url = "http://localhost:3000/upload-image";
const AddCarForm = () => {
  const setBrand = useStateManage((state) => state.setBrand);
  const setModel = useStateManage((state) => state.setModel);
  const setModelYear = useStateManage((state) => state.setModelYear);
  const setRentPrice = useStateManage((state) => state.setRentPrice);
  const setSelectedImage = useStateManage((state) => state.setSelectedImage);
  const brand = useStateManage((state) => state.brand);
  const model = useStateManage((state) => state.model);
  const modelYear = useStateManage((state) => state.modelYear);
  const rentPrice = useStateManage((state) => state.rentPrice);
  const selectedImage = useStateManage((state) => state.selectedImage);

  const defaultImage = _default;


  const [postImage, setPostImage] = useState({ myFile: "" });

  const createPost = async (newImage) => {
    try {
      await axios.post(url, newImage);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    createPost(postImage);
    const data = {
      brand: brand,
      model : model,
      modelYear : modelYear,
      rentPrice : rentPrice
  };
  try {
    const response = await PostCar(data);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
    
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    console.log(base64);
    setPostImage({ ...postImage, myFile: base64 });
  };


  const handleSubmitCar = async (event) => {
    event.preventDefault();
  
  };

  return (
    <div style={{ display: "flex" }}>
      <Box style={{ flex: "1 1 50%", marginLeft: "2%" }}>
        <h1>Add Car Form</h1>
        <Grid item md={12}>
          <TextField
            label="Brand"
            variant="outlined"
            margin="normal"
            required
            name="name"
            id="name"
            style={{ width: "75%" }}
            onChange={(e) => setBrand(e.target.value)}
          />
        </Grid>
        <br />
        <Grid item md={12}>
          <TextField
            label="Model"
            variant="outlined"
            margin="normal"
            required
            name="surname"
            id="surname"
            style={{ width: "75%" }}
            onChange={(e) => setModel(e.target.value)}
          />
        </Grid>
        <br />
        <Grid item md={12}>
          <TextField
            label="Model Year"
            variant="outlined"
            margin="normal"
            required
            name="surname"
            id="surname"
            style={{ width: "75%" }}
            onChange={(e) => setModelYear(e.target.value)}
          />
        </Grid>
        <br />
        <Grid item md={12}>
          <TextField
            label="Rent Price"
            variant="outlined"
            margin="normal"
            required
            name="surname"
            id="surname"
            style={{ width: "75%" }}
            onChange={(e) => setRentPrice(e.target.value)}
          />
        </Grid>
        <br />
        <Grid style={{display:'flex' , alignItems:"center" , justifyContent:"space-between"}} item md={12}>
          <Box>
            <label htmlFor="file-upload" className="custom-file-upload">
              <img src={postImage.myFile || avatar} alt="" />
            </label>

            <input
              type="file"
              lable="Image"
              name="myFile"
              id="file-upload"
              accept=".jpeg, .png, .jpg"
              onChange={(e) => handleFileUpload(e)}
            />
          </Box>
          <Box
            style={{
              display: " flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "50px",
            }}
          >
            <Button
              onClick={handleSubmit}
              variant="contained"
              startIcon={<CloudUploadIcon />}
              style={{ marginLeft: "10px", backgroundColor: "black" }}
            >
              Upload Car
            </Button>
          </Box>
        </Grid>
        <br />
      </Box>

      <Box
        style={{
          flex: "1 1 50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            borderRadius: "30px",
          }}
        >
          <Card style={{ width: "50%", height: "90%" }}>
            <CardHeader
              avatar={<Avatar aria-label="recipe">R</Avatar>}
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={brand ? brand : "Brand"}
              subheader={
                (model ? model : "Model") +
                " " +
                (modelYear ? "  " + " " + modelYear : "Model Year")
              }
            />
            <CardMedia
              component="img"
              height="75%"
              alt="Paella dish"
              image={selectedImage ? selectedImage : defaultImage}
            />
            <CardContent>
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <Typography
                  variant="body1"
                  color="text.secondary"
                  style={{ textSize: "bold" }}
                >
                  {rentPrice ? rentPrice + " ₺ " : "Price " + "₺"}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </div>
  );
};

export default AddCarForm;

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}
