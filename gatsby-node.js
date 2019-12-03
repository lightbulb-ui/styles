const path = require('path');
const fs = require('fs');

/**
 * The root of the project
 *
 * @type {string}
 */
const root = path.join(__dirname, '..');

/**
 * The prefix of our olt class names
 *
 * @type {string}
 */
const prefix = 'olt-';

/**
 * Will construct a sass variable that will hold all icons
 *
 * The icon files are positioned inside `src/icons` directory
 *
 * @returns {string}
 */
function addIconsVariable() {
  return [
    '$icons: (',
    fs
      .readdirSync(path.join(root, 'src', 'icons'))
      .map((file) => `"${file}"`)
      .join(','),
    ');',
  ].join('');
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(root, './'), path.resolve(root, './node_modules')],
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: (loader) => [
                  require('iconfont-webpack-plugin')(loader),
                  require('postcss-custom-properties')({
                    preserve: true,
                  }),
                  require('postcss-custom-media')({
                    preserve: true,
                  }),
                  require('postcss-modules')({
                    generateScopedName(name, filename, css) {
                      if (name.startsWith('is-') || name.startsWith('has-')) {
                        // States are global
                        return name;
                      }
                      if (name.startsWith(prefix)) {
                        return name;
                      }

                      // Otherwise we want a prefix
                      return prefix + name;
                    },
                    getJSON() {},
                  }),
                  require('autoprefixer'),
                ],
              },
            },
            {
              loader: 'fast-sass-loader',
              options: {
                includePaths: [path.resolve(root, 'node_modules')],
                //
                // Provide additional sass code as data. So far we use this only
                // for the icons.
                //
                data: [addIconsVariable()].join('\n'),
              },
            },
          ],
        },
        {
          test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'fonts/[name].[ext]',
                publicPath: './',
              },
            },
          ],
        },
      ],
    },
  });
};