import React from 'react'
import './style.css'

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
  <div style={divStyle}>Hello React</div>
  <h2>DeveloperThai.com</h2>
  <div className='title'>React & React Native</div>
  </>
  );
}

export default App;
