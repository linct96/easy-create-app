import fs from "fs";
import path from "path";
import execa from 'execa'
import { CommanderOptions } from "./types";
import {depsVersion,relatedPackage} from './config'
class Creator {
  projectName: string;
  pathContext: string;
  constructor(name: string, targetDir: string) {
    this.projectName = name;
    this.pathContext = targetDir;
  }
  create(ops: Required<CommanderOptions>) {
    const fixedOps = this.fixOptions(ops)
    const deps = this.getDependencies(fixedOps)
    this.resolvePackage(deps);
  }
  fixOptions(ops: Required<CommanderOptions>){
    const fixedOps = {...ops}
    if (fixedOps.mainLib) {
      fixedOps.babel = true
    }
    return ops
  }
  getDependencies(ops: Required<CommanderOptions>){
    const deps = {
      dependencies:{} as Record<string,string>,
      devDependencies: {} as Record<string,string>,
    }
    if (ops.buildTool) {
      relatedPackage[ops.buildTool].forEach(lib=>{
        if (lib[2]) {
          deps.devDependencies[lib[0]] = lib[1]
        }else{
          deps.dependencies[lib[0]] = lib[1]
        }
      })
    }
    if (ops.mainLib) {
      relatedPackage[ops.mainLib].forEach(lib=>{
        if (lib[2]) {
          deps.devDependencies[lib[0]] = lib[1]
        }else{
          deps.dependencies[lib[0]] = lib[1]
        }
      })
    }
    return deps
  }
  resolvePackage(deps = { dependencies: {}, devDependencies: {} }) {
    const pkg = {
      name: this.projectName,
      description: "",
      version: "1.0.0",
      main: "index.js",
      repository: "",
      author: "",
      license: "",
      ...deps,
    };
    const pkgPath = path.resolve(this.pathContext, "package.json");
    fs.writeFileSync(pkgPath, JSON.stringify(pkg));
    execa('yarn', ['install'], { cwd: this.pathContext }).stdout?.pipe(process.stdout)
  }
}
export default Creator;
