const {app, BrowserWindow} = require('electron')
const path = require('path')
var mysql = require('mysql')

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true // check the addition
    }
  })

  mainWindow.loadFile('index.html')

  let loginWindow

  // loginWindow = new BrowserWindow({
  //   parent:top, modal: true, show: false})
  //   loginWindow.loadURL(url.format({
  //     pathname:path.join(__dirname, './models.login.html'),
  //     protocol:'file',
  //     slashes:true
  //   }))
  


  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})
