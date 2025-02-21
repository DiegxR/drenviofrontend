import { addDynamicIconSelectors } from "@iconify/tailwind";
import  {heroui} from "@heroui/react";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    // or you can use a glob pattern (multiple component styles)
    './node_modules/@heroui/theme/dist/components/(button|snippet|code|input).js'
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [addDynamicIconSelectors(), heroui()],
};
