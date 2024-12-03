import React from 'react'
import Main from './Main'
import Header from './Header'
import Footer from './Footer'


const Split = () => {
  return (
    <div id='main'>
        <Header id="header" content="This is the Header"/>
        <Main id="Main" content="This is the Main"/>
        <Footer id="Footer" content="This is the Footer"/>
    </div>
  )
}

export default Split