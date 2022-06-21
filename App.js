import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {


  let [StduyType ,StduyTypeState ] = useState(['JS 공부', 'React 공부', 'Python 공부']);
  let [like,likeState] = useState(0);

  // function typeChange(){
  //   var itemchange = [...StduyType];
    
  //   StduyTypeState(itemchange);
  // }
 
  function 제목변경(){
    var newdata = [...StduyType];
    newdata[0] = '여자 코트 추천';
    StduyTypeState(newdata);
  }

  return (
    <div className="App">
      <div className="nav-bar">
        <h4>React Study Blog</h4>
     </div>
        <button onClick={ 제목변경 }> 버튼 </button>
      <div className='list'>
        <h4>{StduyType[0]}

        <span onClick={ ()=>{likeState(like+1)}}> 👍</span> {like}
        </h4>
      
        <p>6월 20일 공부</p>
      </div>


      <div className='list'>
        <h4>{StduyType[1]}</h4>
        <p>6월 20일 공부</p>
    
      </div>

      <div className='list'>
        <h4>{StduyType[2]}</h4>
        <p>6월 20일 공부</p>
      </div>
      

    </div>
  );
}

export default App;

