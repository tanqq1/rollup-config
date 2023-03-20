// import resolve from '@rollup/plugin-node-resolve'
// import babel from '@rollup/plugin-babel'

export default {
  input: 'dist/es/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
  },
  // plugins: [resolve()],
  // plugins: [resolve(), babel({ babelHelpers: 'runtime' })],
}
