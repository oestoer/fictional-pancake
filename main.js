require('dotenv').config();
const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let mainWindow;
function closeWindow() {
    mainWindow = null;
}

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        backgroundColor: "#FFCE58",
        icon: path.join(__dirname, "assets/icons/png/Icon-72.png")
    });

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));

    win.on('close', closeWindow);

    return win;
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        mainWindow = createWindow();
    }
});
