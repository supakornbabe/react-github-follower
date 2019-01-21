import React from 'react'

export default function FollowerListItem (props){
        const data = props.data
        return (
            <>
            <img src={data.avatar_url} alt = {data.login}/> {data.login} <a href={data.html_url}>GithubLink</a>
            </>
        )
}