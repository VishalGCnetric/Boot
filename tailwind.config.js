/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/customer/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "wwwbootscom-mine-shaft": "#333",
        "btn-hover":"#1B355C",
        "wwwbootscom-link-water": "#cae0f5",
        "wwwbootscom-congress-blue": "#004990",
        "wwwbootscom-concrete": "#f2f2f2",
        "wwwbootscom-deep-cove": "#05054b",
        "wwwbootscom-white": "#fff",
        "wwwbootscom-alto": "#d0d0d0",
        "wwwbootscom-boulder": "#767676",
        "wwwbootscom-black": "#000",
        "wwwbootscom-pumice": "#d1d2d1",
        "wwwbootscom-scotch-mist": "#fffbdc",
        "wwwbootscom-monza": "#cc0033",
        "wwwbootscom-mine-shaft-15": "rgba(51, 51, 51, 0.15)",
        "wwwbootscom-fair-pink": "#ffe9e9",
        "wwwbootscom-cherub": "#fbe3f6",
        "wwwbootscom-amaranth": "#e41b68",
        "wwwbootscom-link-water1": "#d5e6f7",
        "wwwbootscom-tundora": "#4c4c4c",
        "wwwbootscom-aqua-haze": "#f3f6f8",
        "wwwbootscom-tiara": "#c9cece",
        "wwwbootscom-hibiscus": "#b8237b",
        
      },
      spacing: {},
      fontFamily: {
        "wwwbootscom-inter-regular-16": "Inter",
      },
      borderRadius: {
        "8xs": "5px",
        "3xs": "10px",
        "21xl": "40px",
        mini: "15px",
        "23xl": "42px",
        xl: "20px",
        "12xs": "1px",
        "10xs": "3px",
      },
    },
    fontSize: {
      "sm-5": "13.5px",
      base: "16px",
      "xs-8": "11.8px",
      "xs-9": "11.9px",
      xs: "12px",
      "smi-1": "12.1px",
      "base-8": "15.8px",
      "xs-7": "11.7px",
      "smi-7": "12.7px",
      "base-4": "15.4px",
      "base-6": "15.6px",
      "xs-4": "11.4px",
      sm: "14px",
      "base-5": "15.5px",
      "sm-2": "13.2px",
      mini: "15px",
      "14xl-3": "33.3px",
      xl: "20px",
      "8xl": "27px",
      "3xl-5": "22.5px",
      lg: "18px",
      "base-3": "15.3px",
      "base-1": "15.1px",
      "14xl-5": "33.5px",
      "mini-5": "14.5px",
      "mid-9": "17.9px",
      "2xs": "11px",
      "mini-8": "14.8px",
      "mini-9": "14.9px",
      "3xl-7": "22.7px",
      "mini-6": "14.6px",
      "4xl-6": "23.6px",
      lgi: "19px",
      "3xl-9": "22.9px",
      "3xl-3": "22.3px",
      "2xl-8": "21.8px",
      mid: "17px",
      "4xl-1": "23.1px",
      "4xl-8": "23.8px",
      "5xl": "24px",
      "4xl-4": "23.4px",
      "3xl-1": "22.1px",
      "4xl-3": "23.3px",
      "14xl-6": "33.6px",
      "mini-3": "14.3px",
      "smi-8": "12.8px",
      "sm-6": "13.6px",
      "10xl-7": "29.7px",
      "21xl-2": "40.2px",
      "13xl": "32px",
      "11xl-1": "30.1px",
      "10xl-1": "29.1px",
      "4xl": "23px",
      "base-7": "16.7px",
      "base-9": "16.9px",
      "mini-4": "14.4px",
      "mid-4": "17.4px",
      "mid-3": "17.3px",
      "14xl-2": "33.2px",
      "xs-3": "11.3px",
      "xs-1": "11.1px",
      inherit: "inherit",
    },
    screens: {
      mq1900: {
        raw: "screen and (max-width: 1900px)",
      },
      mq1425: {
        raw: "screen and (max-width: 1425px)",
      },
      mq950: {
        raw: "screen and (max-width: 950px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none', /* IE and Edge */
          'scrollbar-width': 'none',    /* Firefox */
        },
        '.scrollbar-hide::-webkit-scrollbar': {
          display: 'none', /* Chrome, Safari, and Opera */
        },
      });
    },
  ],
}