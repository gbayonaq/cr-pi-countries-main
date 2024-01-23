/* eslint-disable react-refresh/only-export-components */
import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        exclude: ['**/node_modules/**','**dist/**'],
    },
})