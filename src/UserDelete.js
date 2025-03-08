import React, { useState } from "react";
import {
  Button,
  Container,
  TextField,
  Typography,
  Box,
  Alert,
  Snackbar,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { motion } from "framer-motion";

export default function UserDelete() {
  const [id, setId] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false);

  const handleDelete = () => {
    fetch(`http://localhost:5000/users/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.affectedRows > 0) {
          setMessage(`User ID ${id} deleted successfully.`);
          setError(null);
        } else {
          setError(`User ID ${id} not found.`);
          setMessage(null);
        }
      })
      .catch(() => {
        setError("Error deleting user. Please try again.");
        setMessage(null);
      })
      .finally(() => {
        setOpen(false);
        setSnackOpen(true);
      });
  };

  return (
    <Container maxWidth="sm">
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        sx={{
          p: 4,
          mt: 5,
          bgcolor: "#fff",
          borderRadius: 3,
          boxShadow: 4,
          textAlign: "center",
        }}
      >
        <Typography variant="h5" gutterBottom fontWeight="bold">
          Delete User
        </Typography>

        {message && <Alert severity="success">{message}</Alert>}
        {error && <Alert severity="error">{error}</Alert>}

        <TextField
          fullWidth
          label="Enter User ID"
          variant="outlined"
          margin="normal"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />

        <Button
          component={motion.button}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          variant="contained"
          color="error"
          fullWidth
          startIcon={<DeleteIcon />}
          sx={{ mt: 2, py: 1.5, fontSize: "16px", borderRadius: "12px" }}
          onClick={() => setOpen(true)}
          disabled={!id}
        >
          Delete User
        </Button>
      </Box>

      {/* Confirmation Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>⚠️ Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete user <strong>ID {id}</strong>? This
            action is <b>irreversible</b>.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="error">
            Confirm Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar Notification */}
      <Snackbar
        open={snackOpen}
        autoHideDuration={3000}
        onClose={() => setSnackOpen(false)}
        message={message || error}
      />
    </Container>
  );
}
