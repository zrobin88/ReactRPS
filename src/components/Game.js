import React, { Component } from 'react';
import './style.css'

const compChoices = ['rock', 'paper', 'scissors']



class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: 'Click any buttong to get started!',
            wins: 0,
            losses: 0,
            ties: 0,
            appStyle: {
                background: 'linear-gradient(90deg, rgba(205,223,226,1) 0%, rgba(213,255,219,1) 33%, rgba(0,212,255,1) 100%)',
                height: "100vh",
                width: "100%",
            },
            val: ['rock', 'paper', 'scissors']
        }
        this.handlesSubmit = this.handlesSubmit.bind(this)
    }



    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    handlesSubmit(e) {
        e.preventDefault()

        var userGuess = e.target.value;
        console.log(userGuess)
        var computerGuess = compChoices[Math.floor(Math.random() * compChoices.length)]
        console.log(computerGuess)
        this.setState({text: 'Computer Guess: '+computerGuess})
        console.log(this.state.wins)
        if ((userGuess === "rock") || (userGuess === "paper") || (userGuess === "scissors")) {

            if ((userGuess === "rock" && computerGuess === "scissors") ||
              (userGuess === "scissors" && computerGuess === "paper") || 
              (userGuess === "paper" && computerGuess === "rock")) {
                this.setState({wins: this.state.wins+1})
            } else if (userGuess === computerGuess) {
                this.setState({ties: this.state.ties+1});
            } else {
                this.setState({losses: this.state.losses +1});
            }

    }
        if(this.state.wins >= 10){
            this.setState({
                text: "You beat the computer!!",
                appStyle: {background: 'linear-gradient(90deg, rgba(79,140,45,1) 0%, rgba(66,219,41,1) 52%, rgba(163,240,173,1) 100%)',
                height: "100vh",
                width: "100%",
            }
            })
        }
        if(this.state.losses >= 10){
            this.setState({
                text: "Computer wins! Better luck next time kid",
                appStyle: {background: 'linear-gradient(90deg, rgba(251,76,76,1) 0%, rgba(253,29,29,1) 50%, rgba(241,105,0,1) 100%)',
                height: "100vh",
                width: "100%",
            }
            })
        }
       
    }



    render() {
        return (
            
            <div style={this.state.appStyle} className='container wrapper'>
                <div className='row'>
                <div className='col-md-4 score'>
                <h3 className='coolFont'>Wins: {this.state.wins}</h3>
                </div>
                <div className='col-md-4 score'>
                <h3 className='coolFont'>Losses: {this.state.losses}</h3>
                </div>
                <div className='col-md-4 score'>
                <h3 className='coolFont'>Ties: {this.state.ties}</h3>
                </div>
               
                <h3 className='coolFont mx-auto'style={{padding:'20px'}}>{this.state.text}</h3>
              </div>
                <div className='row'>
                <div className='col-md-4'>
                <button
                    className="btn-success btn-large"
                    style={{ 'border-radius': '25px' }}
                    value={this.state.val[0]}
                    onClick={this.handlesSubmit}
                    onChange={this.handleChange}
                    type="submit">ROCK<i
                        class="fa fa-search"></i>
                </button>
                </div>
                <div className='col-md-4'>
                <button
                    className="btn-success btn-large"
                    style={{ 'border-radius': '25px' }}
                    value={this.state.val[1]}
                    onClick={this.handlesSubmit}
                    onChange={this.handleChange}
                    type="submit">PAPER<i
                        class="fa fa-search"></i>
                </button>
                </div>
                <div className='col-md-4'>
                <button
                    className="btn-success btn-large"
                    style={{ 'border-radius': '25px' }}
                    value={this.state.val[2]}
                    onClick={this.handlesSubmit}
                    onChange={this.handleChange}
                    type="submit">SCISSORS<i
                        class="fa fa-search"></i>
                </button>
                </div>
             </div> 
            </div>
           
        )
    }

}
export default Game