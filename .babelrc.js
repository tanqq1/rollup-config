// 配置参考：https://babeljs.io/docs/en/babel-preset-typescript

module.exports = {
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        regenerator: true,
      },
    ],
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        debug: false,
        useBuiltIns: 'usage',
        targets: {
          chrome: '43',
        },
        // modules: 'commonjs',
        // 如果没有指定,则默认corejs2
        // corejs: 3.9,
      },
    ],
    ['@babel/preset-typescript'],
  ],
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            // 单元测试时使用 chrome 100
            targets: { chrome: '100' },
          },
        ],
        ['@babel/preset-typescript'],
      ],
    },
  },
}
