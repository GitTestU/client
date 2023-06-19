import React from "react";
import { Box, Fab, TextField, Button } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import GridViewIcon from "@mui/icons-material/GridView";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import { useState, useEffect, useRef } from "react";
import SendIcon from "@mui/icons-material/Send";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import CloseIcon from "@mui/icons-material/Close";
const Contact = () => {
  const [isChatboxOpen, setIsChatboxOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState("");

  const menuItems = [
    { id: 1, name: "Dashboard", icon: <ChatBubbleOutlineIcon />, tooltip: "Live-Support" },
  ];

  const handleDashboardClick = () => {
    setIsChatboxOpen(!isChatboxOpen);
  };

  const handleClose = () => {
    setIsChatboxOpen(false);
  };

  const handleSendClick = () => {
    // Burada chat mesajının gönderilmesi işlemlerini gerçekleştirebilirsiniz
    console.log("Gönderilen Mesaj:", chatMessage);
    setChatMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendClick();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <Box
        display="flex"
        position="fixed"
        top="80%"
        left="90%"
        flexDirection="column"
      >
        {menuItems.map((item) => (
          <Box key={item.id} mb={3}>
            <Tooltip title={item.tooltip} placement="right">
              <Fab onClick={item.id === 1 ? handleDashboardClick : undefined}>
                {item.icon}
              </Fab>
            </Tooltip>
          </Box>
        ))}
      </Box>
      {isChatboxOpen && (
        <Box
          position="fixed"
          width="300px"
          height="500px"
          top="25%"
          left="74%"
          bgcolor="#D9D9D9"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          borderRadius="15px"
          p={2}
          zIndex={100}
        >
          <Box>
            <Fab onClick={handleClose}>
              <CloseIcon />
            </Fab>
          </Box>
          <Box>{chatMessage}</Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            gap="2%"
          >
            <TextField
              label="Send Message"
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
              variant="outlined"
              margin="normal"
            />
            <Button variant="outlined" onClick={handleSendClick}>
              <SendIcon />
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Contact;
