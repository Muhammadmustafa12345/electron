
// window properties 
frame: false,
// window funcitons 
win.webContents.openDevTools()

function createWindow() {
    const win = new BrowserWindow({
        width: 700,
        height: 600,
        // properties menu hide show 
        frame: false,
        alwaysOnTop: true,
        title: "Best App",
        webPreferences:{
            nodeIntegration: true,
        }
    })
    // load file html 
    win.loadFile('index.html');

    // open the child window self open when run app
    let child = new BrowserWindow({parent:win});
        child.loadFile('childfile.html');
        child.show();

    // inspect option open by default 
    win.webContents.openDevTools()
}


// when ready app 
app.whenReady().then(() => {
    createWindow()
})




// ✅ All BrowserWindow Properties (Complete List)

// Copy–paste friendly list:
width
height
x
y
useContentSize
center
minWidth
minHeight
maxWidth
maxHeight
resizable
movable
minimizable
maximizable
closable
focusable
alwaysOnTop
fullscreen
fullscreenable
simpleFullscreen
skipTaskbar
kiosk
title
icon
show
frame
parent
modal
acceptFirstMouse
disableAutoHideCursor
autoHideMenuBar
enableLargerThanScreen
backgroundColor
hasShadow
opacity
darkTheme
transparent
type
visualEffectState
roundedCorners
vibrancy
hiddenInMissionControl
webPreferences
titleBarStyle
thickFrame
trafficLightPosition
tabbingIdentifier
paintWhenInitiallyHidden
closable
backgroundMaterial




// 📌 webPreferences (sub-options)

// Inside webPreferences, you have another set of properties
devTools
nodeIntegration
nodeIntegrationInWorker
nodeIntegrationInSubFrames
contextIsolation
preload
sandbox
session
partition
zoomFactor
javascript
plugins
webSecurity
allowRunningInsecureContent
images
textAreasAreResizable
webgl
webviewTag
disableHtmlFullscreenWindowResize
spellcheck
enableWebSQL
nativeWindowOpen
scrollBounce
additionalArguments
autoplayPolicy
v8CacheOptions
safeDialogs
safeDialogsMessage
defaultFontSize
defaultMonospaceFontSize
minimumFontSize
defaultEncoding
backgroundThrottling
offscreen
