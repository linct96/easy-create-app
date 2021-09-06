import path from "path";
import fs from "fs";

const rootPath = fs.realpathSync(process.cwd());
function resolveRoot(relativePath: string) {
  return path.resolve(rootPath, relativePath);
}

export default {
  packageTpl: resolveRoot("./src/templates/package.json.ejs"),
  indexTpl: resolveRoot("./src/templates/index.js.ejs"),
};
