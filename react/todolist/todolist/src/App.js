import logo from './logo.svg';
import './App.css';
import React, {useState}from 'react';
import TodoBoard from './component/TodoBoard';

//1.인풋창이 있고 버튼이 있다
//2.인풋창에 값을 입력하고 버튼을 클릭하면 아이템이 추가가된다
//3. 아이템 삭제버튼을 누르면 삭제가 가능하다
//무엇을 컴포넌트화 시킬지는 주관적임
// 반복되는건 무조건 컴포넌트화
//todoboard와 그안에 todoitem이라는 컴포넌트 생성

function App() {
  const [inputValue,setInputValue] = useState('')
    const [todoList,setTodoList]=useState([])
    const addItem =() =>{
      setTodoList([...todoList,inputValue])
    }
  return (
    <main>
      <input value = {inputValue}type="text" onChange={(event)=>{ setInputValue(event.target.value)}}/>
      <button onClick={addItem}>추가</button>
      <TodoBoard todoList={todoList}/>

    </main>
  );
}

export default App;
