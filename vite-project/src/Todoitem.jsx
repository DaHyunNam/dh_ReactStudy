function Todoitem({ item, i, deleteTodo, completedTodo }) {
    const { text, completed } = item;

    return (
        <li>
            <input
                type="checkbox"
                checked={completed}
                onChange={() => completedTodo(i)} // 이벤트 핸들러 수정
            />
            <p
                className="text"
                style={{
                    textDecoration: completed ? "line-through" : "none",
                    color: completed ? "red" : "#000",
                }}
            >
                {text}
            </p>
            <button className="deleteBtn" onClick={() => deleteTodo(i)}>
                {" "}
                {/* 이벤트 핸들러 수정 */}
                삭제
            </button>
        </li>
    );
}

export default Todoitem;
