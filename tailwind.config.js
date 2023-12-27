module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        purple: { A400_68: "#ff00e568" },
        blue_gray: { 700: "#455a64", "600_ab": "#5b6677ab" },
        blue: { A700_00: "#0064ff00" },
        black: {
          900: "#030723",
          "900_3f": "#0000003f",
          "900_01": "#000000",
          "900_19": "#00000019",
          "900_05": "#00000005",
        },
        gray: { 100: "#f6f6f6", "100_01": "#f0f5ff" },
        deep_purple: { A700_68: "#3300ff68" },
        indigo: { A700: "#2f54eb" },
        white: { A700_01: "#ffffff", A700: "#fcfdff" },
        red: { A700: "#ff0a00" },
      },
      fontFamily: { poppins: "Poppins", inter: "Inter" },
      backgroundImage: {
        gradient:
          "linear-gradient(143deg ,#fcfdff,#5b6677ab,#3300ff68,#0064ff00,#ff00e568)",
      },
      boxShadow: {
        bs1: "0px 2.77px  2px 0px #00000005",
        bs: "0px 5px  10px -3.89px #0000003f",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
