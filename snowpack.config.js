module.exports = {
  extends: '@snowpack/app-scripts-react',
  install: ['styled-components'],
  plugins: [
    [
      '@snowpack/plugin-run-script',
      { cmd: 'tsc --noEmit', watch: '$1 --watch' },
    ],
  ],
  devOptions: {
    open: 'none',
  },
};
