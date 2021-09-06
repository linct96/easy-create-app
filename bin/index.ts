import { Command } from "commander";
import create from "../src/create";
import chalk from 'chalk'
const program = new Command();



program
  .arguments('<project-directory>')
  .usage(`${chalk.green('<project-directory>')} [options]`)
  // .command("create <app-name>")
  .description("create a new project powered by easy-create-app")
  .option(
    "-p, --preset <presetName>",
    "Skip prompts and use saved or remote preset"
  )
  .option(
    "-B, --build-tool <buildTool>",
    "choose one buildTool to build your app"
  )
  .option("-d, --default", "Skip prompts and use default preset")
  .option("-l, --main-lib <mainLib>", "choose a lib")
  .option("-l, --typescript <typescript>", "enable typescript")
  .allowUnknownOption()
  .action((name, options) => {
    // if (minimist(process.argv.slice(3))._.length > 1) {
    //   console.log(chalk.yellow('\n Info: You provided more than one argument. The first one will be used as the app\'s name, the rest are ignored.'))
    // }
    // --git makes commander to default git to true
    // if (process.argv.includes('-g') || process.argv.includes('--git')) {
    //   options.forceGit = true
    // }
    create(name, options);
  });


program.parse(process.argv);
