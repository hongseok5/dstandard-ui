
import React, { Component } from 'react';
import SideMenu from './SideMenu';
import StateComponent from './StateComponent';
import StandardStateComponent from './StandardStateComponent';
import WorkBoard from './WorkBoard';
import BetterEventPractice from './BetterEventPractice';

// 1. be familiar with react
// 2. design application
// 3. make application

function App() {
  return (
    <div className="App">

      <p>Data standard</p>
      <SideMenu list={["term", "word", "domain", "non standard"]}/>
      <WorkBoard name="hongseok" age={16}> </WorkBoard>
      <StandardStateComponent></StandardStateComponent>
      <BetterEventPractice></BetterEventPractice>
      <Footer></Footer>
    </div>
    
  );
}

function Footer(){
  // apply css
  const style ={
    backgroundColor : "gray"
  }
  return <div style={style}> This is Footer!</div>
}

export default App;
