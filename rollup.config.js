import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
const extensions = ['.js', '.tsx','ts'];
export default {
    input: 'components/index.ts',
    output: {
        file: 'lib/bundle.js',
        name: 'uc',
        format: 'esm',
        sourcemap: true,
    },
    external: ['vue'],
    plugins: [
        resolve({
            extensions,
            modulesOnly: true,
        }),
        babel({
            exclude: 'node_modules/**',
            extensions,
        }),
    ],
};
