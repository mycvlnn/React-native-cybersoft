// In App.js in a new project

import * as React from 'react'

import Navigation from 'navigation'
import {StatusBar, View} from 'react-native'

function App() {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <Navigation />
    </>
  )
}

export default App
