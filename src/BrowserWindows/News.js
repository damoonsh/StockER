import {  BrowserWindow } from 'electron';

export function createNewsWindow(url, width=600, height=200) {

    let win = new BrowserWindow(
        { 
            width: width,
            height: height,
            x:400, 
            y:40,
            movable: true,
            resizable: true,
            frame: true,
            webPreferences: {
                nodeIntegration: true
            }
        }
    )
    console.log('News window')

    win.setMenuBarVisibility(false);
    win.loadURL(url);

    win.on('closed', () => {
        win = null;
      })

    return win;
}