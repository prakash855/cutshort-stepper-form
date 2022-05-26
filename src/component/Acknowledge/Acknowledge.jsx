import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import CheckIcon from "@mui/icons-material/Check";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const theme = createTheme();

export default function Acknowledge() {
  // custom hook for title
  useDocumentTitle("Acknowledge");

  const handleSubmit = (event) => {
    event.preventDefault();
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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <CheckIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Congratulations, Eren!
          </Typography>
          <small>
            you have completed onboarding, you can start using the Eden!
          </small>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Launch Eden
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
