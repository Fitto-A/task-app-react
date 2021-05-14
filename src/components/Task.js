import React, { Component } from "react";
import PropTypes from "prop-types";


class Task extends Component {

    styleComplited() {
        return {
            fontSize: '25px',
            textDecoration: this.props.task.done ? 'line-through' : 'none',
            color: this.props.task.done ? 'gray' : 'black'
        }
    }

    render(){
        const {task} = this.props;

        const btnDelete = {
            background: 'brown',
            color: '#fff',
            fontSize: '15px',
            border: 'none',
            marginLeft: '5px',
            padding: '8px',
            borderRadius: '20%',
            cursor:'pointer'
        }

        return <div style={this.styleComplited()}>
            {task.title} - 
            {task.description} - 
            {task.done} - 
            {task.id}
            <input type="checkbox" onChange={this.props.checkDone.bind(this, task.id)}/>
            <button style={btnDelete} onClick={this.props.deleteTask.bind(this, task.id)}>
                X
            </button>
            <br/>
            <br/>
        </div>
    }
}

Task.propTypes = {
    task: PropTypes.object.isRequired
}

export default Task;