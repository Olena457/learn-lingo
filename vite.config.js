import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { terser } from "/rollup-plugin-terser";

export default defineConfig({
    plugins: [
        react(),
        terser({
            compress: {
                drop_console: true,
            },
            format: {
                comments: false,
            },
        }),
    ],
    build: {
        sourcemap: true,
        outDir: "dist",
        rollupOptions: {
            output: {
                manualChunks: (id) => {
                    if (id.includes("node_modules")) {
                        return "vendor";
                    }
                    return "main";
                },
            },
            plugins: [
                terser({
                    compress: {
                        drop_console: true,
                    },
                    format: {
                        comments: false,
                    },
                }),
            ],
        },
    },
});
