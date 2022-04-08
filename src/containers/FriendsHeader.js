import React from "react";

const FriendsHeader = (props) => {
  return (
    <>
      <button type="button">
        <img
          src="./img/google.png"
          alt="my image"
          onClick={console.log("button clicked!!!!")}
        />
      </button>

      <button onClick={() => props.handleChange("Joey")}>Joey</button>
      <button onClick={() => props.handleChange("Phoebe")}>Phoebe</button>
      <button onClick={() => props.handleChange("Rachel")}>Rachel</button>
      <button onClick={() => props.handleChange("Ross")}>Ross</button>
      <button onClick={() => props.handleChange("Monica")}>Monica</button>
      <button onClick={() => props.handleChange("Chandler")}>Chandler</button>

      {/* <input value ={userInput} onChange = {handleInputChange} type='text'/> */}
    </>
  );
};

export default FriendsHeader;
