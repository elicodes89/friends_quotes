import React , { useState , useEffect } from "react";
import FriendsList from "../components/FriendsList";
// import FriendsQuoteItem from "../components/FriendsQuoteItem";
import FriendsDetails from "./FriendsDetails"

const FriendsContainer = () => {

    const [friendsQuotes, setFriendsQuotes] = useState([]);
    const [filtered , setFiltered] = useState([]);

    useEffect (() => {
        loadFriendsQuotes(); 

    },[])

    useEffect(() =>
    {
        setFiltered(friendsQuotes)
    },[friendsQuotes]);

    const loadFriendsQuotes = function (){
        fetch('https://friends-quotes-api.herokuapp.com/quotes')
            .then(response => response.json())
            .then(fQuotes => setFriendsQuotes(fQuotes)

        
        
        )}

    const filteredQuoteList = (friend) =>
    {
            const newFiltered = friendsQuotes.filter(quote => quote.character === friend)
            setFiltered(newFiltered)
        
    }

    // const searchByCharacter = (character) =>
    // {
    //     if (character === false)
    //     {
    //         setFiltered(friendsQuotes)
    //     }
    //     else
    //     {
    //         const characterFiltered = friendsQuotes.filter(quote => {
    //             return quote.character.includes(character)})
    //             setFiltered(characterFiltered)
    //     }
    // }
            // console.log(friendsQuotes)
    return (
        <>
        <h1>Hello from Friends</h1>
        <FriendsDetails handleChange={friend => filteredQuoteList(friend)}  />
        <FriendsList friends={filtered}  />
        </>

    )
}

export default FriendsContainer;