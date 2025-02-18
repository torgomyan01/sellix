import type { Config } from "tailwindcss";

const flexClasses = {
  ".flex-jsb-c": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ".flex-jsb-s": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start",
  },
  ".flex-jsb-e": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "end",
  },
  ".flex-js-c": {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  ".flex-js-s": {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "start",
  },
  ".flex-js-e": {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "end",
  },
  ".flex-jc-c": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  ".flex-jc-s": {
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
  },
  ".flex-jse-c": {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  ".flex-jsa-c": {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  ".flex-je-c": {
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
  },
};

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        white: "#FFF",
        black: "#11181C",
        blue: "#1B59F8",
      },
      transitionDuration: {
        DEFAULT: "300ms",
      },
      borderColor: {
        DEFAULT: "#d1d5db",
      },
    },
  },
  plugins: [
    function ({ addComponents }: { addComponents: any }) {
      addComponents(flexClasses);
    },
  ],
} satisfies Config;
