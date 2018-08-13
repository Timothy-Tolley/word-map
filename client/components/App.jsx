import React from 'react'

import Header from './Header/Header'
import Footer from './Footer/Footer'
import PathFinder from './PathFinder/PathFinder'

class App extends React.Component {
  shiftRight (fraction) {
    const wordMap = document.getElementById('pathfinder-app')
    wordMap.scrollLeft -= window.innerWidth / fraction
  }

  render () {
    return (
      <div className = 'page'>
        <Header />
        <PathFinder shiftRight = {this.shiftRight.bind(this)}/>
        <Footer shiftRight = {this.shiftRight.bind(this)}/>
      </div>
    )
  }
}

export default App
