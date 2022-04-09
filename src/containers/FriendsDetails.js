import React from "react";

const FriendsForm = (props) => {

    return (
            <>
            <button onClick = {() => props.handleChange('Joey')}>Joey</button>
            <button onClick = {() => props.handleChange('Phoebe')}>Phoebe</button>
            <button onClick = {() => props.handleChange('Rachel')}>Rachel</button>
            <button onClick = {() => props.handleChange('Ross')}>Ross</button>
            <button onClick = {() => props.handleChange('Monica')}>Monica</button>
            <button onClick = {() => props.handleChange('Chandler')}>Chandler</button>

            </>
    )
}

export default FriendsForm;