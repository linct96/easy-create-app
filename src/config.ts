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
type LibItem = [string, string, LibItemOptions];
interface LibItemOptions {
  isDev: boolean;
}
export const relatedPackage: Record<string, LibItem[]> = {
  webpack: [
    [
      "webpack",
      "^5.51.0",
      {
        isDev: true,
      },
    ],
    [
      "webpack-cli",
      "^4.8.0",
      {
        isDev: true,
      },
    ],
    [
      "webpack-dev-server",
      "^4.0.0",
      {
        isDev: true,
      },
    ],
  ],
  react: [
    [
      "react",
      "^17.0.2",
      {
        isDev: false,
      },
    ],
    [
      "react-dom",
      "^17.0.2",
      {
        isDev: false,
      },
    ],
  ],
  typescript: [
    [
      "typescript",
      "^4.3.5",
      {
        isDev: true,
      },
    ],
  ],
  snowpack: [
    [
      "snowpack",
      "^1.0.0",
      {
        isDev: true,
      },
    ],
  ],
  rollup: [
    [
      "rollup",
      "^1.0.0",
      {
        isDev: true,
      },
    ],
  ],
};

export const buildPlugins = {
  typescript: {},
};
