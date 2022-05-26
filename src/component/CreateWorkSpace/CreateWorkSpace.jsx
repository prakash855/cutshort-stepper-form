import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useStep } from "../../context/step-context";

const theme = createTheme();

export default function CreateWorkSpace() {
  const { nextStep } = useStep();
  // custom hook for title
  useDocumentTitle("Workspace");

  const handleSubmit = (event) => {
    event.preventDefault();
    nextStep();
    const data = new FormData(event.currentTarget);
    console.log({
      workSpaceName: data.get("workSpaceName"),
      workSpaceURL: data.get("workSpaceURL"),
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
            Let's set up a home for all your work
          </Typography>
          <small className="tag-line">
            you can always create another workspace later
          </small>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              placeholder="Eden"
              fullWidth
              id="workSpaceName"
              label="Workspace Name"
              name="workSpaceName"
              autoComplete="workSpaceName"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="workSpaceURL"
              label="workspace URL (optional)"
              type="url"
              placeholder="www.google.com"
              id="workSpaceURL"
              autoComplete="current-workSpaceURL"
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
