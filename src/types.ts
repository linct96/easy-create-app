export type CommanderOptions = {
  default?:boolean,
  preset?:string,
  buildTool?:'webpack' | 'snowpack' | 'rollup',
  mainLib?:null | 'react' | 'vue',
  uiLib?:null | 'tailwind css',
  babel?:boolean,
  typescript?:boolean
}
