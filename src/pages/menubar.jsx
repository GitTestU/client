import { Box, Fab } from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CarRentalIcon from "@mui/icons-material/CarRental";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import Tooltip from "@mui/material/Tooltip";
const MenuBar = () => {
  const menuItems = [
    { id: 1, name: "Dashboard", icon: <GridViewIcon />, tooltip: "Dashboard" },
    { id: 2, name: "Users", icon: <DirectionsCarIcon />, tooltip: "Car" },
    {
      id: 3,
      name: "Analytics",
      icon: <CircleNotificationsIcon />,
      tooltip: "Notifications",
    },
    { id: 4, name: "Layers", icon: <CreditCardIcon />, tooltip: "Card" },
    { id: 5, name: "Reports", icon: <CarRentalIcon />, tooltip: "Company" },
  ];

  return (
    <>
      <Box
        position="fixed"
        top="25%"
        bottom="25%"
        left="2%"
        bgcolor="rgba(255, 255, 255,0.8)"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        borderRadius="15px"
        p={2}
        zIndex={100}
      >
        {menuItems.map((item) => (
          <Box key={item.id} mb={3}>
            <Tooltip title={item.tooltip} placement="right">
              <Fab>{item.icon}</Fab>
            </Tooltip>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default MenuBar;
