const electron = require('electron')
const { app, BrowserWindow } = electron

app.on('ready', () => {
  let win = new BrowserWindow({ width: 800, height: 600 })
  console.log(`${__dirname}/index.html`)
  win.loadURL(`file://${__dirname}/index.html`)
})
