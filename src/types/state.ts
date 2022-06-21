export type State = {
  terminal: TerminalState;
  app: AppState;
};

export type AppState = {
  theme: string;
  font: string;
  color: string;
};

export type TerminalState = {
  commandList: Array<string>;
  history: Array<string>;
  commands: Array<string>;
  currentCommand: string;
  prevCommand: number;
};
