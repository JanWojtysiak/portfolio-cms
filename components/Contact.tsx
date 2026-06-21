import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Contact() {
  return (
    <Box id="kontakt" component="section" sx={{ bgcolor: "grey.50", py: 10 }}>
      <Container maxWidth="md">
        <Paper
          elevation={0}
          sx={{
            bgcolor: "primary.main",
            color: "primary.contrastText",
            p: { xs: 4, md: 7 },
            textAlign: "center",
          }}
        >
          <Stack spacing={3} sx={{ alignItems: "center" }}>
            <Typography variant="h3" sx={{ fontWeight: 700 }}>
              Zróbmy coś razem.
            </Typography>

            <Button
              href="mailto:jan@example.com"
              variant="contained"
              color="inherit"
              size="large"
              startIcon={<EmailIcon />}
              sx={{ color: "primary.main" }}
            >
              wojtysiakjan@icloud.com
            </Button>
            <Stack direction="row" spacing={1}>
              <Button
                href="https://github.com/JanWojtysiak"
                color="inherit"
                startIcon={<GitHubIcon />}
              >
                GitHub
              </Button>
            </Stack>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
