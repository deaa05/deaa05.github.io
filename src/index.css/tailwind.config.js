/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./*.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      colors: {
        "surface-variant": "#e0e3e5",
        "surface": "#f7f9fb",
        "tertiary": "#000000",
        "secondary-fixed": "#e1e0ff",
        "on-primary-container": "#848484",
        "on-surface-variant": "#4c4546",
        "surface-container-highest": "#e0e3e5",
        "on-tertiary-container": "#f23d5c",
        "inverse-on-surface": "#eff1f3",
        "on-secondary-fixed-variant": "#2f2ebe",
        "on-surface": "#191c1e",
        "error-container": "#ffdad6",
        "secondary": "#4648d4",
        "inverse-primary": "#c6c6c6",
        "on-tertiary": "#ffffff",
        "secondary-fixed-dim": "#c0c1ff",
        "on-error": "#ffffff",
        "inverse-surface": "#2d3133",
        "tertiary-container": "#40000d",
        "surface-tint": "#5e5e5e",
        "surface-dim": "#d8dadc",
        "surface-bright": "#f7f9fb",
        "on-background": "#191c1e",
        "on-secondary-container": "#fffbff",
        "on-primary-fixed-variant": "#474747",
        "primary-fixed": "#e2e2e2",
        "on-secondary": "#ffffff",
        "on-primary": "#ffffff",
        "surface-container-lowest": "#ffffff",
        "background": "#f7f9fb",
        "tertiary-fixed-dim": "#ffb2b7",
        "outline-variant": "#cfc4c5",
        "outline": "#7e7576",
        "tertiary-fixed": "#ffdadb",
        "surface-container-low": "#f2f4f6",
        "on-secondary-fixed": "#07006c",
        "primary-container": "#1b1b1b",
        "primary-fixed-dim": "#c6c6c6",
        "on-tertiary-fixed": "#40000d",
        "on-primary-fixed": "#1b1b1b",
        "primary": "#000000",
        "surface-container": "#eceef0",
        "secondary-container": "#6063ee",
        "error": "#ba1a1a",
        "on-error-container": "#93000a",
        "surface-container-high": "#e6e8ea",
        "on-tertiary-fixed-variant": "#92002a"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "base": "8px",
        "margin-mobile": "16px",
        "gutter": "24px",
        "margin-desktop": "40px",
        "container-max": "1280px"
      },
      fontFamily: {
        "label-md": ["Geist", "sans-serif"],
        "headline-lg": ["Hanken Grotesk", "sans-serif"],
        "headline-lg-mobile": ["Hanken Grotesk", "sans-serif"],
        "body-sm": ["Inter", "sans-serif"],
        "headline-xl": ["Hanken Grotesk", "sans-serif"],
        "body-md": ["Inter", "sans-serif"]
      },
      fontSize: {
        "label-md": ["12px", {"lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "500"}],
        "headline-lg": ["32px", {"lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "600"}],
        "headline-lg-mobile": ["28px", {"lineHeight": "36px", "fontWeight": "600"}],
        "body-sm": ["14px", {"lineHeight": "20px", "fontWeight": "400"}],
        "headline-xl": ["48px", {"lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
        "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}