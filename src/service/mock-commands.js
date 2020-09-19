export default class MockCommands {
  _commands = [
    {
      command: "ls",
      answer: "text.txt",
    },
    {
      command: "pwd",
      answer: "c:user",
    },
    {
      command: "help",
      answer: "help\npwd\nls",
    },
    {
      command: "clear",
      answer: "clear",
    },
  ];

  help = () => {
    return this._commands.filter((item) => item.command === "help");
  };
  ls = () => {
    return this._commands.filter((item) => item.command === "ls");
  };
  pwd = () => {
    return this._commands.filter((item) => item.command === "pwd");
  };
  clear = () => {
    return "clear";
  };

  getCommands = () => {
    const comands = this._commands.map((item) => item.command);
    return comands;
  };
}
