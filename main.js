// Bom, esse e um codigp basico, ele cria uma janela com 800x600
const { app, createApp, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  win.loadFile("web/index.html");
};

app.whenReady().then(() => {
  createWindow();
});
