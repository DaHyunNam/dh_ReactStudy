import { useState } from "react";

function App2() {
    const [inputValue, setInputValue] = useState("");

    const [inputList, setInputList] = useState([]);
    const inputAdd = () => {
        if (inputValue.trim() === "") return;
        setInputList([...inputList, {text: inputValue, completed: false}]);
    };

    //삭제 버튼
    const deleteBtn = (index) => {
        setInputList(inputList.filter((_, i) => i !== index))
    }; // i !== index 경우에만 살아있음

    // 리스트 안에서 체크박스 기능 (completed로도 바꾸기)
    const listValidChk = (index) => {
        setInputList(inputList.map((todo, i) => (i === index ? {...todo,completed : !todo.completed} : todo)))
    };

    // 필터칩
    const [stateFilter, setStateFilter] = useState("all");

    const stateFilterBtn = () => {
        setStateFilter(stateFilter);
    };

    const filteredList = inputList.filter((todo) => {
        if (stateFilter === "all") return true;
        if (stateFilter === "completed") return todo.completed;
        if (stateFilter === "active") return !todo.completed;
        return true;
    })

    
    return (
        <>
            <div>
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button onClick={inputAdd}>등록</button>
            </div>
            <div>
                <button onClick={() => stateFilterBtn("all")}>all</button>
                <button onClick={() => stateFilterBtn("completed")}>completed</button>
                <button onClick={() => stateFilterBtn("active")}>active</button>
            </div>
            <ul>
                {filteredList.map((todo, i) => (
                    <li key={i}>
                        <input type="checkbox" checked={todo.completed} onChange={() => listValidChk(i)} />
                        <p
                            style={{
                                textDecoration: todo.completed ? "line-through" : "none",
                                color: todo.completed ? "red" : "#000",
                            }}
                        >
                            {todo.text}
                        </p>
                        <button onClick={() => deleteBtn(i)}>삭제</button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default App2;
