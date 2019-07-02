const {app, BrowserWindow, Menu} = require('electron')
const path = require('path')
const url=require('url')
const mysql = require('mysql')

let mainWindow
let loginWindow

function createWindows() {
      mainWindow = new BrowserWindow({
        width:800,
        height:600,
        webPreferences:{
          nodeIntegration: true
        }
      })
      mainWindow.loadURL(url.format({
        pathname:path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
      }))


      let menu = Menu.buildFromTemplate([
        {
          label: 'Menu',
          submenu:[
            {label:'Get time'},
            {label:'Kill application'},
            {label:'Exit'}
          ]
        }
      ])
      Menu.setApplicationMenu(menu);
}

app.on('ready', createWindows)