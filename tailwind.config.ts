import type { Config } from "tailwindcss";
export default { content: ["./src/**/*.{ts,tsx}"], theme: { extend: {
 colors: { brand: "#0E6B5C", accent: "#D9A441", cream: "#FBF8F1", ink: "#17302B" },
 fontFamily: { display: ["var(--font-display)", "serif"], sans: ["var(--font-sans)", "sans-serif"] } } }, plugins: [] } satisfies Config;
