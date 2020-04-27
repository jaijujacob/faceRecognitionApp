import React, { Component } from 'react';
import Navigation from './compnents/Navigation/Navigation';
import Signin from './compnents/Signin/Signin';
import Register from './compnents/Register/Register';
import ImageLinkForm from './compnents/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './compnents/FaceRecognition/FaceRecognition';
import Rank from './compnents/Rank/Rank';
import Logo from './compnents/Logo/Logo';
import Particles from 'react-particles-js';
import './App.css';


const particleOpetions = {
  // particles: {
  //   line_linked: {
  //     shadow: {
  //       enable: true,
  //       color: "#3CA9D1",
  //       blur: 5
  //     }
  //   }
  // }
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}


const initialState = {
  input: '',
  imageUrl: '',
  box: {},
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
}
class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (user) => {
    this.setState({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        entries: user.entries,
        joined: user.joined
      }
    })

  }

  calculateFaceLocation = (data) => {
    console.log(data);
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width, height);

    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }
  displayFaceBox = (box) => {
    console.log("display FaceBox function", box);
    this.setState({ box: box });
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState);
    }
    else if (route === 'home') {
      this.setState({ isSignedIn: true })
    }
    this.setState({ route: route });
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }
  onButtonSubmit = () => {
    // https://kottke.org/plus/misc/images/ai-faces-01.jpg
    // https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-5.jpg
    this.setState({ imageUrl: this.state.input })
    fetch('https://whispering-spire-30579.herokuapp.com/imageurl', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        input: this.state.input
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response) {
          
          fetch('https://whispering-spire-30579.herokuapp.com/image', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              console.log('here', count);
              this.setState(Object.assign(this.state.user, { entries: count }))
            })
            .catch(err => {
              console.log(err);
            });
            this.displayFaceBox(this.calculateFaceLocation(response));
        }
      }).catch(err => console.log(err));
  }
  render() {
    const { isSignedIn, imageUrl, route, box } = this.state;
    return (
      <div className="App">
        <Particles className="particles" params={particleOpetions} />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        {this.state.route === 'home'
          ? <div>
            <Logo />
            <Rank name={this.state.user.name} entries={this.state.user.entries} />

            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognition
              box={box}
              imageUrl={imageUrl}
            />
          </div>
          : (route === 'signin'
            ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
            : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
          )
        }
      </div>
    );
  }
}

export default App;
