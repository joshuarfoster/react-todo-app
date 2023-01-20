import React from "react";

function Todo ({task, deleteTodo, idx}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        deleteTodo(idx);
    };
    return (
        <div>
            <p>{task}</p>
            <form onSubmit={handleSubmit}>
               <input type="submit" value="X"/>
           </form>
       </div>
    );
};

export default Todo;