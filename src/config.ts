export const packageJson = {
  name: "",
  version: "1.0.0",
  repository: "",
  author: "",
  license: "",
  dependencies: {},
  devDependencies: {},
};
export const depsVersion = {
  webpack: "^5.51.0",
  snowpack: "^1.0.0",
  rollup: "^1.0.0",
};
type LibItem = [string, string, boolean];
export const relatedPackage: Record<string, LibItem[]> = {
  webpack: [
    ["webpack", "^5.51.0", true],
    ["webpack-cli", "^4.8.0", true],
    ["webpack-dev-server", "^4.0.0", true],
  ],
  react: [
    ["react", "^17.0.2", false],
    ["react-dom", "^17.0.2", false],
  ],
  snowpack: [["snowpack", "^1.0.0", false]],
  rollup: [["rollup", "^1.0.0", false]],
};


