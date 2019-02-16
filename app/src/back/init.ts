// Basic init
const path = require('path')
const electron = require('electron')

const {app, BrowserWindow} = electron

import { myCustomSum } from './library/calculate'

const rootPath = path.resolve('./')
const buildPath = path.join(rootPath, 'app', 'build')

// Let electron reloads by itself when webpack watches changes in ./app/
require('electron-reload')(buildPath, {
    electron: path.join(rootPath, 'node_modules', '.bin', 'electron'),
    hardResetMethod : 'exit'
})

let mainWindow:any

const windowFactory = () => {

    mainWindow = new BrowserWindow({
        width: 1280,
        height: 800,
        // frame:false
    })

    mainWindow.loadURL(`file://${rootPath}/app/index.html`)

}

app.on('ready', windowFactory)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (mainWindow === null) {
        windowFactory()
    }
})