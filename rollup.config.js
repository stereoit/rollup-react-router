import jsx from 'rollup-plugin-jsx';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';


export default {
  entry: 'app/main.js',
  dest: 'app/bundle.js',
  plugins: [
    nodeResolve({jsnext: false}),
    commonjs({
      include: 'node_modules/**',
      sourceMap: false
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify( 'production' )
    }),
    jsx({factory: 'React.createElement'})
  ],
  sourceMap: false
}
