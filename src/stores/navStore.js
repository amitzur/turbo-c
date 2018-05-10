import { observable, action, computed } from 'mobx';
import Commands from './commands';

export class NavStore {
  @observable items = [];
  commands;

  @action setItems = items => this.items = items;

  setCommands(commands) {
    this.commands = commands;
  }

  @action.bound command = (name, ...args) => {
    return this.commands[name](args);
  };
}

export default new NavStore();