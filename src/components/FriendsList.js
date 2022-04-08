import React from "react";
import FriendsQuoteItem from './FriendsQuoteItem';

const FriendsList = ({friends}) => {

    const FriendsAllQuotes = friends.map((quote, index) => {
        return (
        <FriendsQuoteItem quote={quote} key = {index}  /> 
            )
        })

        return (
            <>
            {FriendsAllQuotes}
            </>
        )
};

export default FriendsList;