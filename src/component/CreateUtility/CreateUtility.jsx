import * as React from "react";
import UserTabs from "../Tabs/UserTabs";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { useStep } from "../../context/step-context";

const theme = createTheme();

export default function CreateUtility() {
  const { nextStep } = useStep();
  // custom hook for title
  useDocumentTitle("Utility");

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
            How are you planning to use Eden?
          </Typography>
          <small className="tag-line">
            we'll stream your setup experience accordingly.
          </small>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <UserTabs />

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
