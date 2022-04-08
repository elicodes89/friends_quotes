import React , { useState , useEffect } from "react";
import FriendsList from "../components/FriendsList";
import FriendsQuoteItem from "../components/FriendsQuoteItem";

const FriendsContainer = () => {

    const [friendsQuotes, setFriendsQuotes] = useState([]);

    useEffect (() => {
        loadFriendsQuotes(); 

    },[])

    const loadFriendsQuotes = function (){
        fetch('https://friends-quotes-api.herokuapp.com/quotes')
            .then(response => response.json())
            .then(fQuotes => setFriendsQuotes(fQuotes)

        
        
        )}
            console.log(friendsQuotes)
    return (
        <>
        <h1>Hello from Friends</h1>

        <FriendsList friends={friendsQuotes}  />

        </>

    )
}
export default FriendsContainer;