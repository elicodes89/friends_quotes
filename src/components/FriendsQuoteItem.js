import React from "react";

const FriendsQuoteItem = ({quote}) => {

    return (
            <>
            <h1>Quote:{quote.quote}</h1>
            <h2>Character:{quote.character}</h2>
            </>

    
    )
};

export default FriendsQuoteItem;