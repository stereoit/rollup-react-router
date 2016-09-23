import jsx from 'rollup-plugin-jsx';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';


export default {
  entry: 'app/main.js',
  dest: 'bundle.js',
  plugins: [
    nodeResolve({jsnext: true}),
    commonjs({
      include: 'node_modules/**',
      sourceMap: false
    }),
    jsx({factory: 'React.createElement'})
  ],
  sourceMap: true
}
