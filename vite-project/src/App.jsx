import { useState } from 'react'
import './App.css'
import Todoitem from './Todoitem'

function App() {
    const [inputValue, setInputValue] = useState('');
    const [inputList, setInputList] = useState([]);

    const changeTodoInput = (e) => {
        setInputValue(e.target.value);
    };
    const addTodoItem = () => {
        setInputList([...inputList, inputValue]); // 기존 목록(inputList)에 새 값(inputValue) 추가
        setInputValue(""); // 입력값 초기화
    };
    const deleteTodo = (index) => {
        setInputList(
            inputList.filter((item, i) => {
              console.log(item);
                if (index === i) {
                  return false
                } else {
                  return true;
                }
              })
        );
    };
    return (
        <>
            <div className="App">
                <div>
                    <input type="input" value={inputValue} onChange={changeTodoInput} />
                    <button onClick={addTodoItem}>등록</button>
                </div>
                <ul className="list">
                    {inputList.map((item, i) => (
                        <Todoitem item={item} i={i} deleteTodo={deleteTodo} key={i} />
                        /* 자식 컴포넌트에서 사용될 props의 키 = 부모 컴포넌트의 현재값( map()함수에서 나온 변수의 값 ) */
                    ))}
                </ul>
            </div>
        </>
    );
}

export default App


