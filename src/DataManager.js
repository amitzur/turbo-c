import navItems from './data/nav-items';

class DataManager {
  constructor(store) {
    this.store = store;

    store.navItems = navItems;
    store.windows = [
      { top: 200, left: 100, width: 500, height: 300, name: "File 1.rs", zIndex: 1 },
      { top: 250, left: 150, width: 500, height: 300, name: "File 2.rs", zIndex: 2 },
    ];
  }
}

export default DataManager;