import React from 'react';
import "./Doors.css"




export default function Doors( props ) {
  const { openDoor1, openDoor2, openDoor3, handler, prize, restart, status } = props;

  //Array of doors with cooresponding IDs
  let doors = [
    {
      id:1
    },
    {
      id:2
    },
    {
      id:3
    }
  ]

  // map doors and display doors with prizes or goats
  let door = doors.map( (door, key) => 
    {
      //door 1
      if (door.id === openDoor1 && door.id === prize){
        return (<div key={key} className="door">
                  <div id={door.id} className="door prize"></div>
                </div>)
      }else if(door.id === openDoor1){
        return (<div key={key} className="door">
                  <div id={door.id} className="door goat"></div>
                </div>)
      }
      //door2
      if (door.id === openDoor2 && door.id === prize){
        return (<div key={key} className="door">
                  <div id={door.id} className="door prize"></div>
                </div>)
      }else if(door.id === openDoor2){
        return (<div key={key} className="door">
                  <div id={door.id} className="door goat"></div>
                </div>)
      }
      //door3
      if (door.id === openDoor3 && door.id === prize){
        return (<div key={key} className="door">
                  <div id={door.id} className="door prize"></div>
                </div>)
      }else if(door.id === openDoor3){
        return (<div key={key} className="door">
                  <div id={door.id} className="door goat"></div>
                </div>)
      //if the first pick has already been set, closed door will not trigger event
      }else if (status === "win" || status === "lose"){
        return <div key={key}><div id={door.id} className='door closed'></div></div>
      //if it is the player's second try the door can still be clicked
      }else{
        return <div key={key}><div id={door.id} className='door closed' onClick={handler}></div></div>
      }
      
    }
    
  )
  //function to get results of game
  function winOrLose() {
    if (status === "win") {
      return <h2>Congrats! You win a new car!</h2>
    } else if (status === "lose") {
      return <h2>Zonks! You lose! Do you want to keep the goat?...</h2>
    }
  }
  
  //style for the background
  const flex = {
    display: "flex",
    padding: "0px",
    margin: "0px"
  }
  
  //return display
  return (
    <div>
      <h1>Let's Make a Deal</h1>
      <p>Let's Make a Deal with the Monty Hall problem. This app simulates the 'Let's Make a Deal'
        game where Monty Hall would ask a player to choose a door to win a prize. It's easy, pick one
        door, one of the doors where there is no prize will open. You can select another door or simply
        click on the door you choose. After your door will open and you will win or loose. Good Luck!
      </p>
      <div style={flex}>
        {door}
      </div>
      {winOrLose()}
      <button onClick={restart}>Restart</button><br></br>
    </div>
  )
}


