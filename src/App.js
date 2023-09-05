import React from "react";
import {logo} from './assets/ogosmall'

export default function App() {
  return (
    <div style={{ width:"100%", height:"100vh", display:"flex", flexDirection:"column"
    }}>
      <div style={{flex:1, display:"flex"}}>
        <div style={{flex:1, backgroundColor:"yellow", display:"flex", justifyContent:"start", alignItems:"center"}}><img src={logo}/></div>
        <div style={{flex:3, backgroundColor:"grey", display:"flex", justifyContent:"center", alignItems:"center"}}>menus </div>
        <div style={{flex:1, display:"flex", justifyContent:"end", alignItems:"center"}}>logo 1</div>
      </div>
      <div style={{flex:9, display:"flex"}}>
        <div style={{backgroundColor:"cyan", flex:1}}>sub menu</div>
        <div style={{backgroundColor:"green", flex:4}}>main contnet</div>
      </div>
    </div>
  );
}
