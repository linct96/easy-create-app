import { CommanderOptions } from './types'
import fs from 'fs'
import path from 'path'
import Creator from './Creator'
const initialOptions: Required<CommanderOptions> = {
  default: true,
  preset: 'a',
  buildTool: 'webpack',
  mainLib: null,
  uiLib: null,
  typescript: false,
  babel: false
}

const main = (name: string, options: CommanderOptions) => {
  const ops = Object.assign(initialOptions, options)
  console.log(ops)
  const projectName = name
  const targetDir = path.resolve(process.cwd(), projectName)

  const isExists = fs.existsSync(targetDir)
  if (isExists) {
    fs.rmSync(targetDir, {
      recursive: true
    })
    fs.mkdirSync(projectName)
  } else {
    fs.mkdirSync(projectName)
  }
  const creator = new Creator(projectName, targetDir)
  creator.create(ops)
}

export default main
