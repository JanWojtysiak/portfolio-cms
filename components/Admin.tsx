"use client";

import { SubmitEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

type FormStatus =
  | { type: "idle"; message: "" }
  | { type: "success" | "error"; message: string };

export default function Admin() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });

  async function handleLogout() {
    setIsLoggingOut(true);
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      router.replace("/admin/login");
      router.refresh();
    } finally {
      setIsLoggingOut(false);
    }
  }

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    const form = event.currentTarget;
    const formData = new FormData(form);

    const project = {
      title: formData.get("title"),
      description: formData.get("description"),
      tags: String(formData.get("tags"))
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
      link: formData.get("link"),
      source: formData.get("source"),
    };

    try {
      const response = await fetch("/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(project),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message ?? "Nie udało się dodać projektu.");
      }

      form.reset();
      setStatus({
        type: "success",
        message: "Projekt został dodany.",
      });
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
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 2,
          mb: 1,
        }}
      >
        <Typography variant="overline" color="primary" sx={{ fontWeight: 700 }}>
          Panel administratora
        </Typography>
        <Button
          variant="outlined"
          size="small"
          onClick={handleLogout}
          disabled={isLoggingOut}
        >
          {isLoggingOut ? "Wylogowywanie..." : "Wyloguj"}
        </Button>
      </Box>
      <Typography variant="h3" sx={{ mt: 1, mb: 1, fontWeight: 700 }}>
        Dodaj projekt
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 4 }}>
        Wypełnij dane, które później pojawią się na karcie projektu.
      </Typography>

      <Paper variant="outlined" sx={{ p: { xs: 3, sm: 4 } }}>
        <Box component="form" onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField name="title" label="Nazwa projektu" required fullWidth />

            <TextField
              name="description"
              label="Opis"
              required
              multiline
              minRows={4}
              fullWidth
            />

            <TextField
              name="tags"
              label="Technologie"
              helperText="Oddziel technologie przecinkami, np. React, Next.js, TypeScript"
              required
              fullWidth
            />

            <TextField
              name="link"
              label="Link do projektu"
              type="url"
              placeholder="https://..."
              required
              fullWidth
            />

            <FormControl required fullWidth>
              <InputLabel id="project-source-label">Typ źródła</InputLabel>
              <Select
                name="source"
                labelId="project-source-label"
                label="Typ źródła"
                defaultValue=""
              >
                <MenuItem value="OPEN_SOURCE">Open Source</MenuItem>
                <MenuItem value="CLOSED_SOURCE">Closed Source</MenuItem>
              </Select>
            </FormControl>

            {status.type !== "idle" && (
              <Alert severity={status.type}>{status.message}</Alert>
            )}

            <Button
              type="submit"
              variant="contained"
              size="large"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Dodawanie..." : "Dodaj projekt"}
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Container>
  );
}
