function Todoitem({ item, i, deleteTodo, completedTodo }) {

    return (
        <li>
            <label for="chklist">리스트 체크</label>
            <input
                type="checkbox"
                id="chklist"
                checked={item.completed}
                onChange={() => completedTodo(i)}
            />
            <p
                className="text"
                style={{
                    textDecoration: item.completed ? "line-through" : "none",
                    color: item.completed ? "red" : "#000",
                }}
            >
                {item.text}
            </p>
            <button className="deleteBtn" onClick={() => deleteTodo(i)}>
                삭제
            </button>
        </li>
    );
}

export default Todoitem;
