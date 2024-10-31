import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Dennis Mburugu',
        bio: 'I am a frontend Software Developer from Nairobi, Kenya',
        email: 'dennojunior@gmail.com',
        institution: 'GoMyCode Kenya',
        imgSrc: process.env.PUBLIC_URL + '/Dennis.jpg',
        profession: 'Web Developer',
      },
      shows: false,
      timeSinceMounted: 0,
    };
  }

  toggleProfile = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMounted: prevState.timeSinceMounted + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleProfile}>
          {this.state.shows ? 'Hide Profile' : 'Show Profile'}
        </button>
        {this.state.shows && (
          <div id='profile'>
            <img src={this.state.person.imgSrc} alt={this.state.person.fullName} />
            <h2>
              <span>Name:</span> {this.state.person.fullName}
            </h2>
            <p>
              <span>Email:</span> {this.state.person.email}
            </p>
            <p>
              <span>Bio:</span> {this.state.person.bio}
            </p>
            <p>
              <span>Profession:</span> {this.state.person.profession}
            </p>
            <p>
              <span>Institution:</span> {this.state.person.institution}
            </p>
          </div>
        )}
        <p id='timer'> <span>Time since component mounted:</span> {this.state.timeSinceMounted} seconds</p>
      </div>
    );
  }
}

export default App;
