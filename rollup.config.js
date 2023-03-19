// rollup.config.js
import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'

export default {
  input: 'src/index.ts',
  output: [
    [
      {
        dir: 'lib/',
        format: 'cjs',
      },
      {
        dir: 'dist/es',
        format: 'es',
      },
    ],
  ],
  plugins: [resolve(), babel({ babelHelpers: 'bundled' })],
}
