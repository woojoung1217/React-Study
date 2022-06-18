import React , { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','서울 여행기']);
  let blogName = useState('개발 Blog by React');
  let [textdate,textdatec] = useState(['2월17일','2월18일','2월19일']);
  return (
    <div className="App">
      <div className="black-nav">
       <div> {blogName} </div>
       <div className='sizedbox'><img src ={logo}/></div>
      </div>
      <div className="list">
        <h3> {  글제목[0] } </h3>
        <p>{textdate[0]}</p>
        <hr/>
      </div>
      <div className="list">
        <h3> {  글제목[1] } </h3>
        <p>{textdate[1]}</p>
        <hr/>
      </div>
      <div className="list">
        <h3> {  글제목[2] } </h3>
        <p>{textdate[2]}</p>
        <hr/>
      </div>
     
    </div>
  );
}

export default App;
