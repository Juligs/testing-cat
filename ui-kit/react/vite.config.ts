import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from 'tailwindcss';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [
        tsconfigPaths({
            root: __dirname,
        }),
        react(),
    ],
    css: {
        postcss: {
            plugins: [tailwindcss],
        },
    },
});
