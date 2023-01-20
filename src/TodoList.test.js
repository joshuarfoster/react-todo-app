import React from "react";
import { fireEvent, render } from "@testing-library/react";
import TodoList from "./TodoList";

function addTodo (toDoList, task="task") {
    const taskInput = toDoList.getByLabelText(/Task/i)
    fireEvent.change(taskInput, {target: { value: task }})
    const button = toDoList.queryByRole("button", { type:"submit" })
    fireEvent.click(button)
}

it("renders without crashing", function () {
    render(<TodoList/>);
});

it("matches snapshot", function () {
    const {asFragment} = render(<TodoList/>);
    expect(asFragment()).toMatchSnapshot();
});

it("should add new todo", function () {
    const todoList = render(<TodoList/>);
    addTodo(todoList);
    const deleteBtn = todoList.queryByText("X");
    expect(deleteBtn).toBeInTheDocument();
});

it("should delete old todo", function () {
    const todoList = render(<TodoList/>);
    addTodo(todoList);
    const deleteBtn = todoList.queryByText("X");
    fireEvent.click(deleteBtn);
    expect(deleteBtn).not.toBeInTheDocument();
})