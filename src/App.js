import './App.css';
import React, { Component } from 'react';
import Doors from './components/Doors'

class App extends Component {

  constructor() {
    super()
    //function bindings
    this.eventHandler = this.eventHandler.bind(this);
    this.restartGame = this.restartGame.bind(this)
    this.openDoor = this.openDoor.bind(this)
    this.add = this.add.bind(this)
    this.state = 
    {
      //function to restart game- zeros values and picks new random door
      prizeDoor: Math.floor(Math.random() * 3) + 1,
      userChoice1: 0,
      door1: 0,
      door2: 0,
      door3: 0,
      counter: 0,
      status: ""
    }
  }
  
  //function to restart game- zeros values and picks new random door
  restartGame(){
    this.setState({
      //gets a random number between 0 and 4
      prizeDoor: Math.floor(Math.random() * 3) + 1,
      userChoice1: 0,
      door1: 0,
      door2: 0,
      door3: 0,
      counter: 0,
      status: ""
    })
  }
  
  
  //Open Door function
  //This function picks which door should be opened
  openDoor(){
    const pick = this.state.userChoice1;
    const prize = this.state.prizeDoor;
    //array of doors
    let doors = [1, 2, 3];
    //array of that shows what door should not be opened
    let unopened = [pick, prize]
    //array that shows which door should be opened
    let open = doors.filter(x => unopened.indexOf(x) === -1);
    //Set the state
    this.setState({
      ///returned door that should be opened
      door1: open[0]
    })
  }

  //function to increase counter
  add() {
    this.setState((prevState) => ({
       counter: prevState.choiceCount + 1
    }))
  }
  
  eventHandler(event) {
    this.add()
    //if this is the player's second turn the status is set to lose
    if (this.state.counter < 1) {
      //adds 1 to choice count
      //next door is called
      this.setState({
        //adds 1 to counter
        userChoice1: parseInt(event.target.id),
        counter: this.state.counter + 1
        //next door is opened
      }, () => this.openDoor())
      
    }else {
      let win = this.state.prizeDoor;
      if (parseInt(event.target.id) === win) {
        this.setState({
          //opens the final door that is clicked and set status to win
          door3: parseInt(event.target.id),
          status: "win"
        })
      }else {
        this.setState({
          //opens the final door status set to lose
          door3: parseInt(event.target.id),
          status: "lose"
        })
      }
    }
  }

  render(){
    return (
      <div>
        <div className="App">
          <Doors status={this.state.status}
          result={this.state.status}
          openDoor1={this.state.door1}
          openDoor2={this.state.door2}
          openDoor3={this.state.door3}
          handler={this.eventHandler}
          restart={this.restartGame} 
          prize={this.state.prizeDoor} 
          firstPick={this.state.userChoice1} />
        </div>
      </div>
    );
  }
  
}

export default App;

