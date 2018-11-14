const { app, BrowserWindow } = require('electron');
const path = require('path');

let win;

// 전체화면으로하고, 못끄게 하기 / 뒤로가기 막기

function createWindow() {
  win = new BrowserWindow({
    width: 1200,
    height: 800,
  });

  // win.webContents.openDevTools()

  win.setMenu(null);
  win.on('closed', () => {
    win = null;
  });
  win.loadFile(path.join(__dirname, '../dist/index.html'));
  win.setFullScreen(true);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (win === null) createWindow();
});
