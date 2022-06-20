/* eslint-disable */

import React , { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','파이썬 독학']);
  let blogName = useState('개발 Blog by React');
  let [textdate,textdatechange] = useState(['2월17일','2월18일','2월19일']);
 
  // count + state

  let [like , likechange] = useState(0);
    // function 제목바꾸기(){
    //   var newArray = [...글제목];
    //   newArray[0] = '강남 우동 맛집';
    //   newArray[1] = '여자 코트 추천'
    //   글제목변경(newArray);
    // }
  return (
    <div className="App">
      
      <div className="black-nav">
        
       <div> {blogName} </div>
       <div className='sizedbox'><img src ={logo}/></div>
      </div>
      <Modal></Modal>

      <div className="list">
        <h3> { 글제목[0] } <span onClick={()=>{likechange(like+1)} } className="likebtn">👍</span> {like} </h3>
        <p>{textdate[0]}</p>
        <hr/>
      </div>

      <div className="list">
        <h3> { 글제목[1] } </h3>
        <p>{textdate[1]}</p>
        <hr/>
      </div>
      
      <div className="list">
        <h3> { 글제목[2] } </h3>
        <p>{textdate[2]}</p>
        <hr/>
      </div>
      

    </div>
  );
}




function Modal(){
  return(
      <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}
export default App;
