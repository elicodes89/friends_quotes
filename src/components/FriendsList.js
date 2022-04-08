import React from "react";
import FriendsQuoteItem from './FriendsQuoteItem';

const FriendsList = ({friends}) => {

    const FriendsAllQuotes = friends.map((friend, index) => {
        return (
        <FriendsQuoteItem friend={friend} key = {index}  /> 
            )
        })

        return (
            <>
            {FriendsAllQuotes}
            </>
        )
};

export default FriendsList;