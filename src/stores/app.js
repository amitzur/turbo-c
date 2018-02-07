import { observable, computed, action } from 'mobx';
import { SIZE_UNIT } from '../data/constants';
import Commands from './commands';
import Window from './window';

class App {
  @observable navItems = [];
  @observable windows = [];
  createdFilesCount = 0;
  commands;

  constructor(initialData) {
    this.setState(initialData);
    this.commands = Commands(this);
  }

  createWindow = (win) => new Window({
    ...win,
    onClose: (win) => this.closeWindow(win),
    onDrag: (win, dim) => this.updateWindow(win, dim),
    onMouseDown: (win) => this.focusWindow(win)
  });

  @action setState = ({
    navItems = this.navItems,
  }) => {
    this.navItems = navItems;
  };

  @action.bound command = (name, ...args) => {
    return this.commands[name](args);
  };

  @action createFile = () => {
    this.addWindow(`NONAME${this.createdFilesCount++}.rs`);
  };

  @action closeWindow = (win) => {
    const index = this.windows.indexOf(win);
    this.windows = this.windows.slice(0,index).concat(this.windows.slice(index + 1));
  };

  @action focusWindow = (win) => {
    win.zIndex = this.topZIndex + 1;
  };

  @action updateWindow = (win, { pageX, pageY }) => {
    let { top, left, width, height, resize, deltaX, deltaY, startHeight, startWidth } = win;
    if (resize !== undefined) {
      if (resize) {
        if (resize.top) {
          const bottom = top + height;
          top = pageY - deltaY;
          height = bottom - top;
        }

        if (resize.left) {
          const right = left + width;
          left = pageX - deltaX;
          width = right - left;
          if (left + width > window.innerWidth) width = window.innerWidth - left;
        }

        if (resize.bottom) {
          height = startHeight - (top + deltaY - pageY);
        }

        if (resize.right) {
          width = startWidth - (left + deltaX - pageX);
        }
      } else {
        top = pageY - deltaY;
        left  = pageX - deltaX;
        if (left + width > window.innerWidth) left = window.innerWidth - width;
      }

      top = Math.max(2*SIZE_UNIT, top);
      left = Math.max(0, left);
    }

    win.setState({ top, left, height, width });
  };

  @action addWindow = (name) => {
    const { activeWindow } = this;
    let top = 2*SIZE_UNIT, left = 0, height = window.innerHeight * 2/3, width = window.innerWidth, zIndex = 0;
    if (activeWindow) {
      top = activeWindow.top + 2*SIZE_UNIT;
      left = activeWindow.left + SIZE_UNIT;
      height = activeWindow.height - 2*SIZE_UNIT;
      width = activeWindow.width - SIZE_UNIT;
      zIndex = activeWindow.zIndex + 1;
    }

    const win = { name, top, left, height, width, zIndex };
    this.windows = this.windows.concat(this.createWindow(win));
    return this.windows[this.windows.length - 1];
  };

  @computed get topZIndex() {
    return this.windows.reduce((max, win) => Math.max(max, win.zIndex), this.windows[0] ? this.windows[0].zIndex : 0);
  }

  @computed get activeWindow() {
    return this.windows.reduce((max, win) => max.zIndex > win.zIndex ? max : win, this.windows[this.windows.length - 1]);
  }
}

export default App;