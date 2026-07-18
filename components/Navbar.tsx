import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { isAdminAuthenticated } from "@/lib/session";

const publicLinks = [
  { label: "O mnie", href: "/#o-mnie" },
  { label: "Projekty", href: "/#projekty" },
  { label: "Kontakt", href: "/#kontakt" },
];

export default async function Navbar() {
  const isAdmin = await isAdminAuthenticated();

  const links = isAdmin
    ? [...publicLinks, { label: "Admin panel", href: "/admin/projects" }]
    : publicLinks;

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "#181818",
        color: "common.white",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: 72 }}>
          <Typography
            variant="h6"
            component="a"
            href="/#start"
            sx={{
              flexGrow: 1,
              color: "inherit",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Jan Wojtysiak
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 1 }}>
            {links.map((link) => (
              <Button key={link.href} href={link.href} color="inherit">
                {link.label}
              </Button>
            ))}
          </Box>
          <Button
            href="#kontakt"
            variant="contained"
            color="inherit"
            disableElevation
            sx={{ ml: 2, color: "grey.900" }}
          >
            Napisz do mnie
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
