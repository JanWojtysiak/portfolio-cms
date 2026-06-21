import CodeIcon from "@mui/icons-material/Code";
import AdjustIcon from "@mui/icons-material/Adjust";
import SpeedIcon from "@mui/icons-material/Speed";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const skills = [
  {
    icon: <CodeIcon color="primary" fontSize="large" />,
    title: "Czysty kod",
    text: "Znam teorię pisania dobrego kodu i weryfikuje to co pisze model.",
  },
  {
    icon: <AdjustIcon color="primary" fontSize="large" />,
    title: "Dociekliwość",
    text: "Nie zadowalam się powierzchowną wiedzą. Zawsze sprawdzam, jak dokładnie działa technologia pod spodem.",
  },
  {
    icon: <SpeedIcon color="primary" fontSize="large" />,
    title: "Pasja",
    text: "Kodowanie daje mi ogromną satysfakcję i to właśnie ta chęć tworzenia napędza mnie do codziennego działania.",
  },
];

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
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 3,
          }}
        >
          {skills.map((skill) => (
            <Paper key={skill.title} variant="outlined" sx={{ p: 4 }}>
              <Stack spacing={2}>
                {skill.icon}
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  {skill.title}
                </Typography>
                <Typography color="text.secondary">{skill.text}</Typography>
              </Stack>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
