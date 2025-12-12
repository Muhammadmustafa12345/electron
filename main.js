const { app, BrowserWindow ,globalShortcut} = require('electron')
const windowStateKeeper = require('electron-window-state');
let win;
let newwin;

app.on('ready', function () {
  // Load the previous state with fallback to defaults
  let mainWindowState = windowStateKeeper({
    defaultWidth: 1000,
    defaultHeight: 800
  });
 
  // Create the window using the state information
  win = new BrowserWindow({
    'x': mainWindowState.x,
    'y': mainWindowState.y,
    'width': mainWindowState.width,
    'height': mainWindowState.height
  });
 


  win.loadFile('index.html');
  globalShortcut.register("k",()=>{
    newWin()
  })
  
  mainWindowState.manage(win);
});

function newWin(){
    newwin = new BrowserWindow({
        height:300,
        width: 400
    })
newwin.loadFile('childfile.html')
}
// app.whenReady().then(() => {
//     createWindow()
// })