import navItems from './data/nav-items';
import { getFilesInFolder, getFileContent } from './service';
import Commands from './stores/commands'; // TODO move this file out of /stores since it's not a store

let createdFilesCount = 0;

function initData({
  windowsStore,
  navStore
}) {
  initWindows(windowsStore);
  initNav(navStore, initCommands(windowsStore));
}

async function initWindows(windowsStore) {
  const { msg: files } = await getFilesInFolder();
  files.forEach(({ name, isDir }) => {
    if (!isDir) {
      const win = windowsStore.addWindow(name);
      getFileContent(name).then(({ msg: content }) => win.setState({content}));
    }
  });
}

function initNav(navStore, commands) {
  navStore.setItems(navItems);
  navStore.setCommands(commands);
}

function initCommands(windowsStore) {
  return Commands({
    createFile: () => windowsStore.addWindow(`NONAME${createdFilesCount++}.rs`)
  })
}

export {
  initData
};