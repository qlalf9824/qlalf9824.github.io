exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/",
    component: require.resolve("./src/pages/index.js"),
    context: {},
    defer: true,
  })
}

const path = require('path');

// Setup Import Alias
exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const output = getConfig().output || {};

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        utils: path.resolve(__dirname, 'src/utils'),
        hooks: path.resolve(__dirname, 'src/hooks'),
      },
    },
  });
};