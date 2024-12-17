import { useState } from 'react'
import './App.css'
import Todo from "./Todoitem2";

function App2 () {
    // 입력창 input 관련내용
    const [inputValue, setInputValue] = useState('');
    const inputValueChange = (e) => {
        setInputValue(e.target.value) // 현재 입력하는 값으로 변경하기
    };

    // 등록 클릭 시 list 생성되도록
    const [inputList, setInputList] = useState([]);

    // 리스드 등록되도록
    const addInputList = () => {
        setInputList([...inputList, inputValue]);
        setInputValue('');
    }

    // 등록된 내용에서 삭제
    const deleteItem = (index) => {
        setInputList(
            inputList.filter((item, i) => {
                if (index === i) {
                    return false
                } else {
                    return true
                }
            })
        );
    }

    return (
        <>
            <div>
                <input type="input" value={inputValue} onChange={inputValueChange} />
                <button onClick={addInputList}>등록</button>
            </div>
            <ul>
                {inputList.map((item, i) => (
                    <Todo i={i} text={item} key={i} deleteItem={deleteItem} />
                ))}
            </ul>
        </>
    );
}

export default App2;


/* 입력창 */
/* 등록 클릭 시 Todo에 나타나도록 */
/* 등록된 메모의 삭제 버튼 클릭 시 해당 등록된 메모 삭제하기 */