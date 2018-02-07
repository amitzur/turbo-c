import { observable, computed, action } from 'mobx';

class App {
  @observable navItems = [];
  @observable windows = [];

  constructor(initialData) {
    this.setState(initialData);
    this.windows.forEach(window => {
      if (!window.zIndex) window.zIndex = 0;
    })
  }

  @action setState = ({
    navItems = this.navItems,
    windows = this.windows,
  }) => {
    this.navItems = navItems;
    this.windows = windows;
  };

  @action closeWindow = (name) => {
    const window = this.windows.find(w => w.name === name);
    if (window) {
      const index = this.windows.indexOf(window);
      this.windows = this.windows.slice(0,index).concat(this.windows.slice(index + 1));
    }
  };

  @action focusWindow = (name) => {
    const window = this.windows.find(w => w.name === name);
    if (window) {
      window.zIndex = this.topZIndex + 1;
    }
  };

  @action updateWindow = (name, dim) => {
    const window = this.windows.find(w => w.name === name);
    if (window) {
      const index = this.windows.indexOf(window);
      this.windows[index] = {...window, ...dim};
    }
  };

  @computed get topZIndex() {
    return this.windows.reduce((w1, w2) => Math.max(w1.zIndex, w2.zIndex));
  }
}

export default App;