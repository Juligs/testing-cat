import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import tailwindcss from 'tailwindcss';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    build: {
        lib: {
            entry: [
                resolve(__dirname, 'src/lib/client.ts'),
                resolve(__dirname, 'src/lib/server.ts'),
            ],
            name: 'ui-kit-react',
            fileName: (format, name) => `${name}.${format}.js`,
            formats: ['es', 'cjs'],
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'react/jsx-runtime', 'tailwindcss'],
            output: {
                preserveModules: true,
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    tailwindcss: 'tailwindcss',
                    'react/jsx-runtime': 'jsxRuntime',
                },
                banner: (chunkInfo) => {
                    if (chunkInfo.name === 'ui-kit/react/src/lib/client') {
                        return "'use client';";
                    }
                    return '';
                },
            },
        },
        sourcemap: true,
        emptyOutDir: true,
    },
    plugins: [
        tsconfigPaths({
            root: __dirname,
        }),
        react(),
        dts({ rollupTypes: true }),
    ],
    css: {
        postcss: {
            plugins: [tailwindcss],
        },
    },
});
