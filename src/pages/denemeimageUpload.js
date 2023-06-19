import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const DenemeimageUpload = () => {
  const [deneme, setDeneme] = useState({
    brand: "",
    model: "",
    modelYear : "",
    rentPrice :"",
    testImage: null,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("brand", deneme.brand);
    formData.append("model", deneme.model);
    formData.append("modelYear", deneme.modelYear);
    formData.append("rentPrice", deneme.rentPrice);
    formData.append("testImage", deneme.testImage);

    try {
      const response = await fetch("http://localhost:3000/upload", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        console.log("Image uploaded successfully");
      } else {
        console.log("Failed to upload image");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileChange = (event) => {
    setDeneme({ ...deneme, testImage: event.target.files[0] });
  };

  return (
    <div>
      <TextField
        type="text"
        variant="outlined"
        margin="normal"
        required
        label="brand"
        name="name"
        id="name"
        style={{ width: "75%" }}
        onChange={(e) => setDeneme({ ...deneme, brand: e.target.value })}
      />
      <TextField
        type="text"
        variant="outlined"
        margin="normal"
        required
        label="model"
        name="name"
        id="name"
        style={{ width: "75%" }}
        onChange={(e) => setDeneme({ ...deneme, model: e.target.value })}
      />
      <TextField
        type="text"
        variant="outlined"
        margin="normal"
        required
        label="modelYear"
        name="name"
        id="name"
        style={{ width: "75%" }}
        onChange={(e) => setDeneme({ ...deneme, modelYear: e.target.value })}
      />
      <TextField
        type="text"
        variant="outlined"
        margin="normal"
        required
        label="rentPrice"
        name="name"
        id="name"
        style={{ width: "75%" }}
        onChange={(e) => setDeneme({ ...deneme, rentPrice: e.target.value })}
      />
      <input
        type="file"
        required
        name="testImage"
        id="testImage"
        style={{ width: "75%" }}
        onChange={handleFileChange}
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
};

export default DenemeimageUpload;