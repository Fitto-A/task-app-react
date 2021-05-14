import React, { Component } from 'react';

class TaskForm extends Component {

    state = {
        title: '',
        description:''
    }

    onSubmit = e => {
        this.props.addTask(this.state.title, this.state.description);
        e.preventDefault();
    }

    onChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render(){

        const input = {
            marginLeft: '0',
            fontSize: '15px',
            padding: '5px',
            outline: 'none',
            border: '2px solid #26408B',
            color: '#0D0221',
            minWidth: '320px'
        }

        const textarea = {
            marginLeft: '0',
            fontSize: '15px',
            padding: '5px',
            outline: 'none',
            border: '2px solid #26408B',
            color: '#0D0221',
            minHeight: '100px',
            minWidth: '320px'            
        }

        const btn = {
            marginLeft: '0',
            color: '#C2E7D9',
            background: '#26408B',
            fontSize: '20px',
            padding: '15px',
            cursor: 'pointer',
            border: 'none'
        }

        return(
            <form onSubmit={this.onSubmit}>
                <input
                style={input} 
                type='text'
                name='title'
                placeholder='Ingresar tarea nueva'
                onChange={this.onChange}
                value={this.state.title}
                />

                <br/>
                <textarea 
                style={textarea}
                name='description'
                placeholder='Ingresar una descripción'
                onChange={this.onChange}
                value={this.state.description}
                />

                <br/>
                <button style={btn} type='submit'>
                    Agregar tarea
                </button>
            </form>
        )
    }
}

export default TaskForm;