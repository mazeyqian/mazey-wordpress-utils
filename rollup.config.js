import babel from 'rollup-plugin-babel';
import rollupTypescript from 'rollup-plugin-typescript2';
import { DEFAULT_EXTENSIONS } from '@babel/core';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import cleaner from 'rollup-plugin-cleaner';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'lib/index.cjs.js',
        format: 'cjs'
      },
      {
        file: 'lib/index.esm.js',
        format: 'esm'
      }
    ],
    plugins: [
      rollupTypescript(),
      commonjs({
        include: /node_modules/
      }),
      babel({
        runtimeHelpers: true,
        // 只转换源代码，不运行外部依赖
        exclude: 'node_modules/**',
        // babel 默认不支持 ts 需要手动添加
        extensions: [
          ...DEFAULT_EXTENSIONS,
          '.ts',
        ],
      }),
      cleaner({
        targets: [
          'lib/',
        ],
      }),
    ],
    external: [ 'mazey', 'copy-to-clipboard' ],
  },
  {
    input: 'src/polyfill.js',
    output: { 
      file: 'lib/polyfill.min.js',
      format: 'iife',
    },
    plugins: [
      terser()
    ],
  },
];
