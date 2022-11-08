import React, {Component} from "react";
import TodoForm from "./todoForm";
import TodoList from "./todoList";
import Axios from "axios";

const URL = 'http://localhost:3003/api/todos'



export default class Todo extends Component {

    constructor(props){
        super(props)
        this.state = { description: '', list: []}
            this.handleChange = this.handleChange.bind(this)
            this.handleAdd = this.handleAdd.bind(this)
            this.handleRemove = this.handleRemove.bind(this)

        }

        refresh(){
            Axios.get(`${URL}?sort=-createdAt`)
            .then(resp => this.setState({...this.state, description: '', list: resp.data}))
        }

    handleChange(e){
        this.setState({...this.state, description: e.target.value})
    }

    handleAdd(){
        const description = this.state.description
        Axios.post(URL, {description})
        .then(resp => this.refresh())
    }

    handleRemove(todo){
        Axios.delete(`${URL}/${Todo._id}`)
        .then(resp => this.refresh())
    }    

    render(){
        return(
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm/>
                <TodoForm description={this.state.description}
                        handleChange={this.handleChange}
                        handleAdd={this.handleAdd}/>
                <TodoList list={this.state.list}
                handleRemove={this.handleRemove}/>
            </div>
        )
    }
}