import React from "react";

const FriendsQuoteItem = ({quote}) => {

    return (
            <>
            <h1>{quote.character}</h1>
            <h2>{quote.quote}</h2>
            </>

    
    )
};

export default FriendsQuoteItem;