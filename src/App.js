import React from 'react'
import './style.css'
import {Header, Content, Footer} from './func-components'
import Calendar from './class-components' 

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
  <h2>DeveloperThai.com</h2>
  <div className='title'>React & React Native</div>
  <Header/>
  <p><center><Calendar/></center></p>
  <Content/>
  <Footer/>
  </>
  );
}

export default App;
