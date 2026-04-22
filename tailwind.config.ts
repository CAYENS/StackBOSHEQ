import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blackish: "#191919",
        graphite: "#1D1D21",
        milk: "#FAF7F2",
        pure: "#FCFCFC",
        creamy: "#F2E8C9"
      },
      fontFamily: {
        heading: ["Baskerville Old Face", "Libre Baskerville", "Georgia", "serif"],
        body: ["Century Schoolbook", "Source Serif 4", "Georgia", "serif"],
        ui: ["Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        luxe: "0 20px 60px rgba(0,0,0,.35)"
      }
    }
  },
  plugins: []
};

export default config;
