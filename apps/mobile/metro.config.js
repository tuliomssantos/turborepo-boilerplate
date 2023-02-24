// // Learn more https://docs.expo.dev/guides/monorepos
// const { getDefaultConfig } = require('expo/metro-config');
// const path = require('path');

// // Find the project and workspace directories
// const projectRoot = __dirname;
// // This can be replaced with `find-yarn-workspace-root`
// const workspaceRoot = path.resolve(projectRoot, '../..');

// const config = getDefaultConfig(projectRoot);

// // 1. Watch all files within the monorepo
// config.watchFolders = [workspaceRoot];
// // 2. Let Metro know where to resolve packages and in what order
// config.resolver.nodeModulesPaths = [
//   path.resolve(projectRoot, 'node_modules'),
//   path.resolve(workspaceRoot, 'node_modules'),
// ];
// // 3. Force Metro to resolve (sub)dependencies only from the `nodeModulesPaths`
// config.resolver.disableHierarchicalLookup = true;

// module.exports = config;

const { getDefaultConfig } = require("metro-config");

const path = require('path');

const projectRoot = __dirname;

const workspaceRoot = path.resolve(projectRoot, '../..');

module.exports = (async () => {
  const {
    resolver: { sourceExts },
  } = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: require.resolve("./postcss-transformer.js"),
    },
    resolver: {
      nodeModulesPaths: [
        path.resolve(projectRoot, 'node_modules'),
        path.resolve(workspaceRoot, 'node_modules'),
      ],
      disableHierarchicalLookup: true,
      sourceExts: [...sourceExts, "css", "pcss"],
    },
  };
})();
