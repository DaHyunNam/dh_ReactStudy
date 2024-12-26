import { useState } from "react";

function App4() {
    const [inputValue,setInputValue] = useState("");    

    const [inputList,setInputList] = useState([]);
    const inputAdd = () => {
        setInputValue(""); // 입력값 초기화
        setInputList([...inputList, {text:inputValue, completed: false}]);
    }

    const [stateFilter, setStateFilter] = useState("all");

    const changeTodoInput = (e) => {
        setInputValue(e.target.value);
    };

    const stateFilterBtn = (Filter) => {
        setStateFilter(Filter);
    };

    const filteredList = inputList.filter((todo) => {
        if (stateFilter === "all") return true;
        if (stateFilter === "completed") return todo.completed;
        if (stateFilter === "active") return !todo.completed;
        return true;
    });

    // 리스트 중에서 체크박스 클릭 시 완료로 바꾸기 위한 함수
    const listChkFun = (index) => {
        setInputList(inputList.map((todo, i) =>(
            i === index ? {...todo,completed : !todo.completed} : todo
        )));
    };

    //1. **`inputList.map`**: 
    //    - 배열의 각 항목을 순회하며 `todo`(현재 항목)와 `i`(현재 인덱스)를 반환합니다.
    // 2. **`i === index`**: 
    //    - 현재 항목의 인덱스가 클릭된 항목의 인덱스인지 확인합니다.
    // 3. **`{ ...todo, completed: !todo.completed }`**:
    //    - 클릭된 항목(`i === index`)이라면, 기존 `todo` 객체를 복사하고 `completed` 값을 반전(`true` → `false` 또는 `false` → `true`)합니다.
    //    - `...todo`로 기존의 `text` 속성을 유지하고, `completed`만 새 값으로 업데이트합니다.
    // 4. **`: todo`**:
    //    - 클릭된 항목이 아니면, 기존의 `todo` 객체를 그대로 반환합니다.
    // ### 만약 `...todo`를 사용하지 않는다면?**
    // `...todo`를 사용하지 않으면, 기존 속성들이 사라질 위험이 있습니다.

    return (
        <>
            <div>
                <input type="text" value={inputValue} onChange={changeTodoInput} />
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
                        <input type="checkbox" checked={todo.completed} onChange={() => listChkFun(i)} />
                        <p
                            style={{
                                textDecoration: todo.completed ? "line-through" : "none",
                                color: todo.completed ? "red" : "#000",
                            }}
                        >
                            {todo.text}
                        </p>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default App4;
