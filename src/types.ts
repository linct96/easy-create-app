export type CommanderOptions = {
  default?: boolean;
  preset?: string;
  buildTool?: BuildTool;
  mainLib?: null | "react" | "vue";
  uiLib?: null | "tailwind css";
  babel?: boolean;
  typescript?: boolean;
};

export type BuildTool = "webpack"
export type Lib = "babel" | "typescript" | "react"
