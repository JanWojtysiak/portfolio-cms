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
("use client");
type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  source: "OPEN_SOURCE" | "CLOSED_SOURCE";
};

const sourceLabels = {
  OPEN_SOURCE: "Open Source",
  CLOSED_SOURCE: "Closed Source",
};

export default async function Projects() {
  try {
    const response = await fetch("/api/projects");
    if (!response.ok) {
      throw new Error("Nie udało się pobrać projektów.");
    }

    const projects = await response.json();
    return (
      <Box id="projekty" component="section" sx={{ py: 10 }}>
        <Container maxWidth="lg">
          <Typography
            variant="overline"
            color="primary"
            sx={{ fontWeight: 700 }}
          >
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
                sx={{
                  display: "flex",
                  minHeight: 280,
                  flexDirection: "column",
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: 4 }}>
                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      mb: 2,
                    }}
                  >
                    <Typography variant="h5" sx={{ fontWeight: 700 }}>
                      {project.title}
                    </Typography>
                    <Chip
                      label={project.source}
                      size="small"
                      sx={{
                        flexShrink: 0,
                        border: "1px solid",
                        borderColor:
                          project.source === source[0] ? "#22c55e" : "#ef4444",
                        bgcolor:
                          project.source === source[0] ? "#dcfce7" : "#fee2e2",
                        color:
                          project.source === source[0] ? "#166534" : "#991b1b",
                        fontWeight: 700,
                        boxShadow:
                          project.source === source[0]
                            ? "0 0 18px rgba(34, 197, 94, 0.45)"
                            : "0 0 18px rgba(239, 68, 68, 0.4)",
                      }}
                    />
                  </Stack>
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
                  <Button
                    href={project.link}
                    target="_blank"
                    endIcon={<ArrowOutwardIcon />}
                  >
                    Zobacz projekt
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>
    );
  } catch (error) {
    console.error(error);
    return (
      <Typography color="error">Nie udało się pobrać projektów.</Typography>
    );
  }
}
