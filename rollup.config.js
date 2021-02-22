/* import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import {terser} from 'rollup-plugin-terser';
import globals from 'rollup-plugin-node-globals';
import babel from 'rollup-plugin-babel'; */

export default [
  {
    input: 'src/server.js',
    output: {
      file: 'public/server.js',
      format: 'umd',
      sourcemap: true
    },
    /* plugins: [
    terser(),
    babel({
      exclude: 'node_modules/**'
    }),
    resolve({
      preferBuiltins: true
    }),
    commonjs(),
    json(),
    globals()
  ], */
    external: ['express']
  },
  {
    input: 'src/db.js',
    output: {
      file: 'public/db.js',
      format: 'umd',
      sourcemap: true
    },
    external: ['mongoose']
  }
];
