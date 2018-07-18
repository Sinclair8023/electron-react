/**
 * This file is used specifically and only for development. It installs
 * `electron-debug` & `react-devtools`. There shouldn't be any need to
 *  modify this file, but it can be used to extend your development
 *  environment.
 */

/* eslint-disable */

// Set environment for development
process.env.NODE_ENV = 'development'

// Install `electron-debug` with `devtron`
require('electron-debug')({ showDevTools: true })

require('electron').app.on('ready', () => {
  let installExtension = require('electron-devtools-installer')
  installExtension.default(installExtension.REACT_DEVELOPER_TOOLS)
    .then(() => {})
    .catch(err => {
      console.log('Unable to install `react-devtools`: \n', err)
    })
})

// Require `main` process to boot app
require('./index')
