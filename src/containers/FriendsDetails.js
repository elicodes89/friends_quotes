import React from "react";

const FriendsForm = (props) => {
    // const [userInput, setUserInput] = useState('')

    // const handleChange = (event) =>
    {
        // onFormChange(event.target.value);
    //     setUserInput(event.target.value)
    // }

    // const handleInputChange = (event) =>
    // {
    //     setUserInput(event.target.value)
    //     searchByCharacter(userInput);
    // }

    return (
            <>
            <button onClick = {() => props.handleChange('Joey')}>Joey</button>
            <button onClick = {() => props.handleChange('Phoebe')}>Phoebe</button>
            <button onClick = {() => props.handleChange('Rachel')}>Rachel</button>
            <button onClick = {() => props.handleChange('Ross')}>Ross</button>
            <button onClick = {() => props.handleChange('Monica')}>Monica</button>
            <button onClick = {() => props.handleChange('Chandler')}>Chandler</button>

            {/* <input value ={userInput} onChange = {handleInputChange} type='text'/> */}
            </>
    )
}
}

export default FriendsForm;