import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        body: ['Outfit', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          glow: "hsl(var(--primary-glow))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        glass: {
          DEFAULT: "hsl(var(--glass))",
          border: "hsl(var(--glass-border))",
          strong: "hsl(var(--glass-strong))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-60px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(60px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 30px hsl(350 70% 35% / 0.3)" },
          "50%": { boxShadow: "0 0 60px hsl(350 70% 45% / 0.5)" },
        },
        "ken-burns": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.2)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.8s ease-out forwards",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "slide-in-left": "slide-in-left 0.8s ease-out forwards",
        "slide-in-right": "slide-in-right 0.8s ease-out forwards",
        "scale-in": "scale-in 0.6s ease-out forwards",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "ken-burns": "ken-burns 30s ease-out infinite alternate",
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(180deg, hsl(0 0% 6%) 0%, hsl(0 0% 3%) 100%)',
        'gradient-primary': 'linear-gradient(135deg, hsl(350 70% 35%) 0%, hsl(350 80% 25%) 100%)',
        'gradient-glass': 'linear-gradient(135deg, hsl(0 0% 100% / 0.1) 0%, hsl(0 0% 100% / 0.02) 100%)',
        'gradient-overlay': 'linear-gradient(180deg, hsl(0 0% 0% / 0.7) 0%, hsl(0 0% 0% / 0.4) 50%, hsl(0 0% 0% / 0.8) 100%)',
        'gradient-radial-primary': 'radial-gradient(ellipse at center, hsl(350 70% 15% / 0.3) 0%, transparent 70%)',
      },
      boxShadow: {
        'glow': '0 0 60px hsl(350 70% 35% / 0.3)',
        'glow-lg': '0 0 100px hsl(350 70% 45% / 0.4)',
        'card': '0 25px 50px -12px hsl(0 0% 0% / 0.5)',
        'card-hover': '0 35px 60px -15px hsl(0 0% 0% / 0.6)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
