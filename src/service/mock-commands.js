export default class MockCommands {
  _apiBase = "https://my-json-server.typicode.com/gunkaartur/web-terminal";

  getResourse = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url} , received ${res.status}`);
    }
    return await res.json();
  };

  help = async () => {
    const res = await this.getResourse(`/help`);
    return res;
  };
  ls = async () => {
    const res = await this.getResourse(`/ls`);
    return res;
  };
  pwd = async () => {
    const res = await this.getResourse(`/pwd`);
    return res;
  };
  clear = async () => {
    const res = await this.getResourse(`/clear`);
    return res;
  };
  cat_text_txt = async () => {
    const res = await this.getResourse(`/cat_text_txt`);
    return res;
  };

  getApiComands = async () => {
    const res = await this.getResourse(`/commands/`);
    return res;
  };
}
