import React, {Component} from "react";
import TodoForm from "./todoForm";
import TodoList from "./todoList";

export default class Todo extends Component {
    render(){
        return(
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
            </div>
        )
    }
}