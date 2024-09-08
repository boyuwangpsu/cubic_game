import minify from 'rollup-plugin-babel-minify';

export default {
  input: './src/js/Game.js',
  plugins: [
    minify({ comments: false, sourcemap: false }),
  ],
  output: {
      format: 'iife',
      file: './assets/js/cube.js',
      indent: '\t',
      sourcemap: false,
  },
};
