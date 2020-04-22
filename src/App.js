import React from 'react';
import Navigation from './compnents/Navigation/Navigation';
import ImageLinkForm from './compnents/ImageLinkForm/ImageLinkForm';
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


function App() {
  return (
    <div className="App">
      <Particles className="particles" params={particleOpetions} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* {
      <FaceRecognition />} */}
    </div>
  );
}

export default App;
