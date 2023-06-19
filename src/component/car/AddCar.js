import { Box, Typography } from "@mui/material";
//import HorizontalLinearStepper from "./stepper";
import styled from "@emotion/styled";
import { Button, Fab } from "@material-ui/core";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useStateManage } from "../../store/store";
import AddCarForm from "./AddcardFrom";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { PostCar } from "../../request/postRequest";
import { useEffect } from "react";

export const AddCar = () => {
  const setAddCar = useStateManage((state) => state.setAddCar);
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
  useEffect(() => {
    console.log(brand);
  }, [brand]);
  function handleBack() {
    setAddCar(false);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      brand: brand,
      model: model,
      modelYear: modelYear,
      rentPrice: rentPrice,
      selectedImage: selectedImage,
    };
    console.log(data);
    try {
     // const response = await PostCar(data);
      //console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Box display="flex" justifyContent="space-between" margin="30px">
        <Typography variant="h4" gutterBottom>
          Add Car
        </Typography>
        <Fab variant="extended" onClick={handleBack}>
          <ArrowBackIosIcon sx={{ mr: 1 }} />
          Back
        </Fab>
      </Box>

      <Box
        margin="20px"
        marginTop="50px"
        sx={{
          height: "100%",
          backgroundColor: "#F5F5F5",
          borderRadius: "30px",
        }}
      >
        <AddCarForm />
      </Box>
    </>
  );
};

const StyledTitle = styled.label`
  font-weight: bold;
  font-size: 35px;
  margin-left: 20px;
`;
