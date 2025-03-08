import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";

export default function BottonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          borderRadius: 2,
        }}
      >
        <Toolbar>
          <IconButton
            component={motion.button}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component={motion.div}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            sx={{ flexGrow: 1, fontWeight: "bold", letterSpacing: 1 }}
          >
            Manage
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
