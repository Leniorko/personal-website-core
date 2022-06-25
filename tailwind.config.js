const fontFallback = [
  "-apple-system",
  "BlinkMacSystemFont",
  '"Segoe UI"',
  "Helvetica",
  "Arial",
  "sans-serif",
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
];

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,astro}"],
  theme: {
    extend: {
      fontFamily: {
        body: ['"IBM Plex Sans"', ...fontFallback],
        code: [
          '"IBM Plex Mono"',
          "Consolas",
          '"Andale Mono WT"',
          '"Andale Mono"',
          '"Lucida Console"',
          '"Lucida Sans Typewriter"',
          '"DejaVu Sans Mono"',
          '"Bitstream Vera Sans Mono"',
          '"Liberation Mono"',
          '"Nimbus Mono L"',
          "Monaco",
          '"Courier New"',
          "Courier",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};
