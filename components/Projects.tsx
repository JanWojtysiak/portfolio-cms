import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const projects = [
  {
    title: "Sprawna wycena",
    description:
      "Strona typu mobile-first dla instalatorów z branży HVAC, która pomaga im w codziennej pracy.",
    tags: ["React", "Node.js", "Typescript"],
    link: "sprawnawycena.pl",
  },
];

export default function Projects() {
  return (
    <Box id="projekty" component="section" sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Typography variant="overline" color="primary" sx={{ fontWeight: 700 }}>
          Projekty
        </Typography>
        <Typography variant="h3" sx={{ mt: 1, mb: 6, fontWeight: 700 }}>
          Moje projekty
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 3,
          }}
        >
          {projects.map((project) => (
            <Card
              key={project.title}
              variant="outlined"
              sx={{ display: "flex", minHeight: 280, flexDirection: "column" }}
            >
              <CardContent sx={{ flexGrow: 1, p: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
                  {project.title}
                </Typography>
                <Typography color="text.secondary" sx={{ mb: 3 }}>
                  {project.description}
                </Typography>
                <Stack direction="row" spacing={1}>
                  {project.tags.map((tag) => (
                    <Chip key={tag} label={tag} size="small" />
                  ))}
                </Stack>
              </CardContent>
              <CardActions sx={{ px: 3, pb: 3 }}>
                <Button endIcon={<ArrowOutwardIcon />}>Zobacz projekt</Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
