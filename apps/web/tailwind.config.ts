import type { Config } from "tailwindcss";
import { uiPreset } from "@devhub/ui/tailwind.config";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [uiPreset],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
