  import React from 'react';
import LottieView from 'lottie-react-native';

export default class BarterAnimation extends React.Component {
  render() {
    return (
      <LottieView
      source={require('../assets/barter-animation.json')}
      style={{width:"60%"}}
      autoPlay loop />
    )
  }
}