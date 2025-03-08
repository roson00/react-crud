import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UserUpdate() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPass] = useState("");
  const [avatar, setAvatar] = useState("");

  const { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:5000/users/" + id)
      .then((res) => res.json())
      .then((result) => {
        setFname(result[0]?.fname || "");
        setLname(result[0]?.lname || "");
        setUsername(result[0]?.username || "");
        setPass(result[0]?.password || "");
        setAvatar(result[0]?.avatar || "");
      });
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { id, fname, lname, username, password, avatar };

    fetch("http://localhost:5000/users/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result["affectedRows"] >= 1) {
          window.location.href = "/";
        }
      });
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#121212", // Dark mode background
      }}
    >
      <Card
        sx={{
          maxWidth: 500,
          width: "100%",
          borderRadius: 5,
          boxShadow:
            "8px 8px 15px rgba(0,0,0,0.4), -8px -8px 15px rgba(255,255,255,0.1)",
          background: "#1e1e1e", // Neumorphic dark mode
          color: "white",
          padding: 4,
        }}
      >
        <CardContent>
          <Typography variant="h4" fontWeight="bold" mb={3} textAlign="center">
            🔄 Update User
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  variant="outlined"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                  sx={{
                    input: { color: "#fff" },
                    label: { color: "#bbb" },
                    "& fieldset": { border: "none" },
                    bgcolor: "#2a2a2a",
                    borderRadius: 2,
                    boxShadow:
                      "inset 4px 4px 6px rgba(0,0,0,0.4), inset -4px -4px 6px rgba(255,255,255,0.05)",
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  variant="outlined"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                  sx={{
                    input: { color: "#fff" },
                    label: { color: "#bbb" },
                    "& fieldset": { border: "none" },
                    bgcolor: "#2a2a2a",
                    borderRadius: 2,
                    boxShadow:
                      "inset 4px 4px 6px rgba(0,0,0,0.4), inset -4px -4px 6px rgba(255,255,255,0.05)",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Username"
                  variant="outlined"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  sx={{
                    input: { color: "#fff" },
                    label: { color: "#bbb" },
                    "& fieldset": { border: "none" },
                    bgcolor: "#2a2a2a",
                    borderRadius: 2,
                    boxShadow:
                      "inset 4px 4px 6px rgba(0,0,0,0.4), inset -4px -4px 6px rgba(255,255,255,0.05)",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  variant="outlined"
                  type="password"
                  value={password}
                  onChange={(e) => setPass(e.target.value)}
                  sx={{
                    input: { color: "#fff" },
                    label: { color: "#bbb" },
                    "& fieldset": { border: "none" },
                    bgcolor: "#2a2a2a",
                    borderRadius: 2,
                    boxShadow:
                      "inset 4px 4px 6px rgba(0,0,0,0.4), inset -4px -4px 6px rgba(255,255,255,0.05)",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Avatar URL"
                  variant="outlined"
                  value={avatar}
                  onChange={(e) => setAvatar(e.target.value)}
                  sx={{
                    input: { color: "#fff" },
                    label: { color: "#bbb" },
                    "& fieldset": { border: "none" },
                    bgcolor: "#2a2a2a",
                    borderRadius: 2,
                    boxShadow:
                      "inset 4px 4px 6px rgba(0,0,0,0.4), inset -4px -4px 6px rgba(255,255,255,0.05)",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    bgcolor: "#ff4081",
                    color: "white",
                    py: 1.5,
                    fontSize: "1rem",
                    borderRadius: 3,
                    boxShadow:
                      "4px 4px 10px rgba(0,0,0,0.5), -4px -4px 10px rgba(255,255,255,0.1)",
                    "&:hover": {
                      bgcolor: "#ff79b0",
                    },
                  }}
                >
                  ✨ Update User
                </Button>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
