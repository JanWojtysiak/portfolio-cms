"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

type FormStatus =
  | { type: "idle"; message: "" }
  | { type: "error"; message: string };

export default function Login() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    const formData = new FormData(event.currentTarget);
    const password = String(formData.get("password") ?? "");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message ?? "Nie udało się zalogować.");
      }

      router.replace("/admin/projects");
      router.refresh();
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Wystąpił nieoczekiwany błąd.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Container maxWidth="sm" sx={{ py: 10 }}>
      <Typography variant="overline" color="primary" sx={{ fontWeight: 700 }}>
        Panel administratora
      </Typography>
      <Typography variant="h3" sx={{ mt: 1, mb: 1, fontWeight: 700 }}>
        Zaloguj się
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 4 }}>
        Podaj hasło, aby zarządzać projektami.
      </Typography>

      <Paper variant="outlined" sx={{ p: { xs: 3, sm: 4 } }}>
        <Box component="form" onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              name="password"
              label="Hasło"
              type="password"
              required
              fullWidth
              autoFocus
              autoComplete="current-password"
            />

            {status.type === "error" && (
              <Alert severity="error">{status.message}</Alert>
            )}

            <Button
              type="submit"
              variant="contained"
              size="large"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Logowanie..." : "Zaloguj"}
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Container>
  );
}
