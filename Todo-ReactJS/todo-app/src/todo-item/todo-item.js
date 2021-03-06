import React from 'react'
import './todo-item.css'

const todoItem = (props) => {
    return (
        <div className="container">
            <input
                type="text"
                className="todo--input"
                value={props.value}
                disabled={true} />

            <button
                type="button"
                className="btn delete"
                onClick={props.deleteTodo}
            >Delete
            </button>

        </div>
    )
}
export default todoItem;