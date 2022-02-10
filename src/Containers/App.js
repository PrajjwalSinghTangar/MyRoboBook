import React, {Component} from 'react';
import CardList from '../Components/Card/CardList.jsx'
import SearchBox from '../Components/SearchBox/SearchBox.jsx';
import {UserData} from '../Components/UserData'
import './App.css'
import Particles from 'react-tsparticles';

class App extends Component {
  constructor(){
    super()
    this.state ={
      UserData: UserData,
      searchfield: ''
    }
  }

onSearchChange = (event) => {
  this.setState({ searchfield: event.target.value})
}

  render () {
    const filteredUserData = this.state.UserData.filter(UserData => {
      return UserData.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
      })
    const particlesInit = (main) => {
          console.log(main);
      
          // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        };
    const particlesLoaded = (container) => {
        console.log(container);
      };
    return (
      <div className='tc'>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList UserData={filteredUserData}/>
        <Particles className='particles'
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#0d47a1",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
      />
      </div>
    )
  }
}

export default App;