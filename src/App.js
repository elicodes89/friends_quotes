import React , { useState , useEffect } from "react";
import FriendsList from "./components/FriendsList";
import FriendsHeader from './containers/FriendsHeader'
import './App.css';
// import friends from './friends.png';
// import joey from './joey.png';


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
    <h1>Hello from Friends</h1>
    </div>
    <FriendsHeader handleChange={(friend) => filteredQuoteList(friend)}/>
      
    <FriendsList friends = {filtered} />
    </>
  )
  }

export default App;
