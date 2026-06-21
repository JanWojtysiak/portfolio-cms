"use client";

import { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const message =
  'console.log(".... żartowałem, tą sekcję utworzyłem przy użyciu AI ;) (ale pomysł był mój)");';

const hackerCharacters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ{}[]<>/$#@!%&*+-=_";

const lines = [
  "const developer = {",
  "  theory: 90,",
  "  practice: 75,",
  '  cleanCode: "",',
  '  dociekliwość: "dociekam, jak to działa od środka",',
  '  pasja: "robię to dla zabawy",',
  "};",
  "",
  "if (new Date().getFullYear() === 2026 &&",
  "    developer.theory > developer.practice) {",
  '  developer.cleanCode = "znam teorię pisania dobrego kodu";',
  "}",
];

export default function CodeProfile() {
  const editorRef = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  const [text, setText] = useState("");

  useEffect(() => {
    let hackerInterval: number | undefined;
    let typingInterval: number | undefined;
    let typingTimeout: number | undefined;
    const editor = editorRef.current;

    if (!editor) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) {
          return;
        }

        started.current = true;
        observer.disconnect();

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setText(message);
          return;
        }

        hackerInterval = window.setInterval(() => {
          const length = 35 + Math.floor(Math.random() * 25);
          const randomText = Array.from(
            { length },
            () =>
              hackerCharacters[
                Math.floor(Math.random() * hackerCharacters.length)
              ],
          ).join("");

          setText(randomText);
        }, 55);

        typingTimeout = window.setTimeout(() => {
          window.clearInterval(hackerInterval);
          setText("");

          let index = 0;

          typingInterval = window.setInterval(() => {
            index += 1;
            setText(message.slice(0, index));

            if (index === message.length) {
              window.clearInterval(typingInterval);
            }
          }, 35);
        }, 3000);
      },
      { threshold: 0.4 },
    );

    observer.observe(editor);

    return () => {
      observer.disconnect();
      window.clearInterval(hackerInterval);
      window.clearInterval(typingInterval);
      window.clearTimeout(typingTimeout);
    };
  }, []);

  return (
    <Box ref={editorRef}>
      <Paper
        elevation={0}
        sx={{
          overflow: "hidden",
          border: "1px solid",
          borderColor: "grey.800",
          borderRadius: 3,
          bgcolor: "#111111",
          color: "common.white",
          boxShadow: "0 24px 70px rgba(0, 0, 0, 0.16)",
        }}
      >
        <Stack
          direction="row"
          sx={{
            alignItems: "center",
            borderBottom: "1px solid",
            borderColor: "grey.800",
            bgcolor: "#181818",
            px: 2,
            py: 1.5,
          }}
        >
          <Stack direction="row" spacing={1} sx={{ mr: 2 }}>
            {["#555555", "#777777", "#999999"].map((color) => (
              <Box
                key={color}
                sx={{
                  width: 11,
                  height: 11,
                  borderRadius: "50%",
                  bgcolor: color,
                }}
              />
            ))}
          </Stack>
          <Typography
            variant="body2"
            sx={{ color: "grey.400", fontFamily: "monospace" }}
          >
            about.ts
          </Typography>
        </Stack>

        <Box
          sx={{
            minHeight: { xs: 330, sm: 300 },
            overflowX: "auto",
            p: { xs: 2, sm: 4 },
            fontFamily: "monospace",
            fontSize: { xs: "0.82rem", sm: "1rem" },
            lineHeight: 2,
          }}
        >
          {lines.map((line, index) => (
            <Box
              key={line}
              sx={{
                display: "grid",
                gridTemplateColumns: "32px max-content",
                minWidth: "max-content",
              }}
            >
              <Box
                component="span"
                sx={{ color: "grey.700", userSelect: "none" }}
              >
                {index + 1}
              </Box>
              <Box component="span" sx={{ color: "grey.200" }}>
                {line}
              </Box>
            </Box>
          ))}

          <Box sx={{ height: 16 }} />

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "32px max-content",
              minWidth: "max-content",
            }}
          >
            <Box
              component="span"
              sx={{ color: "grey.700", userSelect: "none" }}
            >
              {lines.length + 2}
            </Box>
            <Box component="span" sx={{ color: "common.white" }}>
              {text}
              <Box
                component="span"
                sx={{
                  display: "inline-block",
                  width: 8,
                  height: "1.1em",
                  ml: 0.5,
                  verticalAlign: "middle",
                  bgcolor: "common.white",
                  animation: "cursor 0.8s step-end infinite",
                  "@keyframes cursor": {
                    "0%, 100%": { opacity: 1 },
                    "50%": { opacity: 0 },
                  },
                }}
              />
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
