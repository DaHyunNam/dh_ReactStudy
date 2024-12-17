import { useState } from "react";
import './App.css'

function Todoitem({ item, i, deleteTodo }) {
    const [isValidCheck, setValidCheck] = useState(false);

    const changeCheck = () => {
        setValidCheck(!isValidCheck); // 기존값에서 반대
    };
    const onClickDelete = () => {
        deleteTodo(i); // 부모로부터 전달받은 함수에 현재 항목의 i를 넘김
    };
    return (
        <li>
            <label>
                <span className="ir-text">todo check</span>
            </label>
            <input type="checkbox" value={isValidCheck} onChange={changeCheck} />
            <p className="text" style={{ textDecoration: isValidCheck ? "line-through" : "none", color: isValidCheck ? "red" : "#000" }}>
                {item} {/* 부모로부터 전달받은 item 값을 표시 */}
            </p>
            <button className="deleteBtn" onClick={onClickDelete}>
                삭제
            </button>
        </li>
    );
}

export default Todoitem;

