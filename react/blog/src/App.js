import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  // document.querySelector('h4').innerHTML = post; 변수에있던 자료를 html에 넣을때의 방식 
  let [글제목, 글제목변경] = useState('남자 코트 추천'); //잠깐저장하는 변수, 자동랜더링 필요할때
  ////let[초기값을 갖고잇는 state변수 남자코트추천,state의 값을 바꿀수있게 도와주는 함수] useState가 이것들을 반환함 //usestate(보관할자료) 
  //UseState('남자 코트 추천')여기에도 array남음 ;['남자코트추천',함수]
  //디스트럭쳐링
  //let num = [1,2]; //1과 2를 변수로 빼고싶을때 
  //let [a, c]= [1, 2];
  //let a = num[0];
  //let c = num[1];
  // let [logo, setLogo] = useState('ReactBlog');
  let [post2, setPost2] = useState('강남 우동맛집');
  let [post3, setPost3] = useState('파이썬독학');
//let [글제목, b]= useState(['남자코트 추천','강남 우동맛집','파이썬독학']);하고 {글제목[0]}이렇게 꺼내기

  let [따봉, 따봉변경] = useState(0);
  


  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={ {color: 'red', fontSize: '16px'}}>reactBlog</h4>
      </div>

      <button onClick = {()=>{글제목변경('여자코트추천');}}>
        글수정</button>
{/* 
      <button onClick = {()=>{
        let copy =[...글제목];
        copy[0] = '여자코트 추천';
        글제목변경(copy);
      }}>글수정</button> */}

      <div className ="list">
        <h4>{ 글제목 } <span onClick={ ()=> {따봉변경(따봉+1) }}> 👍🏻 </span> {따봉} </h4>
        <p>7월 17일 발행</p>

      

      </div>
      <div className ="list">
        <h4>{ post2 }</h4>
        <p>7월 17일 발행</p>
      </div>
      <div className ="list">
        <h4>{ post3 }</h4>
        <p>7월 17일 발행</p>
      </div>
      <Modal></Modal>
    </div>
  );
}
function Modal(){
  return(
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
