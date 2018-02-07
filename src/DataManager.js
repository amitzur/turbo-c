import navItems from './data/nav-items';
import { getFilesInFolder, getFileContent } from './service';

class DataManager {
  constructor(store) {
    this.store = store;

    store.navItems = navItems;

    getFilesInFolder().then(({ success, msg }) => {
      console.log("files", msg);
      msg.forEach(({ name, isDir }) => {
        if (!isDir) {
          const win = store.addWindow(name);
          getFileContent(name).then(data => {
            win.setState({ content: data.msg });
          });
        }
      });
    });
  }
}

export default DataManager;