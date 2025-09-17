import type { Config } from "tailwindcss";

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Ny färgpalett - jordnära gröna toner
				larkberget: {
					"50": "#f8f9fa", // Ljus bakgrund
					"100": "#e8f5e8",
					"200": "#d1ead1",
					"300": "#b8dfb8",
					"400": "#9dd49d",
					"500": "#8CB369", // Ljus grön accent
					"600": "#7aa05c",
					"700": "#688d4f",
					"800": "#567a42",
					"900": "#1E391F", // Mörk grön bas
				},
				trust: {
					"50": "#f0f6f4",
					"100": "#e1ede9",
					"200": "#c3dbd3",
					"300": "#a5c9bd",
					"400": "#87b7a7",
					"500": "#5B8E7D", // Grön/grå komplement
					"600": "#4f7a6b",
					"700": "#436659",
					"800": "#375247",
					"900": "#2b3e35",
				},
				earth: {
					"50": "#faf9f7",
					"100": "#f5f3ef",
					"200": "#ebe7df",
					"300": "#e1dbcf",
					"400": "#d7cfbf",
					"500": "#B2A88C", // Beige/neutral
					"600": "#9f967c",
					"700": "#8c846c",
					"800": "#79725c",
					"900": "#66604c",
				},
				pulse: {
					"50": "#f8f9fa",
					"100": "#e8f5e8",
					"200": "#d1ead1",
					"300": "#b8dfb8",
					"400": "#9dd49d",
					"500": "#8CB369", // Matchande med ljus grön
					"600": "#7aa05c",
					"700": "#688d4f",
					"800": "#567a42",
					"900": "#1E391F",
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				aurora: {
					from: {
						backgroundPosition: "50% 50%, 50% 50%",
					},
					to: {
						backgroundPosition: "350% 50%, 350% 50%",
					},
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-down': {
					'0%': { opacity: '0', transform: 'translateY(-30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-left': {
					'0%': { opacity: '0', transform: 'translateX(-30px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'fade-in-right': {
					'0%': { opacity: '0', transform: 'translateX(30px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'fade-in-scale': {
					'0%': { opacity: '0', transform: 'scale(0.95)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(100%)' },
					'100%': { transform: 'translateY(0)' }
				},
				'bounce-gentle': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200px 0' },
					'100%': { backgroundPosition: 'calc(200px + 100%) 0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				aurora: "aurora 60s linear infinite",
				'fade-in': 'fade-in 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',
				'fade-in-up': 'fade-in-up 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',
				'fade-in-down': 'fade-in-down 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',
				'fade-in-left': 'fade-in-left 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',
				'fade-in-right': 'fade-in-right 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',
				'fade-in-scale': 'fade-in-scale 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',
				'slide-up': 'slide-up 0.3s ease-out',
				'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
				'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
				'shimmer': 'shimmer 1.5s infinite'
			},
			transitionTimingFunction: {
				'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
				'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
			},
			fontFamily: {
				'sans': ['Inter', 'sans-serif'],
				'display': ['Inter', 'sans-serif'],
			},
		}
	},
	plugins: [require("tailwindcss-animate"), addVariablesForColors],
} satisfies Config;

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
