import { useState } from "react";

function App2() {
    // 인풋 입력창
    const [inputValue, setInputValue] = useState('');
    // 입력된 인풋창 초기화
    const inputChange = (e) => {
        setInputValue(e.target.value)
    };

    // 등록하기 버튼
    const [inputList, setInputList] = useState([]);
    const inputAdd = () => {
        setInputList([...inputList,inputValue])
        setInputValue('')
    };
    // 삭제 버튼
    const deleteBtn = (index) => {
        setInputList(
            inputList.filter((item, i) => i !== index) 
        ); // i가 삭제하려는 index와 다르면 그 항목을 새로운 배열에 포함시킴 (i == index인 경우 새로운 배열에 포함)
    };
    return (
        <>
            <div>
                <input type="input" value={inputValue} onChange={inputChange} />
                <button onClick={inputAdd}>등록</button>
            </div>
            <ul>
                {inputList.map((item, i) => (
                    <li key={i}>
                        <p>{item}</p>
                        <button onClick={() => deleteBtn(i)}>삭제</button> {/* deleteBtn(i) 만 쓰면 컴포넌트가 렌더링될 때마다 `deleteBtn(i)`가 즉시 호출되게 됨 */}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default App2;