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

export default function UserCreate() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPass] = useState("");
  const [avatar, setAvatar] = useState("");

  const { id } = useParams();

  useEffect(() => {
    if (!id) return;

    fetch("http://localhost:5000/users/" + id)
      .then((res) => res.json())
      .then((result) => {
        if (result && result.length > 0) {
          setFname(result[0].fname || "");
          setLname(result[0].lname || "");
          setUsername(result[0].username || "");
          setPass(result[0].password || "");
          setAvatar(result[0].avatar || "");
        } else {
          console.error("No user data found for ID:", id);
        }
      })
      .catch((error) => console.error("Error fetching user data:", error));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { id, fname, lname, username, password, avatar };

    fetch("http://localhost:5000/users/create", {
      method: "POST",
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
        background: "linear-gradient(135deg, #1f1c2c 0%, #928DAB 100%)",
      }}
    >
      <Card
        sx={{
          maxWidth: 500,
          width: "100%",
          borderRadius: 5,
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          backdropFilter: "blur(15px)",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          padding: 3,
          textAlign: "center",
          color: "white",
        }}
      >
        <CardContent>
          <Typography variant="h4" fontWeight="bold" mb={2}>
            ✨ Create Account
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
                  InputLabelProps={{ style: { color: "#fff" } }}
                  sx={{
                    input: { color: "#fff" },
                    fieldset: { borderColor: "rgba(255, 255, 255, 0.5)" },
                    "&:hover fieldset": { borderColor: "#fff" },
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
                  InputLabelProps={{ style: { color: "#fff" } }}
                  sx={{
                    input: { color: "#fff" },
                    fieldset: { borderColor: "rgba(255, 255, 255, 0.5)" },
                    "&:hover fieldset": { borderColor: "#fff" },
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
                  InputLabelProps={{ style: { color: "#fff" } }}
                  sx={{
                    input: { color: "#fff" },
                    fieldset: { borderColor: "rgba(255, 255, 255, 0.5)" },
                    "&:hover fieldset": { borderColor: "#fff" },
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
                  InputLabelProps={{ style: { color: "#fff" } }}
                  sx={{
                    input: { color: "#fff" },
                    fieldset: { borderColor: "rgba(255, 255, 255, 0.5)" },
                    "&:hover fieldset": { borderColor: "#fff" },
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
                  InputLabelProps={{ style: { color: "#fff" } }}
                  sx={{
                    input: { color: "#fff" },
                    fieldset: { borderColor: "rgba(255, 255, 255, 0.5)" },
                    "&:hover fieldset": { borderColor: "#fff" },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    bgcolor: "rgba(255,255,255,0.2)",
                    color: "white",
                    py: 1.5,
                    fontSize: "1rem",
                    borderRadius: 3,
                    textTransform: "none",
                    backdropFilter: "blur(5px)",
                    "&:hover": {
                      bgcolor: "rgba(255,255,255,0.3)",
                    },
                  }}
                >
                  🚀 Create Account
                </Button>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
