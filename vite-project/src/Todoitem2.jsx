import { useState } from "react";

function Todo({ text, i, deleteItem }) {
    const [isValidChk, setValidChk] = useState(false);
    const clickValid = () => {
        setValidChk(!isValidChk);
    };
    const deleteBtn = () => {
        deleteItem(i);
    };
    return (
        <>
            <li>
                <input type="checkbox" value={isValidChk} onChange={clickValid} />
                <p>{text}</p>
                <button onClick={deleteBtn}>삭제</button>
            </li>
        </>
    );
}

export default Todo;