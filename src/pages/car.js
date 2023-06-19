import {
  Button,
  Card,
  CardActions,
  CardContent,
  Fab,
  Typography,
} from "@material-ui/core";
import { Box, Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import { useStateManage } from "../store/store";
import ListIcon from "@mui/icons-material/List";
import GridViewIcon from "@mui/icons-material/GridView";
import { Grid } from "gridjs-react";
import AddIcon from "@mui/icons-material/Add";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { getCars } from "../request/getRequest";
//import { DetailPatient } from "../components/patients/detailPatient";
//import SearchBar from "../components/doctors/SearchBar";

const columns = [
  // { name: "ID", id: "id" },
  {
    name: "Full Name",
    data: (row) => row.name,
    sort: true,
  },
  {
    name: "Email",
    id: "email",
  },
  {
    name: "Phone Number",
    id: "phoneNumber",
  },
];

const styleGrid = {
  table: {
    border: "3px solid #ccc",
  },
  th: {
    "background-color": "rgba(0, 0, 0, 0.1)",
    color: "#000",
    "border-bottom": "3px solid #ccc",
    "text-align": "center",
  },
  td: {
    "text-align": "center",
    border: "2px solid #ccc",
  },
};

async function carsGet(setCars) {
  const response = await getCars();
  console.log(response);
  setCars(response);
}

export const Car = () => {
  const setAddCar = useStateManage((state) => state.setAddCar);
  const [listView, setListView] = useState(false);
  const [gridView, setGridView] = useState(true);
  const [detailPatient, setDetailPatient] = useState(false);
  const [patientIndex, setPatientIndex] = useState();

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(1);

  const [cars, setCars] = useState([]);

  useEffect(() => {
    carsGet(setCars);
  }, []);

  function handleGrid() {
    setListView(false);
    setGridView(true);
  }
  function handleList() {
    setGridView(false);
    setListView(true);
  }
  function handleAddNew() {
    setAddCar(true);
  }

  return (
    <>
      <Box display="flex" justifyContent="space-between" margin="30px">
        <Typography variant="h4" gutterBottom>
          Cars
        </Typography>
        <Fab variant="extended" onClick={handleAddNew}>
          <AddIcon sx={{ mr: 1 }} />
          Add New
        </Fab>
      </Box>
      <Box
        margin="20px"
        marginTop="50px"
        sx={{
          // border: 1,
          minHeight: "1000px",
          backgroundColor: "#F5F5F5",
          borderRadius: "30px",
        }}
      >
        <Box
          margin="30px"
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap="20px"
        >
          <Box>İçerik</Box>
          <Box display="flex" gap="20px" alignItems="center">
            <Box>
              <Fab aria-label="add" onClick={handleList}>
                <ListIcon />
              </Fab>
            </Box>
            <Box>
              <Fab aria-label="add" onClick={handleGrid}>
                <GridViewIcon />
              </Fab>
            </Box>
          </Box>
        </Box>
        <Box
          display="flex"
          flexWrap="wrap"
          sx={{
            // border: 1,
            // height: "90vh",
            // backgroundColor: "black",
            // opacity: 0.4,
            borderRadius: "30px",
          }}
        >
          {gridView &&
            (cars.length ? (
              cars.map((item, index) => (
                <div key={item}>
                  <Box
                    margin="20px"
                    sx={{
                      width: "400px",
                      height: "400px",
                      borderRadius: "30px",
                    }}
                  >
                    <Card sx={{ maxWidth: 345 }}>
                      <CardHeader
                        avatar={
                          <Avatar
                            sx={{ bgcolor: red[500] }}
                            aria-label="recipe"
                          >
                            R
                          </Avatar>
                        }
                        action={
                          <IconButton aria-label="settings">
                            <MoreVertIcon />
                          </IconButton>
                        }
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                      />
                      <CardMedia
                        component="img"
                        height="194"
                        alt="Paella dish"
                      />
                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          This impressive paella is a perfect party dish and a
                          fun meal to cook together with your guests. Add 1 cup
                          of frozen peas along with the mussels, if you like.
                        </Typography>
                      </CardContent>
                      <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                          <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                          <ShareIcon />
                        </IconButton>
                      </CardActions>
                    </Card>
                  </Box>
                </div>
              ))
            ) : (
              <div>
                <Box
                  margin="20px"
                  sx={{
                    width: "210px",
                    borderRadius: "30px",
                  }}
                >
                  <Card elevation={2}>
                    <CardContent>
                      <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                      >
                        <Box
                          sx={{
                            borderRadius: "16px",
                            width: "70%",
                            height: "125px",
                            backgroundColor: "#EEEEEE",
                          }}
                          display="flex"
                          justfyContent="center"
                          alignItems="center"
                          onClick={() => setAddCar(true)}
                        >
                          <Button>Add Car</Button>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Box>
              </div>
            ))}

          {listView && (
            <Box margin="30px" height="100%">
              <Grid
                data={cars}
                columns={columns}
                style={styleGrid}
                height="75vh"
              />
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};
