import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Navigation from './compnents/Navigation/Navigation';
import ImageLinkForm from './compnents/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './compnents/FaceRecognition/FaceRecognition';
import Rank from './compnents/Rank/Rank';
import Logo from './compnents/Logo/Logo';
import Particles from 'react-particles-js';
import './App.css';
import { render } from '@testing-library/react';

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
const app = new Clarifai.App({
  apiKey: '1c9d7eaac28b4edf9ca21d40f67e712d'
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {}
    }
  }
  calculateFaceLocation = (data) => {
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
  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }
  onButtonSubmit = () => {
    // https://kottke.org/plus/misc/images/ai-faces-01.jpg
    // https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-5.jpg
    this.setState({ imageUrl: this.state.input })
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response))
        .catch(err => console.log(err))
      );

  }
  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particleOpetions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
        <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
      </div>
    )
  }
}

export default App;
