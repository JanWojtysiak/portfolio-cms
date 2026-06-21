import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CodeProfile from "@/components/CodeProfile";

export default function About() {
  return (
    <Box
      id="o-mnie"
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        bgcolor: "common.white",
        pt: { xs: 16, md: 20 },
        pb: 10,
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
          height: { xs: 80, md: 120 },
          fill: "#111111",
        }}
      >
        <path d="M0,0H1440V45C1210,105 1000,20 760,58C510,98 260,30 0,82Z" />
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Typography variant="overline" color="primary" sx={{ fontWeight: 700 }}>
          O mnie
        </Typography>
        <Typography variant="h3" sx={{ mt: 1, mb: 2, fontWeight: 700 }}>
          Podążam za technologią.
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ maxWidth: 1250, mb: 6, lineHeight: 1.7 }}
        >
          Kocham programowanie, ale stawiam na nowoczesność. Pisanie wszystkiego
          od zera, gdy mamy pod ręką AI, to jak liczenie w pamięci, gdy obok
          leży kalkulator. Nie boję się nowych narzędzi, tworzę własne modele
          LoRA i wykorzystuję sztuczną inteligencję w codziennej pracy. Dzięki
          temu sprawniej tworzę interfejsy i skupiam się na architekturze.
        </Typography>
        <CodeProfile />
      </Container>
    </Box>
  );
}
