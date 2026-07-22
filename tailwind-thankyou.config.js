/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/thank-you/page.tsx"],
  corePlugins: { preflight: false },
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "secondary-fixed": "#e2e2e2", "on-surface-variant": "#d8c2b7", tertiary: "#7ad5dc", 
        "on-secondary-fixed": "#1a1c1c", "tertiary-fixed": "#96f1f8", "secondary-container": "#454747", 
        "on-primary-container": "#532300", "on-primary": "#532200", "surface-variant": "#353534", 
        outline: "#a18d83", "on-secondary": "#2f3131", "outline-variant": "#53443b", 
        "primary-container": "#d38657", "on-secondary-fixed-variant": "#454747", "primary-fixed-dim": "#ffb68c", 
        background: "#131313", "tertiary-container": "#48a6ad", "on-tertiary-fixed": "#002022", 
        "inverse-primary": "#8e4e24", "on-tertiary": "#00363a", "on-tertiary-container": "#00373a", 
        "inverse-surface": "#e5e2e1", "inverse-on-surface": "#313030", "on-tertiary-fixed-variant": "#004f54", 
        "secondary-fixed-dim": "#c6c6c7", "primary-fixed": "#ffdbc9", "surface-dim": "#131313", 
        "on-secondary-container": "#b4b5b5", "error-container": "#93000a", error: "#ffb4ab", 
        "surface-container-low": "#1c1b1b", "tertiary-fixed-dim": "#7ad5dc", primary: "#ffb68c", 
        "on-error-container": "#ffdad6", "surface-container": "#201f1f", "on-background": "#e5e2e1", 
        "surface-container-high": "#2a2a2a", "surface-container-lowest": "#0e0e0e", surface: "#131313", 
        "on-primary-fixed-variant": "#71370e", "surface-container-highest": "#353534", secondary: "#c6c6c7", 
        "surface-tint": "#ffb68c", "on-primary-fixed": "#321200", "surface-bright": "#3a3939", 
        "on-error": "#690005", "on-surface": "#e5e2e1"
      },
      borderRadius: {DEFAULT: "0.25rem", lg: "0.5rem", xl: "0.75rem", full: "9999px"},
      spacing: {"inner-padding": "24px", "section-gap": "120px", "content-gap": "48px", "container-max": "1200px", base: "8px", margin: "24px", xs: "4px", gutter: "16px", md: "16px", xl: "32px", sm: "12px", lg: "24px"},
      fontFamily: {
        "display-lg": ["Sora"], "display-lg-mobile": ["Sora"], "body-lg": ["Plus Jakarta Sans"], 
        "headline-md": ["Noto Serif"], "label-caps": ["Sora"], "button-text": ["Sora"], 
        "body-md": ["Inter"], "label-md": ["Public Sans"], "headline-lg": ["Noto Serif"], 
        headline: ["Sora"], display: ["Sora"], body: ["Plus Jakarta Sans"], label: ["Sora"]
      },
      fontSize: {
        "display-lg": ["80px", {lineHeight: "90px", letterSpacing: "0.05em", fontWeight: "700"}], 
        "display-lg-mobile": ["48px", {lineHeight: "54px", letterSpacing: "0.02em", fontWeight: "700"}], 
        "body-lg": ["18px", {lineHeight: "28px", letterSpacing: "0px", fontWeight: "400"}], 
        "headline-md": ["24px", {lineHeight: "1.3", fontWeight: "600"}], 
        "label-caps": ["12px", {lineHeight: "16px", letterSpacing: "0.2em", fontWeight: "700"}], 
        "button-text": ["14px", {lineHeight: "20px", letterSpacing: "0.1em", fontWeight: "700"}], 
        "body-md": ["16px", {lineHeight: "1.6", fontWeight: "400"}], 
        "label-md": ["14px", {lineHeight: "1.4", letterSpacing: "0.02em", fontWeight: "500"}], 
        "headline-lg": ["32px", {lineHeight: "1.2", fontWeight: "700"}]
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
