import fs from 'fs'
import path from 'path'
import execa from 'execa'
import ejs from 'ejs'
import { CommanderOptions } from './types'
import { relatedPackage } from './config'
import { sourcePath } from './utils'
interface IDependence {
  name: string
  version: string
}

class Creator {
  projectName: string
  pathContext: string
  constructor(name: string, targetDir: string) {
    this.projectName = name
    this.pathContext = targetDir
  }
  create(ops: Required<CommanderOptions>) {
    const fixedOps = this.fixOptions(ops)
    const deps = this.getDependencies(fixedOps)
    this.resolvePackage(deps)
  }
  fixOptions(ops: Required<CommanderOptions>) {
    const fixedOps = { ...ops }
    if (fixedOps.mainLib) {
      fixedOps.babel = true
    }
    return ops
  }
  getDependencies(ops: Required<CommanderOptions>) {
    const dependencies: IDependence[] = []
    const devDependencies: IDependence[] = []
    const needDep = ['buildTool', 'mainLib'] as const

    if (ops.buildTool) {
      relatedPackage[ops.buildTool].forEach(lib => {
        const { isDev } = lib[2]
        const dependence = {
          name: lib[0],
          version: lib[1]
        }
        isDev ? devDependencies.push(dependence) : dependencies.push(dependence)
      })
    }
    if (ops.mainLib) {
      relatedPackage[ops.mainLib].forEach(lib => {
        const { isDev } = lib[2]
        const dependence = {
          name: lib[0],
          version: lib[1]
        }
        isDev ? devDependencies.push(dependence) : dependencies.push(dependence)
      })
    }
    return {
      dependencies,
      devDependencies
    }
  }

  resolvePackage(deps: ReturnType<Creator['getDependencies']>) {
    const pkgData = {
      name: this.projectName,
      description: '',
      version: '1.0.0',
      main: 'index.js',
      repository: '',
      author: '',
      license: '',
      ...deps
    }
    this.writeFileWithTpl(sourcePath.packageTpl, pkgData)
    this.writeFileWithTpl(sourcePath.indexTpl)
    execa('yarn', ['install'], { cwd: this.pathContext }).stdout?.pipe(
      process.stdout
    )
  }

  writeFileWithTpl(tplPath: string, data?: any) {
    return new Promise<void>((resolve, reject) => {
      ejs.renderFile(tplPath, data, {}, (err, str) => {
        if (err) reject(err)
        const filePath = path.resolve(
          this.pathContext,
          path.basename(tplPath, '.ejs')
        )
        fs.writeFileSync(filePath, str)
        resolve()
      })
    })
  }
}
export default Creator
