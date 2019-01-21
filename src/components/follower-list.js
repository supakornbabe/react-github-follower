import React from 'react'
import FollowerListItem from './follower-list-item'
export default class FollowerListView extends React.Component{ 
    render(){
        let follower = this.props.data ? this.props.data.map((data) => {
                console.log(data.login)
                return <li>
                <FollowerListItem data={data}/>
                </li>
            }) : '' ;
        
        return (
            <ol>{follower}</ol>
        )
    }
}
