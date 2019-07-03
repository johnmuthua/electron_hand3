const {app, BrowserWindow, Menu} = require('electron')
const path = require('path')
const url=require('url')
const mysql = require('mysql')
require('electron-reload')(__dirname);

let mainWindow
let loginWindow
let handoverWindow

function createWindows() {
  //Creating the Main Window of the Project
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
      mainWindow.webContents.openDevTools()

      let menu = Menu.buildFromTemplate([
        {
          label: 'Menu',
          submenu:[
            {
              label:'Login',
              click: function(){
                  loginWindow.show()
              }
            },
            {
              label:'Display Handover',
              click: function(){
                handoverWindow.show()
              }
            },
            {type:"separator"},
            {
              label:'Exit',
              click(){
                app.quit()
              }
            }
          ]
        }
      ])
      Menu.setApplicationMenu(menu);

      //Login Window Accessible through the Menu
      let loginWindow = new BrowserWindow({
        width:800,
        height:600, 
        show: false,
        webPreferences:{
          nodeIntegration: true
        }
      })
      loginWindow.loadURL(url.format({
        pathname:path.join(__dirname, '/models/login.html'),
        protocol: 'file',
        slashes: true,
      }))
      loginWindow.webContents.openDevTools()

      let handoverWindow = new BrowserWindow({
        width:800,
        height:600, 
        show: false,
        webPreferences:{
          nodeIntegration: true
        }
      })
      handoverWindow.loadURL(url.format({
        pathname:path.join(__dirname, '/models/handover.html'),
        protocol: 'file',
        slashes: true,
      }))
      handoverWindow.webContents.openDevTools()
}

app.on('ready', createWindows)