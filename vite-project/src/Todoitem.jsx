function Todoitem({ item, i, deleteTodo, completedTodo }) {

    return (
        <li>
            <input
                type="checkbox"
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
