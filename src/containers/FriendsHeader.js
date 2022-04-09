import React from "react";
import friends from '../friends.png';
import joey from '../joey.png';
import phoebe from '../phoebe.png';
import rachel from '../rachel.png';
import ross from '../ross.png';
import monica from '../monica.png';
import chandler from '../chandler.png';


const FriendsHeader = (props) => {
  return (
    <>
      <div className="row">
        <div className="column">
      <button onClick={() => props.handleChange("Joey")}><img src={joey} alt="joey" height="100" width="100"></img></button>
      </div>
        <div className="column">
      <button onClick={() => props.handleChange("Phoebe")}><img src={phoebe} alt="joey" height="100" width="100" ></img></button>
      </div>
        <div className="column">     
      <button onClick={() => props.handleChange("Rachel")}><img src={rachel}  alt="joey" height="100" width="100"></img></button>
      </div>
        <div className="column">     
      <button onClick={() => props.handleChange("Ross")}><img src={ross}alt="joey" height="100" width="100"></img></button>
      </div>
        <div className="column">     
      <button onClick={() => props.handleChange("Monica")}><img src={monica} alt="joey" height="100" width="100" ></img></button>
      </div>
        <div className="column">     
      <button onClick={() => props.handleChange("Chandler")}><img src={chandler} alt="joey" height="100" width="100"></img></button>
        </div>
      </div>
    </>
  );
};

export default FriendsHeader;
