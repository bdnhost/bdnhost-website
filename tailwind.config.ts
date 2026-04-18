import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bdn: {
          blue: "#0B4EA2",
          "blue-light": "#EFF6FF",
          "blue-dark": "#072E62",
        },
        host: {
          orange: "#F5A623",
          "orange-light": "#FFF8EB",
          "orange-dark": "#B36D11",
        },
        brand: {
          bg: "#F8FAFC",
          dark: "#0F172A",
          text: "#1E293B",
          muted: "#64748B",
          border: "#E2E8F0",
        },
      },
      fontFamily: {
        heebo: ["Heebo", "system-ui", "-apple-system", "sans-serif"],
      },
      borderRadius: {
        card: "8px",
        button: "6px",
        modal: "12px",
      },
    },
  },
  plugins: [],
};

export default config;
