import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Route from './Route.js';

class mainRoute extends Component {
   render() {
      return (
         <Route />
      )
   }
}
export default mainRoute
AppRegistry.registerComponent('mainRoute', () => mainRoute)