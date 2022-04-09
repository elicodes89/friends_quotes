import React , { useState , useEffect } from "react";
import FriendsList from "./components/FriendsList";
import FriendsHeader from './containers/FriendsHeader'
import frame from './frame.png'
import './App.css';

  const App = () => {

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
  return (

    <>
    <div id = "center">
    <FriendsHeader handleChange={(friend) => filteredQuoteList(friend)}/>
    </div>
    <div className="all-q" id="center">
    <FriendsList friends = {filtered} />
    </div>
    
    </>
  )
  }

export default App;
