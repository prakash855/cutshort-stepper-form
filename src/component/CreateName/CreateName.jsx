import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { useStep } from "../../context/step-context";

const theme = createTheme();

export default function CreateName() {
  const { nextStep } = useStep();
  // custom hook for title
  useDocumentTitle("Name");

  const handleSubmit = (event) => {
    event.preventDefault();
    nextStep();
    const data = new FormData(event.currentTarget);
    console.log({
      fullName: data.get("fullName"),
      displayName: data.get("displayName"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Welcome! First thing first...
          </Typography>
          <small className="tag-line">you can always change them later</small>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              placeholder="Steve Jobs"
              fullWidth
              id="fullName"
              label="Full Name"
              name="fullName"
              autoComplete="fullName"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              placeholder="Steve"
              fullWidth
              name="displayName"
              label="Display Name"
              type="text"
              id="displayName"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create Workspace
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
