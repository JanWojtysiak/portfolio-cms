import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Hero() {
  return (
    <Box
      id="start"
      component="section"
      sx={{
        position: "relative",
        display: "flex",
        minHeight: "85vh",
        alignItems: "center",
        overflow: "hidden",
        bgcolor: "#111111",
        color: "common.white",
        py: { xs: 16, md: 20 },
      }}
    >
      <Box
        component="svg"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: { xs: 60, md: 100 },
          fill: "#181818",
        }}
      >
        <path d="M0,64L80,69.3C160,75,320,85,480,74.7C640,64,800,32,960,26.7C1120,21,1280,43,1360,53.3L1440,64L1440,0L0,0Z" />
      </Box>

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        <Stack spacing={3} sx={{ alignItems: "flex-start" }}>
          <Typography
            variant="h1"
            sx={{
              maxWidth: 850,
              fontSize: { xs: "3rem", md: "5rem" },
              fontWeight: 800,
              lineHeight: 1.05,
            }}
          >
            Portfolio
          </Typography>
          <Typography
            variant="h5"
            sx={{
              maxWidth: 650,
              color: "rgba(255, 255, 255, 0.7)",
              lineHeight: 1.6,
            }}
          >
            Nie jestem ogromnym pasjonatem frontendu, dlatego ta strona została
            stworzona przeze mnie własnoręcznie, przy wykorzystaniu gotowych
            komponentów Material UI.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
