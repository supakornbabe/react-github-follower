import React from 'react'
import UsernameInput from './components/user-input'
import FollowerListView from './components/follower-list'
import axios from 'axios';

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            follower:null,
        }
    }

    handleUsername = data => {
        this.setState({
            username: data,
        })
        this.fetchFollowerData(data)
    }

    async fetchFollowerData(username){
        axios.get(`https://api.github.com/users/`+username+'/followers').then(
            (data)=>{
                //console.log(data.data)
                this.setState({follower:data.data})
            }
        )
    }

    render(){
        return (
            <>
                <UsernameInput handleUsername = {this.handleUsername}/>
                <FollowerListView data={this.state.follower}/> 
            </>
            );
    }
}