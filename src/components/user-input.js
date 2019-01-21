import React from 'react'
export default class UserInput extends React.Component{
    constructor() {
        super();
        this.state ={
            username:''
        }
    }
    handleSubmit = e=>{
        e.preventDefault();
        this.props.handleUsername(this.state.username)
    }
    handleChanged = e=>{
        this.setState({username : e.target.value})
    }
    render(){
        return(
            <>
                <form onSubmit = {this.handleSubmit}>
                    <input 
                    name="username" 
                    type="text" 
                    onChange={this.handleChanged} 
                    value={this.state.username}
                    />
                    <button>Get Follower</button>
                </form>
            </>
        )
    }
}
