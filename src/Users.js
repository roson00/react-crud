import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    UsersGet();
  }, []);

  const UsersGet = () => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((result) => {
        setUsers(result);
      });
  };

  const UserDelete = (id) => {
    fetch(`http://localhost:5000/users/delete/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Server error");
        return res.json();
      })
      .then((result) => {
        if (result.affectedRows > 0) {
          console.log(`User ID ${id} deleted successfully.`);
          UsersGet();
        } else {
          console.error(`User ID ${id} not found.`);
        }
      })
      .catch((err) => {
        console.error("Error deleting user:", err);
      });
  };

  const UpdateUser = (id) => {
    window.location = "/update/" + id;
  };

  return (
    <Container sx={{ p: 2 }} maxWidth="lg">
      <Paper sx={{ p: 3, borderRadius: 3, boxShadow: 5 }}>
        <Box display="flex" alignItems="center" mb={2}>
          <Typography
            component={motion.h2}
            variant="h5"
            color="primary"
            fontWeight="bold"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            sx={{ flexGrow: 1 }}
          >
            USERS
          </Typography>
          <Link to="/create" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ borderRadius: 2 }}
            >
              CREATE
            </Button>
          </Link>
        </Box>

        <TableContainer
          component={Paper}
          sx={{ borderRadius: 3, overflow: "hidden" }}
        >
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: "primary.main" }}>
                <TableCell
                  align="right"
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  ID
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  Avatar
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  First
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  Last
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  Username
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow
                  key={user.ID}
                  component={motion.tr}
                  whileHover={{ scale: 1.02 }}
                >
                  <TableCell align="right">{user.id}</TableCell>
                  <TableCell align="center">
                    <Avatar
                      src={user.avatar}
                      sx={{ width: 40, height: 40, mx: "auto" }}
                    />
                  </TableCell>
                  <TableCell align="left">{user.fname}</TableCell>
                  <TableCell align="left">{user.lname}</TableCell>
                  <TableCell align="left">{user.username}</TableCell>
                  <TableCell align="center">
                    <ButtonGroup>
                      <Button
                        variant="contained"
                        color="info"
                        sx={{ borderRadius: 2 }}
                        onClick={() => UpdateUser(user.id)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        sx={{ borderRadius: 2, ml: 1 }}
                        onClick={() => UserDelete(user.id)}
                      >
                        Del
                      </Button>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
}
