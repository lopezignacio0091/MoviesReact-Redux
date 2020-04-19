import React, { Component } from 'react'

export class Clock extends Component {
    
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }

      //lifecycle methods se ejecutan luego de que se renderiza en DOM

      //setup 
      componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
       }

      //clear limpia recursos
      componentWillUnmount() {
        clearInterval(this.timerID);
      }

      tick() {
        this.setState({
          date: new Date()
        });
      }

    render() {
        return (
            <div>
                <h1>Clock Feature Component</h1>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

export default Clock
