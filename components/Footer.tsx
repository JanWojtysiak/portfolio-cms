import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Container component="footer" maxWidth="lg" sx={{ py: 4 }}>
      <Typography color="text.secondary" sx={{ textAlign: "center" }}>
        © {new Date().getFullYear()} Jan Wojtysiak
      </Typography>
    </Container>
  );
}
