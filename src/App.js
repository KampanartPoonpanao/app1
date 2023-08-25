import React from 'react'
import MessageBox from './state-func'
import RefsFunc from './refs-func'
import RefsArray from './refs-array'

export default function App() {
  return <>
  <p style={{textAlign:'center'}}>งาน 1 </p><RefsFunc/><hr></hr>
  <p style={{textAlign:'center'}}>งาน 2 </p><RefsArray/><hr></hr>
  <p style={{textAlign:'center'}}>งาน 3 </p><MessageBox/><hr></hr>
  </>
}
