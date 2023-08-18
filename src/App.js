import React from 'react'
import './style.css'
import {Header, Content, Footer} from './func-components'
import Calendar from './class-components' 
import Banner from './banner'
import {Calculator} from './calculator'



function App() {
  const divStyle = {
    color:'red',
    backgroundColor:'powderblue',
    frontSize:'larger',
    padding:'20px',
    textAlign:'center'
  }
  return (
    <>
  <h3><center>Hello world! <br/>สวัสดีชาวโลก</center></h3>
  <div style={divStyle}>Hello react</div>
  <h1>DeveloperThai.com</h1>
  <div className='title'>React & React Native</div>
  <Header/>
  <p><center><Calendar/></center></p>
  <Content/>
  <Footer/>
  <Banner/>
  <Calculator/>
  </>
  );
}

export default App;
