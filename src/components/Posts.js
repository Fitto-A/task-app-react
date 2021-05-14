import React, { Component } from 'react'

export default class Posts extends Component {


    state={
        posts: []
    }

    async componentDidMount(){
        const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await resp.json();
        this.setState({posts: data})
    }

    render() {

        const title = {
            color: '#26408B',
            marginBottom: '15px'
        }


        return (
            <div>
                <h1 style={title}>Posts</h1>
                {
                    this.state.posts.map(post => {
                        return <div key={post.id}>
                            <h2 style={title}>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    })
                }
            </div>
        )
    }
}
