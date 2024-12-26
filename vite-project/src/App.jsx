import { useState } from 'react'
import Todoitem from './Todoitem'

function App() {
    const [inputValue, setInputValue] = useState('');
    const [inputList, setInputList] = useState([]);

    const addTodoItem = () => {
        setInputValue(""); // 입력값 초기화
        setInputList([...inputList, { text: inputValue , completed : false}]); // 기존 목록(inputList)에 새 값(inputValue) 추가
    };

    const deleteTodo = (index) => {
        setInputList(
            inputList.filter((item, i) => {
                if (index === i) {
                return false
                } else {
                return true;
                }
            })
        );
    };

    const completedTodo = (index) => {
        setInputList(inputList.map((todo, i) => (
            i === index ? {...todo,completed : !todo.completed} : todo
        )));
    };

    const [inputFilter,setInputFilter] = useState("all");

    const filterBtn = (filter) => {
        setInputFilter(filter);
    };

    const filterList = inputList.filter((todo)=> {
        if (inputFilter === "all") return true;
        if (inputFilter === "active") return !todo.completed;
        if (inputFilter === "completed") return todo.completed;
        return true;
    })

    return (
        <>
            <div>
                <div>
                    <label htmlFor="inputlist">입력</label>
                    <input
                        id="inputlist"
                        type="input"
                        value={inputValue}
                        onChange={(e) => {
                            setInputValue(e.target.value);
                        }}
                    />
                    <button onClick={addTodoItem}>등록</button>
                </div>
                <div>
                    <button onClick={() => filterBtn("all")}>all</button>
                    <button onClick={() => filterBtn("active")}>active</button>
                    <button onClick={() => filterBtn("completed")}>completed</button>
                </div>
                <ul className="list">
                    {filterList.map((todo, i) => (
                        <Todoitem item={todo} i={i} deleteTodo={deleteTodo} completedTodo={completedTodo} key={i} />
                        /* 자식 컴포넌트에서 사용될 props의 키 = 부모 컴포넌트의 현재값( map()함수에서 나온 변수의 값 ) */
                    ))}
                </ul>
            </div>
        </>
    );
}

export default App;


