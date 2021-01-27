export type State = {
    terminal: TerminalState,
    app: AppState
}

export type AppState = {
    theme: string,
    font: string,
    color: string
}

export type TerminalState = {
    commandList: Array<string>,
    history: Array<string>,
    comands: Array<string>,
    currentComand: string,
    prevComand: number,
}